import React, { useState } from 'react';
import { 
  ArrowRight, 
  Play, 
  ExternalLink
} from 'lucide-react';

// --- Types ---
interface Project {
  id: number;
  title: string;
  description: string;
  category: string;
  image: string;
  isVideo?: boolean;
  isGrid?: boolean;
}

// --- Data ---
const categories = [
  "All", "Website", "Mobile App", "AI Video", "AI Image", "Logo & Branding", "Social Media", "Automation"
];

const projects: Project[] = [
  {
    id: 1,
    title: "Farovu Travel Website",
    description: "Modern travel website with beautiful UI and seamless booking experience.",
    category: "Website",
    image: "/Images/our1.png",
  },
  {
    id: 2,
    title: "PashuVision",
    description: "Animal husbandry app with breed detection and health insights.",
    category: "Mobile App",
    image: "/Images/our2.png",
  },
  {
    id: 3,
    title: "Travel Promotional Video",
    description: "AI-generated travel video for social media marketing.",
    category: "AI Video",
    image: "/Images/our3.png",
  },
  {
    id: 4,
    title: "Product Visuals",
    description: "Creative AI-generated images for brand campaigns.",
    category: "AI Image",
    image: "/Images/our4.png",
  },
  {
    id: 5,
    title: "Brand Identity Collection",
    description: "Logos and brand identities for different businesses.",
    category: "Logo & Branding",
    image: "/Images/our5.png",
  },
  {
    id: 6,
    title: "ManageFirm",
    description: "CA/CS management platform with web and mobile access.",
    category: "Website",
    image: "/Images/our6.png",
  },
  {
    id: 7,
    title: "Social Media Content",
    description: "Creative posts and campaigns for brands.",
    category: "Social Media",
    image: "/Images/our7.png",
  },
  {
    id: 8,
    title: "WhatsApp Automation",
    description: "Automated customer support and enquiry handling.",
    category: "Automation",
    image: "/Images/our8.png",
  },
];

