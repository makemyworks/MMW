import React, { useEffect, useState } from 'react';

const Icons = {
  Image: () => <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="18" height="18" x="3" y="3" rx="2" ry="2"/><circle cx="9" cy="9" r="2"/><path d="m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21"/></svg>,
  Share: () => <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="18" cy="5" r="3"/><circle cx="6" cy="12" r="3"/><circle cx="18" cy="19" r="3"/><line x1="8.59" x2="15.42" y1="13.51" y2="17.49"/><line x1="15.41" x2="8.59" y1="6.51" y2="10.49"/></svg>,
  Download: () => <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" x2="12" y1="15" y2="3"/></svg>,
  Smartphone: () => <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="14" height="20" x="5" y="2" rx="2" ry="2"/><path d="M12 18h.01"/></svg>,
  Eye: () => <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z"/><circle cx="12" cy="12" r="3"/></svg>,
  ArrowRight: () => <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>,
  Close: () => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>,
};

function FeatureItem({ icon, title }: { icon: React.ReactNode; title: string }) {
  return (
    <div className="sow-feature-item">
      <div className="sow-feature-icon">{icon}</div>
      <span>{title}</span>
    </div>
  );
}

export default function ServicesOverview() {
  const IMAGE_URL = "/Images/servicecard.jpeg";
  const DOWNLOAD_FILENAME = "AlphaZetaWorld-Services-Overview.png";
  const [isPreviewOpen, setIsPreviewOpen] = useState(false);

  const handleDownload = async () => {
    try {
      const response = await fetch(IMAGE_URL);
      const blob = await response.blob();
      const url = window.URL.createObjectURL(blob);
      const link = document.createElement("a");
      link.href = url;
      link.download = DOWNLOAD_FILENAME;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      window.URL.revokeObjectURL(url);
    } catch (error) {
      const link = document.createElement("a");
      link.href = IMAGE_URL;
      link.download = DOWNLOAD_FILENAME;
      link.target = "_blank";
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    }
  };

  // ✅ Preview now opens an in-app modal instead of a new tab
  const handlePreview = () => {
    setIsPreviewOpen(true);
  };

  const closePreview = () => setIsPreviewOpen(false);

  // Close modal on ESC + lock body scroll while open
  useEffect(() => {
    if (!isPreviewOpen) return;

    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") closePreview();
    };
    document.addEventListener("keydown", onKey);

    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = prevOverflow;
    };
  }, [isPreviewOpen]);

  return (
    <>
      <style>{`
        .sow-container {
          background-color: #FFFFFF; 
          font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 2rem 1.5rem;
          position: relative;
          overflow: hidden;
          color: #0F2044;
          box-sizing: border-box;
        }
        .sow-container *, .sow-container *::before, .sow-container *::after {
          box-sizing: border-box;
        }

        .sow-grid {
          max-width: 1200px; width: 100%; display: grid;
          grid-template-columns: 1fr; gap: 2.5rem; align-items: center;
          position: relative; z-index: 10;
        }
        @media (min-width: 1024px) {
          .sow-grid { grid-template-columns: 0.85fr 1.15fr; gap: 2.5rem; }
        }

        .sow-left { display: flex; flex-direction: column; max-width: 500px; }
        .sow-badge-wrap { display: flex; align-items: center; gap: 0.75rem; margin-bottom: 0.75rem; }
        .sow-badge {
          background-color: #E6F0FF; color: #007BFF;
          font-size: 0.65rem;                
          font-weight: 700;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          padding: 0.3rem 0.85rem;              
          border-radius: 9999px;
        }
        .sow-badge-line { height: 1px; width: 3rem; background-color: #007BFF; opacity: 0.5; }

        .sow-heading {
          font-size: 1.85rem;                 
          font-weight: 800;
          line-height: 1.2;
          margin-bottom: 0.85rem;
          color: #0F2044;
        }
        .sow-heading span { color: #007BFF; }
        @media (min-width: 1024px) {
          .sow-heading { font-size: 2.25rem; } 
        }

        .sow-para {
          color: #4E5963;
          font-size: 0.9rem;                  
          line-height: 1.6;
          margin-bottom: 1.25rem;
        }

        .sow-features {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 0.85rem;
          margin-bottom: 1.5rem;
        }
        @media (min-width: 640px) {
          .sow-features { grid-template-columns: repeat(4, 1fr); }
        }

        .sow-feature-item { display: flex; flex-direction: column; align-items: center; text-align: center; gap: 0.4rem; }
        .sow-feature-icon {
          width: 2.5rem;                        
          height: 2.5rem;
          background-color: #E6F0FF;
          border: 1px solid rgba(0, 123, 255, 0.3);
          border-radius: 0.85rem;
          display: flex; align-items: center; justify-content: center;
          color: #007BFF;
        }
        .sow-feature-item span {
          font-size: 0.72rem;                    
          font-weight: 600;
          color: #4E5963;
          line-height: 1.2;
        }

        .sow-buttons { display: flex; flex-wrap: wrap; gap: 0.75rem; }
        .sow-btn-primary, .sow-btn-secondary {
          display: flex; align-items: center; gap: 0.45rem;
          padding: 0.65rem 1.25rem;             
          border-radius: 9999px;
          font-weight: 600;
          font-size: 0.85rem;                   
          cursor: pointer;
          transition: all 0.2s ease;
          border: none;
        }
        .sow-btn-primary {
          background-color: #007BFF;
          color: white;
          box-shadow: 0 10px 15px -3px rgba(0, 123, 255, 0.2);
        }
        .sow-btn-primary:hover { background-color: #0F2044; transform: translateY(-2px); }
        .sow-btn-icon-right { margin-left: 0.35rem; transition: transform 0.2s; }
        .sow-btn-primary:hover .sow-btn-icon-right { transform: translateX(4px); }
        .sow-btn-secondary {
          background-color: white;
          color: #007BFF;
          border: 1px solid #007BFF;
        }
        .sow-btn-secondary:hover { background-color: #F4F7FB; }

        .sow-right {
          width: 100%;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .sow-image-frame {
          width: 100%;
          height: 400px;                        
          border-radius: 1.5rem;
          overflow: hidden;
          box-shadow: 0 25px 50px -12px rgba(15, 32, 68, 0.15);
          background-color: #ffffff;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 0.5rem;                      
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }

        .sow-image-frame:hover {
          transform: translateY(-5px);
          box-shadow: 0 30px 60px -12px rgba(0, 123, 255, 0.25);
        }

        .sow-right-image {
          width: 100%;
          height: 100%;
          object-fit: contain;
          object-position: center;
          display: block;
          border-radius: 1rem;
        }

        @media (max-width: 1024px) {
          .sow-image-frame { height: 480px; }
        }

        @media (max-width: 640px) {
          .sow-container { padding: 1.5rem 1rem; }
          .sow-heading { font-size: 1.5rem; }
          .sow-para { font-size: 0.85rem; }
          .sow-features { gap: 0.65rem; }
          .sow-feature-icon { width: 2.25rem; height: 2.25rem; }
          .sow-feature-item span { font-size: 0.68rem; }
          .sow-buttons { flex-direction: column; width: 100%; }
          .sow-btn-primary, .sow-btn-secondary { width: 100%; justify-content: center; }

          .sow-image-frame { height: 360px; padding: 0.4rem; }
        }

        @media (max-width: 400px) {
          .sow-image-frame { height: 280px; }
          .sow-heading { font-size: 1.35rem; }
        }

        /* ---------- Preview Modal ---------- */
        .sow-modal-overlay {
          position: fixed;
          inset: 0;
          background: rgba(15, 32, 68, 0.85);
          backdrop-filter: blur(6px);
          -webkit-backdrop-filter: blur(6px);
          z-index: 99999;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 24px;
          animation: sowFadeIn 0.25s ease;
        }

        .sow-modal-content {
          position: relative;
          max-width: 90vw;
          max-height: 90vh;
          background: #ffffff;
          border-radius: 16px;
          padding: 12px;
          box-shadow: 0 30px 60px -12px rgba(0, 0, 0, 0.5);
          animation: sowZoomIn 0.3s cubic-bezier(0.22, 1, 0.36, 1);
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .sow-modal-content img {
          display: block;
          max-width: 100%;
          max-height: calc(90vh - 24px);
          width: auto;
          height: auto;
          object-fit: contain;
          border-radius: 10px;
        }

        .sow-modal-close {
          position: absolute;
          top: -14px;
          right: -14px;
          width: 40px;
          height: 40px;
          border-radius: 50%;
          background: #ffffff;
          color: #0F2044;
          border: 1px solid #E6EEF7;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          box-shadow: 0 8px 20px rgba(0, 0, 0, 0.25);
          transition: background 0.2s ease, color 0.2s ease, transform 0.2s ease;
          z-index: 2;
        }

        .sow-modal-close:hover {
          background: #007BFF;
          color: #ffffff;
          transform: rotate(90deg);
        }

        @keyframes sowFadeIn {
          from { opacity: 0; }
          to   { opacity: 1; }
        }

        @keyframes sowZoomIn {
          from { opacity: 0; transform: scale(0.9); }
          to   { opacity: 1; transform: scale(1); }
        }

        @media (max-width: 640px) {
          .sow-modal-overlay { padding: 12px; }
          .sow-modal-close {
            top: 6px;
            right: 6px;
            width: 36px;
            height: 36px;
          }
        }
      `}</style>

      <div className="sow-container">
        <div className="sow-grid">

          <div className="sow-left">
            <div className="sow-badge-wrap">
              <span className="sow-badge">Services Overview</span>
              <div className="sow-badge-line"></div>
            </div>

            <h1 className="sow-heading">
              Download Our <br />
              <span>Services Overview</span>
            </h1>

            <p className="sow-para">
              Get a complete overview of Make My Work digital solutions,
              including all our services, benefits, and contact details in a single
              high-quality image. Download, share, or use it for your reference
              anytime.
            </p>

            <div className="sow-features">
              <FeatureItem icon={<Icons.Image />} title="High Resolution" />
              <FeatureItem icon={<Icons.Share />} title="Easy to Share" />
              <FeatureItem icon={<Icons.Download />} title="One Click Download" />
              <FeatureItem icon={<Icons.Smartphone />} title="Works on All Devices" />
            </div>

            <div className="sow-buttons">
              <button
                className="sow-btn-primary"
                onClick={handleDownload}
                type="button"
              >
                <Icons.Download />
                Download Image
                <span className="sow-btn-icon-right"><Icons.ArrowRight /></span>
              </button>

              <button
                className="sow-btn-secondary"
                onClick={handlePreview}
                type="button"
              >
                <Icons.Eye />
                Preview Image
              </button>
            </div>
          </div>

          <div className="sow-right">
            <div className="sow-image-frame">
              <img
                src={IMAGE_URL}
                alt="Alpha Zeta World Services Overview"
                className="sow-right-image"
              />
            </div>
          </div>

        </div>
      </div>

      {/* ---------- Preview Modal ---------- */}
      {isPreviewOpen && (
        <div
          className="sow-modal-overlay"
          onClick={closePreview}
          role="dialog"
          aria-modal="true"
          aria-label="Services Overview Preview"
        >
          <div
            className="sow-modal-content"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              className="sow-modal-close"
              onClick={closePreview}
              aria-label="Close preview"
            >
              <Icons.Close />
            </button>

            <img
              src={IMAGE_URL}
              alt="Alpha Zeta World Services Overview — full preview"
            />
          </div>
        </div>
      )}
    </>
  );
}