import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const KEY = "azw-cookie-choice";

export default function CookieBanner() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    try {
      if (!localStorage.getItem(KEY)) setShow(true);
    } catch {
      setShow(false);
    }
  }, []);

  const choose = (v: "accepted" | "declined") => {
    try {
      localStorage.setItem(KEY, v);
    } catch {
      /* storage blocked: just hide the banner */
    }
    setShow(false);
  };

  if (!show) return null;

  return (
    <div className="azw-cookie" role="dialog" aria-live="polite" aria-label="Cookie notice">
      <p>
        We use cookies to keep the site working and to understand how it is used. Read our{" "}
        <Link to="/cookie-policy">Cookie Policy</Link>.
      </p>
      <div className="azw-cookie-btns">
        <button type="button" onClick={() => choose("declined")} className="azw-c-no">Decline</button>
        <button type="button" onClick={() => choose("accepted")} className="azw-c-yes">Accept</button>
      </div>
      <style>{`
        .azw-cookie{position:fixed;left:16px;bottom:16px;z-index:1001;max-width:420px;background:#033129;color:#e7f1ee;border-radius:14px;padding:1rem 1.1rem;box-shadow:0 14px 34px rgba(0,0,0,.28);font-family:system-ui,sans-serif}
        .azw-cookie p{margin:0 0 .8rem;font-size:.88rem;line-height:1.55;color:#cfe0db}
        .azw-cookie a{color:#7fd6c6;font-weight:600;text-decoration:underline}
        .azw-cookie-btns{display:flex;gap:.6rem}
        .azw-cookie button{flex:1;border-radius:999px;padding:.6rem 1rem;font-weight:700;font-size:.85rem;cursor:pointer;border:1px solid #4fb3a2}
        .azw-c-yes{background:#4fb3a2;color:#033129}.azw-c-no{background:transparent;color:#e7f1ee}
        .azw-cookie button:focus-visible{outline:3px solid #fff;outline-offset:2px}
        @media(max-width:560px){.azw-cookie{left:10px;right:10px;bottom:10px;max-width:none;padding-right:5rem}}
      `}</style>
    </div>
  );
}
