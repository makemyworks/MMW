import type { IconName } from "../components/Icon";

/* ------------------------------------------------------------------
   EDIT HERE: all brand text, contact details and service content
   for the whole website lives in this one file.
------------------------------------------------------------------- */

export const BRAND = {
  name: "Make My Works",
  short: "MMW",
  tagline: "We Make You Grow",
  url: "https://www.makemyworks.com",
};

export const CONTACT = {
  email: "info@makemyworks.com",
  email2: "makemyworks.studio@gmail.com",
  /* The contact form delivers to this inbox */
  formEmail: "makemyworks.studio@gmail.com",
  phoneDisplay: "+91 77039 77002",
  phoneTel: "tel:+917703977002",
  whatsappNumber: "917703977002",
  location: "India, serving clients worldwide",
  reply: "We reply within 24 hours",
};

export const whatsappLink = (text = "Hi Make My Works, I would like to talk about my business.") =>
  `https://wa.me/${CONTACT.whatsappNumber}?text=${encodeURIComponent(text)}`;

export type Service = {
  id: string;
  icon: IconName;
  title: string;
  simple: string;
  points: string[];
  goodFor: string;
};

export const services: Service[] = [
  {
    id: "websites-apps",
    icon: "web",
    title: "Websites & Apps",
    simple:
      "A professional website or mobile app that looks great on every phone and turns visitors into customers.",
    points: [
      "Business websites and landing pages",
      "Mobile apps for Android and iPhone",
      "Booking, enquiry and customer portals",
      "Fast, secure and easy to update",
      "Support and fixes after launch",
    ],
    goodFor: "Businesses with no website, or with one that looks old or loads slowly.",
  },
  {
    id: "logo-branding",
    icon: "brand",
    title: "Logo & Branding",
    simple:
      "A memorable look for your business, so people trust you at first sight and remember you later.",
    points: [
      "Logo design and brand colours",
      "Business cards, brochures and menus",
      "Posters, flyers and packaging",
      "Social media post designs",
      "Files ready for print and for web",
    ],
    goodFor: "New businesses that need an identity, and older brands that want a fresh look.",
  },
  {
    id: "video-social",
    icon: "video",
    title: "Video & Social Media",
    simple:
      "Reels, promo videos and posts that catch attention on Instagram, YouTube and Facebook.",
    points: [
      "Reels and short videos",
      "Promo videos and ads",
      "Motion graphics and logo animation",
      "Thumbnails and social media posts",
      "Monthly content packs for regular posting",
    ],
    goodFor: "Brands that want to post often and always look professional.",
  },
  {
    id: "google-marketing",
    icon: "growth",
    title: "Google & Online Marketing",
    simple:
      "Get found by people who are searching for what you sell, and turn them into real enquiries.",
    points: [
      "SEO to rank higher on Google",
      "Google Business Profile for local customers",
      "Google Ads and Meta (Facebook and Instagram) Ads",
      "Social media management",
      "Simple monthly reports you can understand",
    ],
    goodFor: "Local shops, online stores and service companies that want steady enquiries.",
  },
  {
    id: "ai-automation",
    icon: "ai",
    title: "AI & Automation",
    simple:
      "Smart tools that save you time: ads and images made with AI, and chatbots that answer customers day and night.",
    points: [
      "AI video ads and AI images",
      "Chatbots that answer common questions",
      "Automatic follow-ups for every enquiry",
      "AI product and fashion visuals",
      "Every result checked by a real person",
    ],
    goodFor: "Busy teams that want modern ads and less repeated work.",
  },
  {
    id: "online-store",
    icon: "store",
    title: "Online Store & Product Photos",
    simple:
      "Sell online with a clean store, safe payments and product photos that make people want to buy.",
    points: [
      "Online store setup and payment gateways",
      "Product photo editing and background removal",
      "AI product and catalogue images",
      "WhatsApp ordering and enquiry systems",
      "Simple CRM to track every customer",
    ],
    goodFor: "Shops moving online and brands with many products to show.",
  },
];

export const steps = [
  { icon: "chat" as IconName, title: "Tell us your goal", text: "Share your idea on the form or WhatsApp. No technical words needed." },
  { icon: "target" as IconName, title: "Get a clear plan", text: "We reply within 24 hours with a simple plan and a clear price." },
  { icon: "bolt" as IconName, title: "We build it", text: "You see progress along the way and tell us what to change." },
  { icon: "growth" as IconName, title: "You grow", text: "We launch, support you and keep improving month after month." },
];

