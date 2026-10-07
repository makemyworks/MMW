import re

with open('src/components/Home/Hero.tsx', 'r') as f:
    content = f.read()

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

# Now extract the <style>{`...`}</style> content
style_match = re.search(r'<style>\{`(.*?)`\}</style>', content, re.DOTALL)
if style_match:
    css = style_match.group(1)
    
    # We want to remove all blocks associated with trusted-section and brands
    # We can use a regex to match CSS blocks safely.
    # A CSS block is roughly `selector { ... }`
    # We can match any selector containing our keywords, and remove its block.
    
    keywords = [
        '.trusted-section', '.trusted-container', '.trusted-heading', '.trusted-label',
        '.trusted-main-divider', '.brand-slider', '.brand-list', '.brand',
        '@keyframes trustedPartnersSlide', '.google-logo', '.meta-logo', '.aws-logo',
        '.microsoft-logo', '.microsoft-icon', '.hubspot-logo', '.canva-logo', '.notion-logo'
    ]
    
    def remove_unwanted_blocks(css_text):
        # We need a small parser to handle nested braces (for @media)
        # Actually, if we just find blocks we don't want and replace them with empty space...
        # Let's tokenize by { and }
        
        result = []
        i = 0
        while i < len(css_text):
            # Find next block start
            start = css_text.find('{', i)
            if start == -1:
                result.append(css_text[i:])
                break
                
            # Check if this is an @media query
            # If so, we just keep the `@media (...) {` part and process the inside
            pre_text = css_text[i:start]
            
            # Find the selector
            selector = pre_text.strip().split('}')[-1].strip()
            
            # Find the matching closing brace
            depth = 1
            j = start + 1
            while j < len(css_text) and depth > 0:
                if css_text[j] == '{':
                    depth += 1
                elif css_text[j] == '}':
                    depth -= 1
                j += 1
            
            if '@media' in selector:
                # We keep the @media header and footer, but process inside
                result.append(pre_text + '{')
                inner_css = css_text[start+1:j-1]
                result.append(remove_unwanted_blocks(inner_css))
                result.append('}')
                i = j
                continue
                
            # It's a normal block. Should we keep it?
            keep = True
            for kw in keywords:
                if kw in selector:
                    keep = False
                    break
                    
            if keep:
                # Add the block
                result.append(css_text[i:j])
            else:
                # Add any whitespace before the selector to preserve formatting
                pass
                
            i = j
            
        return "".join(result)
        
    cleaned_css = remove_unwanted_blocks(css)
    
    # Add our new marquee CSS
    marquee_css = """
        .services-marquee-section {
          width: 100%;
          height: 65px;
          background-color: #1677F2;
          overflow: hidden;
          display: flex;
          align-items: center;
          position: relative;
        }

        .services-marquee-section,
        .services-marquee-section * {
          box-sizing: border-box;
        }

        .marquee-container {
          width: 100%;
          overflow: hidden;
          position: relative;
          display: flex;
        }

        .marquee-content {
          display: flex;
          white-space: nowrap;
          animation: scroll-marquee 20s linear infinite;
        }

        .marquee-content:hover {
          animation-play-state: paused;
        }

        .marquee-list {
          display: flex;
          align-items: center;
          padding-right: 40px;
        }

        .marquee-item {
          color: #FFFFFF;
          font-size: 18px;
          font-weight: 600;
          margin-right: 40px;
          display: flex;
          align-items: center;
          white-space: nowrap;
        }

        @keyframes scroll-marquee {
          0% {
            transform: translateX(0%);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        
        @media (max-width: 1000px) {
          .marquee-item {
            font-size: 16px;
            margin-right: 30px;
          }
          .marquee-list {
            padding-right: 30px;
          }
        }

        @media (max-width: 760px) {
          .services-marquee-section {
            height: 60px;
            margin-top: 0;
          }
          .marquee-item {
            font-size: 15px;
            margin-right: 25px;
          }
          .marquee-list {
            padding-right: 25px;
          }
        }
    """
    
    # We'll just append it to the cleaned css
    final_css = cleaned_css + marquee_css
    
    content = content.replace(css, final_css)
    
with open('src/components/Home/Hero.tsx', 'w') as f:
    f.write(content)

