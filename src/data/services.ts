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

export const CONTACT_EMAIL = "alphazetaworld@gmail.com";
export const PHONE_DISPLAY = "+91 77039 77002";
export const PHONE_TEL = "tel:+917703977002";

export const services: ServiceCategory[] = [
  {
    slug: "website-app-development",
    title: "Website & App Development",
    icon: "💻",
    short:
      "Professional websites, e-commerce stores, web applications, mobile apps, landing pages, custom dashboards and business portals.",
    intro:
      "Your website or app is often the first thing a customer sees. We design and build fast, secure and easy-to-use digital products that look professional on every screen and are ready to grow with your business.",
    offerings: [
      "Business websites", "Landing pages", "E-commerce websites", "Web applications",
      "Mobile apps (Android & iOS)", "Custom portals", "Admin panels", "Dashboards", "Website maintenance",
    ],
    benefits: [
      "Mobile-friendly design that works on every device",
      "Fast loading pages that keep visitors from leaving",
      "Clean code that is easy to update later",
      "Search-engine-ready structure from day one",
    ],
    bestFor: "Startups launching online, small businesses without a website, and brands that need a custom app or portal.",
    faqs: [
      { q: "How long does a website take?", a: "A simple business website usually takes 2 to 4 weeks. Larger web apps and mobile apps take longer, and we share a clear timeline before we start." },
      { q: "Can you improve my existing website?", a: "Yes. We can redesign it, fix errors, speed it up or add new features without starting from zero." },
      { q: "Will I be able to update it myself?", a: "Yes. We can build it so you can edit text and images easily, and we train you on how to do it." },
    ],
    existingPage: { label: "See our dedicated Web & App Development page", path: "/web-app-development" },
    meta: "Business websites, e-commerce stores, web apps, mobile apps, landing pages and dashboards built by Alpha Zeta World.",
  },
  {
    slug: "ai-solutions-automation",
    title: "AI Solutions & Automation",
    icon: "🤖",
    short:
      "AI video advertisements, AI-generated images, AI product visuals, AI fashion visuals, AI content, chatbots and business automation.",
    intro:
      "AI lets small teams do the work of big ones. We use AI to create ads, images and content faster, answer customers automatically and remove repetitive tasks from your daily routine.",
    offerings: [
      "AI video advertisements", "AI-generated images", "AI product visuals", "AI fashion visuals",
      "AI content writing", "AI chatbots", "Workflow automation", "Business automation",
    ],
    benefits: [
      "Faster content at a lower cost",
      "Customer questions answered around the clock",
      "Less manual work for your team",
      "Every result reviewed by a human for quality",
    ],
    bestFor: "Businesses that want modern ads, faster content creation or to automate enquiries and routine tasks.",
    faqs: [
      { q: "Is AI content good enough for real ads?", a: "Yes, when it is guided and checked by skilled people. We review every piece for quality, accuracy and brand fit before delivery." },
      { q: "What can a chatbot do for my business?", a: "It can answer common questions, collect customer details, take enquiries and pass hot leads to your team, even at night." },
      { q: "What can be automated?", a: "Lead follow-ups, enquiry routing, reminders, report sending and data entry are common examples." },
    ],
    existingPage: { label: "See our AI Video & Content page", path: "/ai-video" },
    meta: "AI video ads, AI images, product visuals, chatbots and business automation from Alpha Zeta World.",
  },
  {
    slug: "branding-graphic-design",
    title: "Branding & Graphic Design",
    icon: "🎨",
    short:
      "Logo design, brand identity, business cards, brochures, flyers, posters, menus, packaging, presentations and social media creatives.",
    intro:
      "A strong brand makes customers trust you at first glance. We create a clear, consistent look for your business across print and digital, so you look professional everywhere.",
    offerings: [
      "Logo design", "Complete brand identity", "Business cards", "Brochures", "Flyers", "Posters",
      "Menus", "Packaging", "Presentations", "Social media designs", "Print designs",
    ],
    benefits: [
      "A memorable logo and colour palette",
      "One consistent style across every channel",
      "Print-ready and web-ready files",
      "Designs that explain your business in seconds",
    ],
    bestFor: "New businesses that need an identity and established brands that want a fresh, consistent look.",
    faqs: [
      { q: "What do I get in a brand identity?", a: "Usually a logo, colour palette, fonts and basic usage guidelines, plus stationery and social templates if you need them." },
      { q: "Do you design for print?", a: "Yes. We prepare print-ready files for brochures, packaging, menus, posters and more." },
      { q: "Can I request changes?", a: "Yes. Revision rounds are agreed upfront so you always know what is included." },
    ],
    meta: "Logo design, brand identity, brochures, packaging and social media designs by Alpha Zeta World.",
  },
  {
    slug: "video-creative-content",
    title: "Video & Creative Content",
    icon: "🎬",
    short:
      "Video editing, reels, promotional videos, UGC-style content, motion graphics, logo animation, thumbnails and social media content.",
    intro:
      "Video is the most watched content online. Our creative team turns your ideas into scroll-stopping reels, promos and animations that explain what you do and move people to act.",
    offerings: [
      "Video editing", "Reels & short videos", "Promotional videos", "UGC-style content",
      "Motion graphics", "Logo animation", "Thumbnails", "Social media creatives",
    ],
    benefits: [
      "Content sized correctly for each platform",
      "Clear story, captions and calls to action",
      "Consistent look with your brand",
      "Quick turnaround for regular posting",
    ],
    bestFor: "Brands that post regularly on Instagram, YouTube or Facebook and want polished, steady content.",
    faqs: [
      { q: "Do I need to send my own footage?", a: "You can send your footage and we edit it, or we can create motion graphics and AI-assisted visuals for you." },
      { q: "Can you make a monthly content pack?", a: "Yes. Many clients take a monthly plan with a set number of reels, posts and thumbnails." },
      { q: "Which formats do you deliver?", a: "Vertical, square and wide formats for Instagram, YouTube, Facebook and websites." },
    ],
    meta: "Video editing, reels, promo videos, motion graphics and social media creatives from Alpha Zeta World.",
  },
  {
    slug: "product-image-fashion-visuals",
    title: "Product Image & Fashion Visuals",
    icon: "📸",
    short:
      "Product image editing, background removal, enhancement, AI product photography, fashion visuals, catalogue images and e-commerce creatives.",
    intro:
      "Good product photos sell products. We clean up, enhance and create images that make your items look their best on your store, catalogue and social media.",
    offerings: [
      "Product image editing", "Background removal", "Image enhancement", "AI product photography",
      "Fashion visuals", "Catalogue images", "E-commerce creatives",
    ],
    benefits: [
      "Clean, consistent images across your whole catalogue",
      "Marketplace-ready sizes and backgrounds",
      "Lifestyle scenes without an expensive photo shoot",
      "Fast delivery for large batches",
    ],
    bestFor: "Online sellers, fashion brands, and shops that need many good-looking product images quickly.",
    faqs: [
      { q: "Can you work with phone photos?", a: "Yes. We enhance and clean them so they look professional." },
      { q: "Do you handle large catalogues?", a: "Yes. We work in batches with a consistent style across every product." },
      { q: "What is AI product photography?", a: "It places your real product into realistic scenes or backgrounds created with AI, saving the cost of a studio shoot." },
    ],
    meta: "Product image editing, background removal, AI product photography and fashion visuals by Alpha Zeta World.",
  },
  {
    slug: "seo-digital-marketing",
    title: "SEO & Digital Marketing",
    icon: "📈",
    short:
      "SEO, local SEO, Google Business Profile optimization, content strategy, social media management, Google Ads, Meta Ads and lead generation.",
    intro:
      "Being found is what turns a website into a business. We help you rank on Google and AI search, grow your audience with honest, organic methods, and run paid ads that bring real enquiries.",
    offerings: [
      "SEO", "Local SEO", "Google Business Profile optimization", "Content strategy",
      "Social media management", "Google Ads", "Meta Ads", "Lead generation",
    ],
    benefits: [
      "More of the right visitors from Google and AI search",
      "Clear monthly reports you can understand",
      "Organic, long-term growth without fake followers or likes",
      "Ad budgets focused on real leads",
    ],
    bestFor: "Local businesses, online stores and service companies that want steady enquiries and visibility.",
    faqs: [
      { q: "How long does SEO take to work?", a: "Most businesses see early movement in 2 to 3 months, with stronger results over 6 months. We never promise instant or guaranteed rankings." },
      { q: "Do you buy followers or likes?", a: "No. We only use legitimate growth: organic content, audience building and paid advertising." },
      { q: "Can you manage my ads?", a: "Yes. We plan, launch, track and improve Google Ads and Meta Ads campaigns." },
    ],
    existingPage: { label: "See our Google SEO & AI Search page", path: "/seo-ai" },
    meta: "SEO, local SEO, social media management, Google Ads, Meta Ads and lead generation by Alpha Zeta World.",
  },
  {
    slug: "ecommerce-business-solutions",
    title: "E-commerce & Business Solutions",
    icon: "🛒",
    short:
      "Online stores, product setup, payment integration, enquiry systems, booking systems, WhatsApp integration and CRM solutions.",
    intro:
      "We set up the tools that let you take orders, bookings and enquiries online and keep track of every customer, so your business runs smoothly even when you are busy.",
    offerings: [
      "Online stores", "Product setup", "Payment gateway integration", "Enquiry systems",
      "Booking systems", "WhatsApp integration", "CRM solutions",
    ],
    benefits: [
      "Accept payments securely",
      "Never lose an enquiry or booking",
      "Customer history in one place",
      "Connect WhatsApp so customers can reach you easily",
    ],
    bestFor: "Shops moving online, clinics, salons and service providers that take bookings, and teams that manage many leads.",
    faqs: [
      { q: "Which payment gateways can you set up?", a: "We can integrate popular gateways that suit your country and business type." },
      { q: "Can customers book appointments online?", a: "Yes. We build simple booking systems with confirmations and reminders." },
      { q: "What is a CRM?", a: "A tool that stores your customers and leads and reminds you who to follow up with." },
    ],
    meta: "Online stores, payment integration, booking systems, WhatsApp integration and CRM by Alpha Zeta World.",
  },
  {
    slug: "maintenance-technical-support",
    title: "Maintenance & Technical Support",
    icon: "🛠️",
    short:
      "Website maintenance, bug fixing, deployment, hosting support, performance improvements, updates, analytics and technical support.",
    intro:
      "Launching is only the start. We keep your website and apps secure, fast and up to date, and we are here when something needs fixing.",
    offerings: [
      "Website maintenance", "Bug fixing", "Deployment", "Hosting support",
      "Performance improvements", "Updates", "Analytics", "Ongoing technical support",
    ],
    benefits: [
      "Problems fixed before customers notice them",
      "Regular updates and backups",
      "Faster pages and better uptime",
      "One team to call when you need help",
    ],
    bestFor: "Any business with a website or app that wants peace of mind after launch.",
    faqs: [
      { q: "Can you maintain a site you did not build?", a: "In most cases yes. We review it first and tell you honestly what it needs." },
      { q: "How quickly do you respond?", a: "We confirm the response time for your plan upfront so you know what to expect." },
      { q: "Do you help with hosting?", a: "Yes. We help choose, set up and manage hosting and deployment." },
    ],
    meta: "Website maintenance, bug fixing, hosting support, performance and analytics from Alpha Zeta World.",
  },
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
  { icon: "💻", name: "Web & App Development", text: "Web developers, app developers and backend/frontend specialists building reliable digital products." },
  { icon: "🤖", name: "AI & Automation", text: "AI specialists creating AI-powered content, automation, chatbots and smart business solutions." },
  { icon: "🎨", name: "Design & Branding", text: "Graphic designers and UI/UX designers creating professional brands and digital experiences." },
  { icon: "🎬", name: "Video & Creative", text: "Video editors, motion designers and creative specialists producing advertisements, reels and promotional content." },
  { icon: "📈", name: "SEO & Digital Marketing", text: "SEO and marketing specialists helping businesses improve visibility, reach customers and generate leads." },
  { icon: "📱", name: "Social Media & Content", text: "Content creators and social media specialists managing creative content and building online presence." },
  { icon: "🤝", name: "Project & Business Support", text: "Project coordinators and business team members managing communication, requirements and delivery." },
];

