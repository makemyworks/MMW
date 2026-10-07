import re

with open('src/components/Header.tsx', 'r') as f:
    content = f.read()

# 1. Replace `serviceDropdown` array
old_services_pattern = r'type ServiceItem = \{[\s\S]*?\};\s*const serviceDropdown: ServiceItem\[\] = \[\s*\{[\s\S]*?\}\s*\];'
new_services_code = """type ServiceItem = {
  icon: string;
  label: string;
  path: string;
};

const servicesColumn1: ServiceItem[] = [
  { icon: "📱", label: "App Development", path: "/services/app-development" },
  { icon: "🌐", label: "Website Development", path: "/services/website-development" },
  { icon: "🎬", label: "AI Video Generation", path: "/services/ai-video-generation" },
  { icon: "🖼️", label: "AI Image Generation", path: "/services/ai-image-generation" },
  { icon: "📈", label: "SEO & Google AI SEO", path: "/services/seo" },
];

const servicesColumn2: ServiceItem[] = [
  { icon: "⚙️", label: "Digital & Tech Solutions", path: "/services/digital-solutions" },
  { icon: "🛠️", label: "Tech Support & More", path: "/services/tech-support" },
  { icon: "📱", label: "Social Media Setup", path: "/services/social-media" },
  { icon: "🎨", label: "Logo Design & Branding", path: "/services/branding" },
  { icon: "💬", label: "WhatsApp Automation", path: "/services/whatsapp-automation" },
];"""
content = re.sub(old_services_pattern, new_services_code, content)

# 2. Replace the dropdown HTML
old_dropdown_pattern = r'<div\s*className=\{\s*servicesOpen\s*\?\s*"header-dropdown-menu header-dropdown-open"\s*:\s*"header-dropdown-menu"\s*\}\s*>.*?</div>\s*</div>'

new_dropdown_html = """<div
                className={
                  servicesOpen
                    ? "header-mega-menu header-dropdown-open"
                    : "header-mega-menu"
                }
              >
                <div className="mega-menu-column">
                  {servicesColumn1.map((item) => (
                    <NavLink
                      key={item.path}
                      to={item.path}
                      className={({ isActive }) =>
                        isActive
                          ? "mega-dropdown-item mega-dropdown-item-active"
                          : "mega-dropdown-item"
                      }
                      onClick={closeMenu}
                    >
                      <span className="mega-icon">{item.icon}</span>
                      <span className="mega-label">{item.label}</span>
                    </NavLink>
                  ))}
                </div>
                <div className="mega-menu-column">
                  {servicesColumn2.map((item) => (
                    <NavLink
                      key={item.path}
                      to={item.path}
                      className={({ isActive }) =>
                        isActive
                          ? "mega-dropdown-item mega-dropdown-item-active"
                          : "mega-dropdown-item"
                      }
                      onClick={closeMenu}
                    >
                      <span className="mega-icon">{item.icon}</span>
                      <span className="mega-label">{item.label}</span>
                    </NavLink>
                  ))}
                </div>
              </div>
            </div>"""
content = re.sub(old_dropdown_pattern, new_dropdown_html, content, flags=re.DOTALL)

# 3. Add styles to CSS. We'll replace `.site-header .header-dropdown-menu` and `.site-header .header-dropdown-item` styles.
css_replacements = [
    # Replace the old dropdown menu styles with the mega menu styles
    (r'\.site-header \.header-dropdown-menu \{[^\}]*\}', """
        .site-header .header-mega-menu {
          position: absolute;
          top: calc(100% + 2px);
          left: 50%;
          width: max-content;
          display: flex;
          gap: 20px;
          margin: 0;
          padding: 20px;
          background: #ffffff;
          border: 1px solid #e5ece9;
          border-radius: 16px;
          box-shadow:
            0 10px 25px rgba(0, 0, 0, 0.05);
          transform: translateX(-50%) translateY(8px);
          opacity: 0;
          visibility: hidden;
          pointer-events: none;
          transition:
            opacity 0.25s ease,
            transform 0.25s ease,
            visibility 0.25s ease;
          z-index: 100;
        }
        .site-header .mega-menu-column {
          display: flex;
          flex-direction: column;
          gap: 6px;
        }
    """),
    (r'\.site-header \.header-dropdown-open \{[^\}]*\}', """
        .site-header .header-dropdown-open {
          transform: translateX(-50%) translateY(3px);
          opacity: 1;
          visibility: visible;
          pointer-events: auto;
        }
    """),
    (r'\.site-header \.header-dropdown-menu::before \{[^\}]*\}', ""),
    (r'\.site-header \.header-dropdown-item \{[^\}]*\}', """
        .site-header .mega-dropdown-item {
          display: flex;
          align-items: center;
          width: 100%;
          padding: 8px 12px;
          margin: 0;
          color: #071126;
          background: transparent;
          border: none;
          border-radius: 8px;
          font-family: inherit;
          font-size: 0.9rem;
          font-weight: 500;
          text-decoration: none;
          transition: background 0.2s ease, transform 0.2s ease;
        }
        .site-header .mega-icon {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          width: 24px;
          height: 24px;
          margin-right: 12px;
          font-size: 16px;
          color: #1677F2;
        }
        .site-header .mega-label {
          color: #071126;
        }
    """),
    (r'\.site-header \.header-dropdown-item:hover \{[^\}]*\}', """
        .site-header .mega-dropdown-item:hover {
          background: #E8F2FF;
          transform: translateX(2px);
        }
    """),
    (r'\.site-header \.header-dropdown-item-active \{[^\}]*\}', """
        .site-header .mega-dropdown-item-active {
          background: #E8F2FF;
          font-weight: 600;
        }
    """),
    # Mobile view changes
    (r'\.site-header \.header-dropdown-menu \{([^}]*)\}', ""), # mobile dropdown menu
]

# We need to be careful with mobile queries replacing.
mobile_css_replacement = """
          .site-header .header-mega-menu {
            position: static;
            width: 100%;
            display: flex;
            flex-direction: column;
            gap: 0;
            padding: 0;
            margin: 0;
            transform: none;
            opacity: 1;
            visibility: visible;
            pointer-events: auto;
            background: #ffffff;
            border: none;
            border-left: 2px solid #1677F2;
            border-radius: 0;
            box-shadow: none;
            max-height: 0;
            overflow: hidden;
            transition: max-height 0.3s ease, padding 0.3s ease;
          }

          .site-header .header-dropdown-open {
            max-height: 600px;
            padding: 0.5rem 0;
          }

          .site-header .mega-menu-column {
            gap: 0;
          }

          .site-header .mega-dropdown-item {
            width: 100%;
            padding: 10px 1rem;
            border-radius: 0;
            font-size: 0.85rem;
          }

          .site-header .mega-dropdown-item:hover {
            background: #E8F2FF;
            transform: none;
          }
"""

content = content.replace('.site-header .header-dropdown-menu {\n            position: static;', mobile_css_replacement + '/* ')
content = content.replace('.site-header .header-dropdown-open {\n            max-height: 400px;', '*/\n/*')
content = content.replace('.site-header .header-dropdown-menu::before {\n            display: none;\n          }', '*/')
content = content.replace('.site-header .header-dropdown-item {\n            width: 100%;', '/*')
content = content.replace('.site-header .header-dropdown-item:hover {\n            background: #eaf3f0;\n          }', '*/')

for pattern, replacement in css_replacements:
    content = re.sub(pattern, replacement, content, count=1)

with open('src/components/Header.tsx', 'w') as f:
    f.write(content)

