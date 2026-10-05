export default function PageLoader() {
  return (
    <div role="status" aria-label="Loading" style={{ minHeight: "60vh", display: "grid", placeItems: "center" }}>
      <div className="azw-spin" />
      <style>{`
        .azw-spin{width:38px;height:38px;border-radius:50%;border:4px solid #dbe8e4;border-top-color:#0a4b3f;animation:azwspin .8s linear infinite}
        @keyframes azwspin{to{transform:rotate(360deg)}}
        @media (prefers-reduced-motion: reduce){.azw-spin{animation-duration:2.4s}}
      `}</style>
    </div>
  );
}