export const reasons = [
  { icon: "users" as IconName, title: "One team for everything", text: "Website, logo, video and marketing together. No running between many agencies." },
  { icon: "chat" as IconName, title: "Plain, simple language", text: "We explain everything the easy way, so you always know what is happening." },
  { icon: "shield" as IconName, title: "Honest growth", text: "No fake followers and no false promises. Only real work for real results." },
  { icon: "clock" as IconName, title: "Clear price and time", text: "You know the cost and the timeline before we start." },
  { icon: "bolt" as IconName, title: "Modern tools and AI", text: "We use the latest technology to work faster and keep your cost lower." },
  { icon: "heart" as IconName, title: "Support after launch", text: "We stay with you after your project is live, whenever you need us." },
];

export const faqs = [
  { q: "How much will it cost?", a: "Every business is different, so we give a clear price after a short chat about your needs. There are no hidden charges, and you approve the price before we start." },
  { q: "I am not technical. Is that a problem?", a: "Not at all. Most of our clients are not technical. Tell us what you want in your own words and we will handle the rest." },
  { q: "How long does a website take?", a: "A simple business website usually takes 2 to 4 weeks. Bigger websites and apps take longer, and we share the timeline before we begin." },
  { q: "Can you improve my existing website?", a: "Yes. We can redesign it, fix errors, make it faster or add new features without starting from zero." },
  { q: "Do you promise first rank on Google?", a: "No honest agency can promise that. We use proven methods that bring steady, real improvement, and we show you the progress every month." },
  { q: "Do you work with clients outside India?", a: "Yes. We work online with clients anywhere in the world, using email, WhatsApp and video calls." },
];

export const work = [
  { img: "/Images/eco.webp", title: "Furniture Online Store", tag: "Online Store", text: "A clean shop with easy browsing, product highlights and a clear path to buy." },
  { img: "/Images/hospital.webp", title: "Hospital Website", tag: "Website", text: "A trusted look with doctor details, departments and simple appointment booking." },
  { img: "/Images/dash.webp", title: "Business Dashboard", tag: "Web App", text: "Leads and sales turned into clear charts and simple tables." },
  { img: "/Images/homemo.webp", title: "Video Ads & Reels", tag: "Video & AI", text: "Short ads for Instagram, YouTube and TikTok, made with AI and expert editing." },
  { img: "/Images/homedigi.webp", title: "Property App Design", tag: "App Design", text: "Mobile and web screens for a smooth property browsing experience." },
];

export const teams = [
  { icon: "web" as IconName, title: "Web & App Developers", text: "Build fast, secure and reliable websites and apps." },
  { icon: "brand" as IconName, title: "Designers", text: "Create logos, brands and easy-to-use screens." },
  { icon: "video" as IconName, title: "Video & Content Creators", text: "Make reels, ads and posts that people enjoy." },
  { icon: "growth" as IconName, title: "Marketing & SEO Experts", text: "Help customers find you on Google and social media." },
  { icon: "ai" as IconName, title: "AI & Automation Specialists", text: "Build smart tools that save your time." },
  { icon: "users" as IconName, title: "Project Managers", text: "One person you can talk to, from start to finish." },
];

export const values = [
  { icon: "chat" as IconName, title: "Keep it simple", text: "Easy words, clear plans, no confusing jargon." },
  { icon: "shield" as IconName, title: "Stay honest", text: "We say what we can do, and we do what we say." },
  { icon: "target" as IconName, title: "Focus on results", text: "Every design and every rupee is aimed at your growth." },
  { icon: "heart" as IconName, title: "Be a long-term partner", text: "We are here after launch too, not just until payment." },
];

export const pageMeta: Record<string, { title: string; desc: string }> = {
  "/": { title: "Make My Works | We Make You Grow", desc: "Websites, apps, logo and branding, video, Google marketing and AI tools from one friendly team. We Make You Grow." },
  "/services": { title: "Our Services | Make My Works", desc: "Websites and apps, logo and branding, video, Google marketing, AI tools and online stores, all explained in simple words." },
  "/our-work": { title: "Our Work | Make My Works", desc: "See the kind of websites, apps, videos and designs Make My Works creates for growing businesses." },
  "/about": { title: "About Us | Make My Works", desc: "Meet Make My Works, the friendly digital team that helps businesses build, brand and grow online." },
  "/contact": { title: "Contact Us | Make My Works", desc: "Tell us about your business. Make My Works replies within 24 hours with a clear plan and price." },
  "/privacy-policy": { title: "Privacy Policy | Make My Works", desc: "How Make My Works handles your information." },
  "/terms-and-conditions": { title: "Terms & Conditions | Make My Works", desc: "Terms for using Make My Works services." },
  "/cookie-policy": { title: "Cookie Policy | Make My Works", desc: "How Make My Works uses cookies." },
};