export const pageMeta: Record<string, { title: string; desc: string }> = {
  "/": { title: "Alpha Zeta World | Full-Service Digital Agency", desc: "Your Business. Our Digital Solutions. Alpha Zeta World helps businesses build, brand, market, automate and grow online." },
  "/about": { title: "About Us | Alpha Zeta World", desc: "Learn who Alpha Zeta World is and how our team helps businesses grow online." },
  "/services": { title: "Digital Solutions | Alpha Zeta World", desc: "Digital solutions from Alpha Zeta World to help your business grow online." },
  "/our-services": { title: "Our Services | Alpha Zeta World", desc: "Websites, apps, AI, branding, video, product visuals, SEO, e-commerce and support from one digital agency." },
  "/solutions": { title: "Solutions for Your Business | Alpha Zeta World", desc: "Digital solution packages for startups, small businesses, online stores and growing brands." },
  "/our-work": { title: "Our Work | Alpha Zeta World", desc: "See sample projects and the kinds of digital work Alpha Zeta World creates." },
  "/our-team": { title: "Our Team | Alpha Zeta World", desc: "Meet the specialist teams behind Alpha Zeta World: development, AI, design, video, SEO and support." },
  "/web-app-development": { title: "Web & App Development | Alpha Zeta World", desc: "Websites, web apps and mobile apps built by Alpha Zeta World." },
  "/ai-video": { title: "AI Video & Content | Alpha Zeta World", desc: "AI video ads and content creation from Alpha Zeta World." },
  "/seo-ai": { title: "Google SEO & AI Search | Alpha Zeta World", desc: "SEO and AI search optimization from Alpha Zeta World." },
  "/products": { title: "Products | Alpha Zeta World", desc: "Digital products by Alpha Zeta World." },
  "/products-lab": { title: "Digital Product Lab | Alpha Zeta World", desc: "Digital products built and launched by Alpha Zeta World." },
  "/contact": { title: "Contact Us | Alpha Zeta World", desc: "Tell us about your project. Alpha Zeta World replies within 24 hours." },
  "/privacy-policy": { title: "Privacy Policy | Alpha Zeta World", desc: "How Alpha Zeta World handles your information." },
  "/terms-and-conditions": { title: "Terms & Conditions | Alpha Zeta World", desc: "Terms for using Alpha Zeta World services." },
  "/cookie-policy": { title: "Cookie Policy | Alpha Zeta World", desc: "How Alpha Zeta World uses cookies." },
};
