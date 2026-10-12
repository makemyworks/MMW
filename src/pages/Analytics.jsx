import { useCallback, useEffect, useState } from "react";
import {
    Activity,
    Eye,
    MousePointerClick,
    RefreshCw,
    ShieldCheck,
    Users
} from "lucide-react";
import api from "../api/axios";

const emptyWebsiteAnalytics = {
    totalPageViews: 0,
    totalClicks: 0,
    uniqueVisitors: 0,
    pageViews: [],
    recentVisits: [],
};

const emptyAdminAnalytics = {
    totalVisits: 0,
    pageViews: [],
    recentVisits: [],
};

const formatDate = (date) =>
    date
        ? new Date(date).toLocaleString(undefined, {
              dateStyle: "medium",
              timeStyle: "short",
          })
        : "—";

const Analytics = () => {
    const [website, setWebsite] = useState(emptyWebsiteAnalytics);
    const [admin, setAdmin] = useState(emptyAdminAnalytics);
    const [loading, setLoading] = useState(true);
    const [refreshing, setRefreshing] = useState(false);
    const [errors, setErrors] = useState([]);

    const fetchAnalytics = useCallback(async (isRefresh = false) => {
        if (isRefresh) setRefreshing(true);
        else setLoading(true);

        const results = await Promise.allSettled([
            api.get("/website-analytics/summary"),
            api.get("/admin/page-analytics"),
        ]);

        const nextErrors = [];

        if (results[0].status === "fulfilled") {
            const response = results[0].value;
            setWebsite(response.data?.data || emptyWebsiteAnalytics);
        } else {
            const status = results[0].reason?.response?.status;
            if (status !== 403) {
                nextErrors.push("Website analytics could not be loaded.");
            }
        }

        if (results[1].status === "fulfilled") {
            const response = results[1].value;
            setAdmin(response.data?.data || emptyAdminAnalytics);
        } else {
            const status = results[1].reason?.response?.status;
            if (status !== 403) {
                nextErrors.push("Admin panel analytics could not be loaded.");
            }
        }

        setErrors(nextErrors);
        setLoading(false);
        setRefreshing(false);
    }, []);

    useEffect(() => {
        let active = true;
        fetchAnalytics();
        return () => {
            active = false;
        };
    }, [fetchAnalytics]);

    return (
        <section className="page-section">
            <div className="page-heading">
                <div>
                    <p className="eyebrow">Insights &amp; Traffic</p>
                    <h1>Analytics</h1>
                    <p className="page-subtitle">
                        Website traffic, visitor interactions and admin activity overview.
                    </p>
                </div>
                <button
                    className="button button-secondary"
                    type="button"
                    onClick={() => fetchAnalytics(true)}
                    disabled={refreshing || loading}
                >
                    <RefreshCw size={14} className={refreshing ? "spinning" : ""} />
                    <span>{refreshing ? "Refreshing..." : "Refresh"}</span>
                </button>
            </div>

            {errors.map((message) => (
                <div key={message} className="notice notice-error" role="alert">
                    {message}
                </div>
            ))}

            {/* Main website analytics */}
            <div className="page-heading" style={{ marginTop: 20 }}>
                <div>
                    <p className="eyebrow">Public Traffic</p>
                    <h2>Website Analytics</h2>
                    <p className="page-subtitle">
                        Live visitors, page views and click interactions on makemyworks.com.
                    </p>
                </div>
            </div>

            <div className="dashboard-links" style={{ marginBottom: 32 }}>
                <div className="dashboard-link">
                    <span className="dashboard-icon">
                        <Eye size={20} />
                    </span>
                    <span className="dashboard-copy">
                        <strong>Total Page Views</strong>
                        <span>Recorded website visits</span>
                    </span>
                    <span className="dashboard-count">
                        {loading ? "…" : website.totalPageViews}
                    </span>
                </div>

                <div className="dashboard-link">
                    <span className="dashboard-icon">
                        <Users size={20} />
                    </span>
                    <span className="dashboard-copy">
                        <strong>Unique Visitors</strong>
                        <span>Distinct visitor devices</span>
                    </span>
                    <span className="dashboard-count">
                        {loading ? "…" : website.uniqueVisitors}
                    </span>
                </div>

                <div className="dashboard-link">
                    <span className="dashboard-icon">
                        <MousePointerClick size={20} />
                    </span>
                    <span className="dashboard-copy">
                        <strong>Button Clicks</strong>
                        <span>Call to action interactions</span>
                    </span>
                    <span className="dashboard-count">
                        {loading ? "…" : website.totalClicks}
                    </span>
                </div>
            </div>

            {/* Popular Website Pages */}
            <h3
                style={{
                    margin: "20px 0 12px",
                    color: "var(--ink)",
                    font: "700 15px 'Manrope', sans-serif",
                }}
            >
                Popular Website Pages
            </h3>
            <div className="table-wrap" style={{ marginBottom: 36, borderRadius: 8 }}>
                {website.pageViews.length === 0 ? (
                    <div className="table-state">
                        <strong>No website page views recorded yet</strong>
                        <span>
                            Views will appear here once visitors browse your public site.
                        </span>
                    </div>
                ) : (
                    <table className="data-table">
                        <thead>
                            <tr>
                                <th>Page Title</th>
                                <th>Path</th>
                                <th>Total Views</th>
                                <th>Last Visited</th>
                            </tr>
                        </thead>
                        <tbody>
                            {website.pageViews.map((page) => (
                                <tr key={page._id}>
                                    <td>
                                        <strong>{page.pageTitle || page._id}</strong>
                                    </td>
                                    <td>
                                        <code
                                            style={{
                                                fontSize: 11,
                                                background: "#f1f4f1",
                                                padding: "2px 6px",
                                                borderRadius: 4,
                                            }}
                                        >
                                            {page._id}
                                        </code>
                                    </td>
                                    <td>
                                        <span className="status-pill status-active">
                                            {page.totalViews} views
                                        </span>
                                    </td>
                                    <td className="muted">
                                        {formatDate(page.lastVisited)}
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                )}
            </div>

            {/* Last 15 Website Events */}
            <h3
                style={{
                    margin: "20px 0 12px",
                    color: "var(--ink)",
                    font: "700 15px 'Manrope', sans-serif",
                }}
            >
                Recent Website Events
            </h3>
            <div className="table-wrap" style={{ marginBottom: 40, borderRadius: 8 }}>
                {website.recentVisits.length === 0 ? (
                    <div className="table-state">
                        <strong>No website events recorded yet</strong>
                        <span>Events like clicks and navigations will appear here.</span>
                    </div>
                ) : (
                    <table className="data-table">
                        <thead>
                            <tr>
                                <th>Event Type</th>
                                <th>Page</th>
                                <th>Target / Button</th>
                                <th>Date &amp; Time</th>
                            </tr>
                        </thead>
                        <tbody>
                            {website.recentVisits.map((visit) => (
                                <tr key={visit._id}>
                                    <td>
                                        <span
                                            className={`status-pill ${
                                                visit.eventType === "page_view"
                                                    ? "status-active"
                                                    : "status-pending"
                                            }`}
                                        >
                                            {visit.eventType === "page_view"
                                                ? "Page View"
                                                : "Button Click"}
                                        </span>
                                    </td>
                                    <td>
                                        <strong>
                                            {visit.pageTitle || visit.pagePath}
                                        </strong>
                                        <br />
                                        <small className="muted">
                                            {visit.pagePath}
                                        </small>
                                    </td>
                                    <td>{visit.elementLabel || "—"}</td>
                                    <td className="muted">
                                        {formatDate(visit.createdAt)}
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                )}
            </div>

            {/* Admin Panel Analytics */}
            <div className="page-heading" style={{ marginTop: 24 }}>
                <div>
                    <p className="eyebrow">Workspace Usage</p>
                    <h2>Admin Panel Analytics</h2>
                    <p className="page-subtitle">
                        Tracking team activity and page visits within this administration
                        panel.
                    </p>
                </div>
            </div>

            <div
                className="dashboard-links"
                style={{
                    marginBottom: 32,
                    gridTemplateColumns: "repeat(2, minmax(0, 1fr))",
                }}
            >
                <div className="dashboard-link">
                    <span className="dashboard-icon">
                        <Activity size={20} />
                    </span>
                    <span className="dashboard-copy">
                        <strong>Total Admin Page Visits</strong>
                        <span>All recorded navigation inside control panel</span>
                    </span>
                    <span className="dashboard-count">
                        {loading ? "…" : admin.totalVisits}
                    </span>
                </div>

                <div className="dashboard-link">
                    <span className="dashboard-icon">
                        <ShieldCheck size={20} />
                    </span>
                    <span className="dashboard-copy">
                        <strong>Unique Admin Pages</strong>
                        <span>Total sections visited by staff</span>
                    </span>
                    <span className="dashboard-count">
                        {loading ? "…" : admin.pageViews.length}
                    </span>
                </div>
            </div>

            {/* Admin Page Views Table */}
            <h3
                style={{
                    margin: "20px 0 12px",
                    color: "var(--ink)",
                    font: "700 15px 'Manrope', sans-serif",
                }}
            >
                Admin Section Views
            </h3>
            <div className="table-wrap" style={{ marginBottom: 36, borderRadius: 8 }}>
                {admin.pageViews.length === 0 ? (
                    <div className="table-state">
                        <strong>No admin page visits recorded yet</strong>
                        <span>
                            Admin activity is recorded automatically as you navigate.
                        </span>
                    </div>
                ) : (
                    <table className="data-table">
                        <thead>
                            <tr>
                                <th>Section Name</th>
                                <th>Path</th>
                                <th>Total Visits</th>
                                <th>Last Visited</th>
                            </tr>
                        </thead>
                        <tbody>
                            {admin.pageViews.map((page) => (
                                <tr key={page._id}>
                                    <td>
                                        <strong>{page.pageTitle || page._id}</strong>
                                    </td>
                                    <td>
                                        <code
                                            style={{
                                                fontSize: 11,
                                                background: "#f1f4f1",
                                                padding: "2px 6px",
                                                borderRadius: 4,
                                            }}
                                        >
                                            {page._id}
                                        </code>
                                    </td>
                                    <td>
                                        <span className="status-pill status-active">
                                            {page.totalVisits} visits
                                        </span>
                                    </td>
                                    <td className="muted">
                                        {formatDate(page.lastVisited)}
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                )}
            </div>

            {/* Recent Admin Visits */}
            <h3
                style={{
                    margin: "20px 0 12px",
                    color: "var(--ink)",
                    font: "700 15px 'Manrope', sans-serif",
                }}
            >
                Recent Admin Activity
            </h3>
            <div className="table-wrap" style={{ marginBottom: 40, borderRadius: 8 }}>
                {admin.recentVisits.length === 0 ? (
                    <div className="table-state">
                        <strong>No admin activity recorded yet</strong>
                    </div>
                ) : (
                    <table className="data-table">
                        <thead>
                            <tr>
                                <th>Admin Member</th>
                                <th>Section</th>
                                <th>Path</th>
                                <th>Date &amp; Time</th>
                            </tr>
                        </thead>
                        <tbody>
                            {admin.recentVisits.map((visit) => (
                                <tr key={visit._id}>
                                    <td>
                                        <strong>{visit.adminName || "Admin"}</strong>
                                    </td>
                                    <td>{visit.pageTitle || "—"}</td>
                                    <td>
                                        <code
                                            style={{
                                                fontSize: 11,
                                                background: "#f1f4f1",
                                                padding: "2px 6px",
                                                borderRadius: 4,
                                            }}
                                        >
                                            {visit.pagePath}
                                        </code>
                                    </td>
                                    <td className="muted">
                                        {formatDate(visit.createdAt)}
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                )}
            </div>
        </section>
    );
};

export default Analytics;
