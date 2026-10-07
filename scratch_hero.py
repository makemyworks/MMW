import re

def process_file():
    with open('src/components/Home/Hero.tsx', 'r') as f:
        content = f.read()

    # 1. Replace HTML section
    html_pattern = re.compile(r'<section className="trusted-section">.*?</section>', re.DOTALL)
    marquee_html = """<section className="services-marquee-section">
        <div className="marquee-container">
          <div className="marquee-content">
            <div className="marquee-list">
              <span className="marquee-item">✦ App Development</span>
              <span className="marquee-item">✦ Website Development</span>
              <span className="marquee-item">✦ AI Video Generation</span>
              <span className="marquee-item">✦ AI Image Generation</span>
              <span className="marquee-item">✦ SEO & Google AI SEO</span>
              <span className="marquee-item">✦ Digital & Tech Solutions</span>
              <span className="marquee-item">✦ Tech Support & More</span>
              <span className="marquee-item">✦ Social Media Setup</span>
              <span className="marquee-item">✦ Logo Design & Branding</span>
              <span className="marquee-item">✦ WhatsApp Automation</span>
            </div>
            <div className="marquee-list" aria-hidden="true">
              <span className="marquee-item">✦ App Development</span>
              <span className="marquee-item">✦ Website Development</span>
              <span className="marquee-item">✦ AI Video Generation</span>
              <span className="marquee-item">✦ AI Image Generation</span>
              <span className="marquee-item">✦ SEO & Google AI SEO</span>
              <span className="marquee-item">✦ Digital & Tech Solutions</span>
              <span className="marquee-item">✦ Tech Support & More</span>
              <span className="marquee-item">✦ Social Media Setup</span>
              <span className="marquee-item">✦ Logo Design & Branding</span>
              <span className="marquee-item">✦ WhatsApp Automation</span>
            </div>
          </div>
        </div>
      </section>"""
    
    content = html_pattern.sub(marquee_html, content)

    # 2. Modify styles. We'll use simple text replacements for the bulk blocks, or just regex.
    # First, the box-sizing rule
    content = content.replace(
        '.trusted-section,\n        .trusted-section * {',
        '.services-marquee-section,\n        .services-marquee-section * {'
    )
    
    # We will remove all these classes and anything inside them up to the next class or @media
    classes_to_remove = [
        r'\.trusted-section\s*\{[^}]*\}',
        r'\.trusted-container\s*\{[^}]*\}',
        r'\.trusted-heading\s*\{[^}]*\}',
        r'\.trusted-label\s*\{[^}]*\}',
        r'\.trusted-label span\s*\{[^}]*\}',
        r'\.trusted-label p\s*\{[^}]*\}',
        r'\.trusted-heading h2\s*\{[^}]*\}',
        r'\.trusted-heading h2 strong\s*\{[^}]*\}',
        r'\.trusted-main-divider\s*\{[^}]*\}',
        r'\.brand-slider\s*\{[^}]*\}',
        r'\.brand-list\s*\{[^}]*\}',
        r'@keyframes trustedPartnersSlide\s*\{[^}]*\}',
        r'\.brand\s*\{[^}]*\}',
        r'\.brand:last-child\s*\{[^}]*\}',
        r'\.brand-duplicate\s*\{[^}]*\}',
        r'\.brand-slider:hover \.brand-list\s*\{[^}]*\}',
        r'\.google-logo\s*\{[^}]*\}',
        r'\.meta-logo\s*\{[^}]*\}',
        r'\.meta-logo b\s*\{[^}]*\}',
        r'\.aws-logo\s*\{[^}]*\}',
        r'\.microsoft-logo\s*\{[^}]*\}',
        r'\.microsoft-icon\s*\{[^}]*\}',
        r'\.microsoft-icon i\s*\{[^}]*\}',
        r'\.hubspot-logo\s*\{[^}]*\}',
        r'\.canva-logo\s*\{[^}]*\}',
        r'\.notion-logo\s*\{[^}]*\}',
        r'\.notion-logo b\s*\{[^}]*\}',
    ]
    
    # Some blocks like keyframes have nested brackets, need special care
    # We'll just carefully remove specific chunks by finding the strings in the CSS and removing them.
    # A safer way to remove unwanted CSS is a simple parser, since CSS rules might have multiple brackets (media queries).
    
    pass

process_file()
