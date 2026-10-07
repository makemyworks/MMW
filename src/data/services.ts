export type Faq = { q: string; a: string };
export type ServiceCategory = {
  slug: string;
  title: string;
  icon: string;
  short: string;
  intro: string;
  offerings: string[];
  benefits: string[];
  bestFor: string;
  faqs: Faq[];
  existingPage?: { label: string; path: string };
  meta: string;
};

export const CONTACT_EMAIL = "info@makemyworks.com";
export const PHONE_DISPLAY = "+91 77039 77002";
export const PHONE_TEL = "tel:+917703977002";

export const services: ServiceCategory[] = [
  {
    slug: "app-development",
    title: "App Development",
    icon: "📱",
    short: "Professional mobile apps for Android and iOS devices.",
    intro: "We build intuitive and high-performing mobile applications that deliver an excellent user experience.",
    offerings: ["Android Apps", "iOS Apps", "Cross-platform Development", "App Maintenance"],
    benefits: ["Reach a wider audience on mobile", "Fast and responsive", "Secure data handling"],
    bestFor: "Businesses looking to engage customers directly on their mobile devices.",
    faqs: [
      { q: "Do you develop for both iOS and Android?", a: "Yes, we build apps for both platforms." }
    ],
    existingPage: { label: "App Development", path: "/services/app-development" },
    meta: "Mobile app development services by Make My Works."
  },
  {
    slug: "website-development",
    title: "Website Development",
    icon: "🌐",
    short: "Modern, responsive, and high-performing websites.",
    intro: "Your website is your digital storefront. We design and build professional websites that grow with your business.",
    offerings: ["Business websites", "E-commerce stores", "Landing pages", "Web applications"],
    benefits: ["Mobile-friendly design", "Fast loading pages", "Search engine optimized"],
    bestFor: "Startups, small businesses, and brands needing a strong online presence.",
    faqs: [
      { q: "How long does a website take?", a: "Most websites take 2 to 4 weeks depending on complexity." }
    ],
    existingPage: { label: "Website Development", path: "/services/website-development" },
    meta: "Website development services by Make My Works."
  },
  {
    slug: "ai-video-generation",
    title: "AI Video Generation",
    icon: "🎬",
    short: "High-quality, engaging videos powered by AI.",
    intro: "We create stunning video content using advanced AI tools for marketing, branding, and storytelling.",
    offerings: ["AI Video Ads", "Social Media Reels", "Promotional Videos", "AI Avatars"],
    benefits: ["Faster production time", "Cost-effective", "Highly engaging content"],
    bestFor: "Brands needing regular, high-quality video content without large production budgets.",
    faqs: [
      { q: "Are AI videos good for ads?", a: "Yes, they are highly engaging and perfect for social media ads." }
    ],
    existingPage: { label: "AI Video Generation", path: "/services/ai-video-generation" },
    meta: "AI video generation services by Make My Works."
  },
  {
    slug: "ai-image-generation",
    title: "AI Image Generation",
    icon: "🖼️",
    short: "Custom AI-generated visuals for your brand.",
    intro: "Generate unique, high-quality images for your products, marketing campaigns, and social media using AI.",
    offerings: ["Product Visuals", "Marketing Graphics", "Custom Illustrations", "AI Photography"],
    benefits: ["Unique visuals", "Fast turnaround", "Endless creative possibilities"],
    bestFor: "E-commerce stores and marketers needing unique visuals quickly.",
    faqs: [
      { q: "Can you create images of my products?", a: "Yes, we can use AI to place your products in stunning environments." }
    ],
    existingPage: { label: "AI Image Generation", path: "/services/ai-image-generation" },
    meta: "AI image generation services by Make My Works."
  },
  {
    slug: "seo",
    title: "SEO & Google AI SEO",
    icon: "📈",
    short: "Improve your ranking on Google and AI search engines.",
    intro: "We optimize your website to rank higher on search engines and be easily discoverable by AI tools.",
    offerings: ["Keyword Research", "On-Page SEO", "Technical SEO", "AI Search Optimization"],
    benefits: ["More organic traffic", "Higher visibility", "Long-term growth"],
    bestFor: "Businesses wanting to be easily found by customers searching online.",
    faqs: [
      { q: "How long does SEO take?", a: "SEO is a long-term strategy, usually taking 3 to 6 months to see significant results." }
    ],
    existingPage: { label: "SEO & Google AI SEO", path: "/services/seo" },
    meta: "SEO and Google AI SEO services by Make My Works."
  },
  {
    slug: "digital-solutions",
    title: "Digital & Tech Solutions",
    icon: "⚙️",
    short: "End-to-end digital strategies and solutions.",
    intro: "Comprehensive digital strategies to streamline your operations and accelerate your business growth.",
    offerings: ["Digital Strategy", "Process Automation", "CRM Setup", "Custom Solutions"],
    benefits: ["Increased efficiency", "Better data management", "Scalable solutions"],
    bestFor: "Businesses looking to modernize their operations and adopt new technologies.",
    faqs: [
      { q: "What does digital strategy include?", a: "We analyze your business and recommend the best digital tools and practices." }
    ],
    existingPage: { label: "Digital & Tech Solutions", path: "/services/digital-solutions" },
    meta: "Digital and tech solutions by Make My Works."
  },
  {
    slug: "tech-support",
    title: "Tech Support & More",
    icon: "🛠️",
    short: "Reliable maintenance and technical support.",
    intro: "We provide ongoing support to keep your digital platforms running smoothly, securely, and efficiently.",
    offerings: ["Website Maintenance", "Bug Fixing", "Hosting Support", "Performance Optimization"],
    benefits: ["Peace of mind", "Minimized downtime", "Up-to-date systems"],
    bestFor: "Any business with an active digital presence needing reliable technical backing.",
    faqs: [
      { q: "Do you offer monthly support plans?", a: "Yes, we have flexible plans to suit your needs." }
    ],
    existingPage: { label: "Tech Support & More", path: "/services/tech-support" },
    meta: "Technical support and maintenance services by Make My Works."
  },
  {
    slug: "social-media",
    title: "Social Media Setup",
    icon: "📱",
    short: "Professional setup for your social media profiles.",
    intro: "We establish a strong, professional presence for your brand across all major social media platforms.",
    offerings: ["Profile Creation", "Branding Setup", "Initial Content", "Strategy Guidelines"],
    benefits: ["Professional appearance", "Consistent branding", "Ready for growth"],
    bestFor: "New brands or businesses wanting to revamp their social media presence.",
    faqs: [
      { q: "Which platforms do you set up?", a: "We cover Instagram, Facebook, LinkedIn, Twitter, and more." }
    ],
    existingPage: { label: "Social Media Setup", path: "/services/social-media" },
    meta: "Social media setup services by Make My Works."
  },
  {
    slug: "branding",
    title: "Logo Design & Branding",
    icon: "🎨",
    short: "Memorable logos and cohesive brand identities.",
    intro: "We create strong visual identities that make your business stand out and build trust with your audience.",
    offerings: ["Logo Design", "Brand Guidelines", "Business Cards", "Marketing Collaterals"],
    benefits: ["Professional image", "Brand recognition", "Consistent visual style"],
    bestFor: "New startups and businesses needing a brand refresh.",
    faqs: [
      { q: "What is included in brand guidelines?", a: "Logos, color palettes, typography, and rules for usage." }
    ],
    existingPage: { label: "Logo Design & Branding", path: "/services/branding" },
    meta: "Logo design and branding services by Make My Works."
  },
  {
    slug: "whatsapp-automation",
    title: "WhatsApp Automation",
    icon: "💬",
    short: "Automate your customer communication on WhatsApp.",
    intro: "Set up smart chatbots and automated responses on WhatsApp to handle customer inquiries 24/7.",
    offerings: ["Chatbot Setup", "Automated Replies", "Lead Generation Flows", "Customer Support Bots"],
    benefits: ["Instant customer replies", "Save time", "Never miss a lead"],
    bestFor: "Businesses receiving high volumes of customer messages and inquiries.",
    faqs: [
      { q: "Can the bot collect customer details?", a: "Yes, it can collect information and send it to your CRM or email." }
    ],
    existingPage: { label: "WhatsApp Automation", path: "/services/whatsapp-automation" },
    meta: "WhatsApp automation services by Make My Works."
  }
];

