import { Link } from "react-router-dom";

export default function Logo({ light = false, onClick }: { light?: boolean; onClick?: () => void }) {
  return (
    <Link to="/" className={light ? "mw-logo mw-logo-light" : "mw-logo"} onClick={onClick} aria-label="Make My Works, home">
      <img
        src={light ? "/brand/logo-light.png" : "/brand/logo.png"}
        alt=""
        width={64}
        height={39}
        className="mw-logo-img"
      />
      <span className="mw-logo-text">
        Make My <span>Works</span>
      </span>
    </Link>
  );
}
