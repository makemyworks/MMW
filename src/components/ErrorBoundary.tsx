import { Component, type ErrorInfo, type ReactNode } from "react";

type Props = { children: ReactNode };
type State = { failed: boolean };

/** If a page ever crashes, visitors see a friendly message instead of a blank screen. */
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
      <section className="mw-center-page">
        <h1>Something went wrong</h1>
        <p>Sorry about that. Please refresh the page. If it happens again, message us and we will fix it quickly.</p>
        <button type="button" className="mw-btn mw-btn-primary" onClick={() => window.location.reload()}>
          Refresh page
        </button>
      </section>
    );
  }
}