export const growthServices = [
  "Organic Social Media Growth", "Content Strategy", "Social Media Management",
  "Paid Advertising", "Audience Growth", "Lead Generation", "Brand Awareness",
];

export const whyUs = [
  "One team for multiple digital needs",
  "Custom solutions for every business",
  "Modern technology + AI-powered solutions",
  "Creative and professional execution",
  "Transparent communication",
  "Solutions for startups, small businesses and growing brands",
  "Long-term digital support",
];

export const teamGroups = [
  { icon: "💻", name: "App & Website Development", text: "Developers building reliable digital products." },
  { icon: "🤖", name: "AI Video & Image Generation", text: "AI specialists creating stunning visual content." },
  { icon: "🎨", name: "Logo Design & Branding", text: "Designers creating professional brand identities." },
  { icon: "📈", name: "SEO & Google AI SEO", text: "Specialists helping businesses improve visibility." },
  { icon: "📱", name: "Social Media Setup", text: "Experts building your online presence." },
  { icon: "💬", name: "WhatsApp Automation", text: "Setting up smart communication workflows." },
  { icon: "⚙️", name: "Digital & Tech Solutions", text: "Project coordinators managing delivery and strategy." },
];

export const pageMeta: Record<string, { title: string; desc: string }> = {
  "/": { title: "Make My Works | Full-Service Digital Agency", desc: "Your Business. Our Digital Solutions. Make My Works helps businesses build, brand, market, automate and grow online." },
  "/about": { title: "About Us | Make My Works", desc: "Learn who Make My Works is and how our team helps businesses grow online." },
  "/services": { title: "Digital Solutions | Make My Works", desc: "Digital solutions from Make My Works to help your business grow online." },
  "/our-services": { title: "Our Services | Make My Works", desc: "Apps, websites, AI generation, SEO, branding, tech support, and automation." },
  "/contact": { title: "Contact Us | Make My Works", desc: "Tell us about your project. Make My Works replies within 24 hours." },
};
