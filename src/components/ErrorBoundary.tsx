import { Component, type ErrorInfo, type ReactNode } from "react";

type Props = { children: ReactNode };
type State = { failed: boolean };

/** Prevents a blank white screen: if any section crashes, visitors see a friendly message. */
export default class ErrorBoundary extends Component<Props, State> {
  state: State = { failed: false };

  static getDerivedStateFromError(): State {
    return { failed: true };
  }

  componentDidCatch(error: Error, info: ErrorInfo) {
    console.error("Page error:", error, info.componentStack);
  }

  render() {
    if (!this.state.failed) return this.props.children;
    return (
      <div style={{ minHeight: "60vh", display: "grid", placeItems: "center", textAlign: "center", padding: "3rem 1.25rem", fontFamily: "system-ui, sans-serif" }}>
        <div>
          <h1 style={{ color: "#0a2f28", fontSize: "1.6rem", margin: "0 0 .5rem" }}>Something went wrong</h1>
          <p style={{ color: "#52665f", maxWidth: 420, margin: "0 auto 1.25rem", lineHeight: 1.6 }}>
            Sorry about that. Please refresh the page. If the problem continues, contact us and we will fix it quickly.
          </p>
          <button
            type="button"
            onClick={() => window.location.reload()}
            style={{ background: "#0a4b3f", color: "#fff", border: 0, borderRadius: 999, padding: ".8rem 1.6rem", fontWeight: 700, cursor: "pointer" }}
          >
            Refresh page
          </button>
        </div>
      </div>
    );
  }
}