// --- Main Component ---
export default function PortfolioPage() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredProjects = activeCategory === "All" 
    ? projects 
    : projects.filter(p => p.category === activeCategory);

  return (
    <div className="portfolio-app">
      {/* CSS Styles injected here */}
      <style>{`
        /* --- General Reset & Base --- */
        * { margin: 0; padding: 0; box-sizing: border-box; }
        body { font-family: 'Inter', sans-serif; background-color: #f8fafc; color: #1e293b; }
        a { text-decoration: none; color: inherit; }
        button { cursor: pointer; border: none; outline: none; }
        
        .portfolio-app { min-height: 100vh; }
        .container { max-width: 1200px; margin: 0 auto; padding: 0 24px; }

        /* --- Hero Section --- */
        .hero { 
          position: relative; 
          padding: 120px 0; 
          overflow: hidden;
          background-image: url('/Images/ourworkbg.png');
          background-size: cover;
          background-position: center;
          background-repeat: no-repeat;
        }
        
        .hero-content { 
          position: relative; 
          z-index: 10; 
          max-width: 650px;
        }
        
        .hero-label { display: flex; align-items: center; gap: 12px; color: #2563eb; font-weight: 700; font-size: 13px; letter-spacing: 1px; text-transform: uppercase; margin-bottom: 20px; }
        .hero-label span { width: 32px; height: 2px; background: #2563eb; }
        
        .hero h1 { font-size: 56px; font-weight: 800; line-height: 1.1; margin-bottom: 24px; color: #0f172a; }
        .hero h1 span { color: #2563eb; }
        .hero p { color: #334155; font-size: 18px; line-height: 1.6; max-width: 550px; font-weight: 500; }

        /* --- Filter Bar --- */
        .filter-wrapper { padding: 32px 0 16px; overflow-x: auto; }
        .filter-scroll { display: flex; gap: 12px; min-width: max-content; }
        .filter-btn { padding: 10px 24px; border-radius: 50px; border: 1px solid #e2e8f0; background: white; color: #475569; font-size: 14px; font-weight: 500; transition: all 0.2s; }
        .filter-btn:hover { border-color: #93c5fd; color: #2563eb; }
        .filter-btn.active { background: #2563eb; color: white; border-color: #2563eb; box-shadow: 0 4px 6px -1px rgba(37, 99, 235, 0.2); }

        /* --- Project Grid --- */
        .projects-grid { display: grid; grid-template-columns: repeat(4, 1fr); gap: 24px; margin-top: 16px; padding-bottom: 80px; }

        /* --- Project Card --- */
        .card { background: white; border-radius: 16px; overflow: hidden; box-shadow: 0 1px 3px rgba(0,0,0,0.05); border: 1px solid #f1f5f9; transition: all 0.3s ease; display: flex; flex-direction: column; height: 100%; }
        .card:hover { box-shadow: 0 20px 25px -5px rgba(0,0,0,0.1); transform: translateY(-4px); }
        
        /* 👇 IMAGE FIX 👇 */
        .card-img-wrapper { 
          height: 220px;                    /* Koncham height penchaanu */
          overflow: hidden; 
          background: #f8fafc;              /* Light background */
          position: relative; 
          display: flex;                    /* Flex box */
          align-items: center;              /* Center vertically */
          justify-content: center;          /* Center horizontally */
          padding: 16px;                    /* Image ki padding */
        }
        
        .card-img-wrapper img { 
          max-width: 100%;                  /* Width full */
          max-height: 100%;                 /* Height full */
          object-fit: contain;              /* 👈 Full image kanipistundi (cut avvadu) */
          transition: transform 0.5s ease; 
        }
        
        .card:hover .card-img-wrapper img { 
          transform: scale(1.05); 
        }

        /* Video Overlay */
        .video-overlay { position: absolute; inset: 0; background: rgba(0,0,0,0.2); display: flex; align-items: center; justify-content: center; }
        .play-btn { width: 48px; height: 48px; background: rgba(255,255,255,0.9); border-radius: 50%; display: flex; align-items: center; justify-content: center; padding-left: 4px; box-shadow: 0 4px 6px rgba(0,0,0,0.1); }

        /* Branding Grid Simulation */
        .branding-grid { display: grid; grid-template-columns: 1fr 1fr; height: 100%; width: 100%; }
        .brand-box { display: flex; align-items: center; justify-content: center; font-weight: bold; font-size: 14px; }
        .brand-box:nth-child(1) { background: white; border-right: 1px solid #f1f5f9; border-bottom: 1px solid #f1f5f9; color: #1e293b; }
        .brand-box:nth-child(2) { background: #fef2f2; border-bottom: 1px solid #f1f5f9; color: #dc2626; }
        .brand-box:nth-child(3) { background: white; border-right: 1px solid #f1f5f9; color: #16a34a; }
        .brand-box:nth-child(4) { background: #0f172a; color: white; }

        .card-content { padding: 24px; display: flex; flex-direction: column; flex: 1; }
        .tag { font-size: 12px; font-weight: 600; padding: 4px 10px; border-radius: 6px; display: inline-block; margin-bottom: 12px; width: fit-content; }
        
        /* Tag Colors */
        .tag.Website { background: #eff6ff; color: #2563eb; }
        .tag\\.Mobile { background: #fff7ed; color: #ea580c; }
        .tag\\.Video { background: #fdf2f8; color: #db2777; }
        .tag\\.Image { background: #f0fdfa; color: #0d9488; }
        .tag\\.Branding { background: #f3e8ff; color: #9333ea; }
        .tag\\.Social { background: #fce7f3; color: #be185d; }
        .tag\\.Automation { background: #e0f2fe; color: #0284c7; }

        .card h3 { font-size: 18px; font-weight: 700; margin-bottom: 8px; color: #0f172a; }
        .card p { font-size: 14px; color: #64748b; line-height: 1.5; flex: 1; margin-bottom: 16px; }
        
        .view-link { color: #2563eb; font-size: 14px; font-weight: 600; display: inline-flex; align-items: center; transition: gap 0.2s; }
        .card:hover .view-link { gap: 8px; }

        /* --- Responsive Design --- */
        @media (max-width: 1024px) {
          .projects-grid { grid-template-columns: repeat(2, 1fr); }
          .hero h1 { font-size: 42px; }
        }

        @media (max-width: 768px) {
          .hero { 
            min-height: 100vh;
            display: flex;
            align-items: flex-start;
            padding: 60px 0; 
            background-image: url('/Images/ourworkmo.png');
            background-position: center top;
          }
          .hero-content { padding-top: 40px; }
          .hero h1 { font-size: 34px; }
          .hero p { font-size: 16px; }
          
          .projects-grid { grid-template-columns: 1fr; }
          .filter-scroll { padding-bottom: 8px; }
        }
      `}</style>

      {/* --- Hero Section --- */}
      <section className="hero">
        <div className="container">
          <div className="hero-content">
            <div className="hero-label">
              <span></span> Our Work
            </div>
            <h1>
              Ideas Turned Into <br />
              Real Digital <span>Experiences</span>
            </h1>
            <p>
              Explore some of our recent work across websites, mobile apps, AI content and branding. Each project is built with a focus on quality, creativity and real results.
            </p>
          </div>
        </div>
      </section>

      {/* --- Main Content --- */}
      <main className="container">
        
        {/* Filter Bar */}
        <div className="filter-wrapper">
          <div className="filter-scroll">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`filter-btn ${activeCategory === cat ? 'active' : ''}`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Projects Grid */}
        <div className="projects-grid">
          {filteredProjects.map((project) => (
            <div key={project.id} className="card">
              
              {/* Card Image */}
              <div className="card-img-wrapper">
                <img src={project.image} alt={project.title} />
                
                {project.category === "AI Video" && (
                  <div className="video-overlay">
                    <div className="play-btn">
                      <Play size={20} color="#2563eb" fill="#2563eb" />
                    </div>
                  </div>
                )}
                
                <div style={{ position: 'absolute', top: '12px', right: '12px', background: 'rgba(255,255,255,0.8)', padding: '6px', borderRadius: '8px' }}>
                  <ExternalLink size={16} color="#334155" />
                </div>
              </div>

              {/* Card Content */}
              <div className="card-content">
                <span className={`tag ${project.category.replace(/\s/g, '.')}`}>
                  {project.category}
                </span>
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                
                <a href="#" className="view-link">
                  View Project <ArrowRight size={16} style={{ marginLeft: '4px' }} />
                </a>
              </div>
            </div>
          ))}

          {filteredProjects.length === 0 && (
            <div style={{ gridColumn: '1 / -1', textAlign: 'center', padding: '80px 0', color: '#94a3b8' }}>
              No projects found for this category.
            </div>
          )}
        </div>

      </main>
    </div>
  );
}