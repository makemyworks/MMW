import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const KEY = "mmw-cookie-choice";

export default function CookieBanner() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    try {
      if (!localStorage.getItem(KEY)) setShow(true);
    } catch {
      setShow(false);
    }
  }, []);

  const choose = (value: "accepted" | "declined") => {
    try {
      localStorage.setItem(KEY, value);
    } catch {
      /* storage blocked: just hide the banner */
    }
    setShow(false);
  };

  if (!show) return null;

  return (
    <div className="mw-cookie" role="dialog" aria-label="Cookie notice">
      <p>
        We use cookies to keep the site working well. Read our <Link to="/cookie-policy">Cookie Policy</Link>.
      </p>
      <div className="mw-cookie-btns">
        <button type="button" className="mw-cookie-no" onClick={() => choose("declined")}>
          Decline
        </button>
        <button type="button" className="mw-cookie-yes" onClick={() => choose("accepted")}>
          Accept
        </button>
      </div>
    </div>
  );
}
