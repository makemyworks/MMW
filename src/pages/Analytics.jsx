
import { useEffect, useState } from "react";
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
    date ? new Date(date).toLocaleString() : "—";

const Analytics = () => {
    const [website, setWebsite] = useState(emptyWebsiteAnalytics);
    const [admin, setAdmin] = useState(emptyAdminAnalytics);
    const [loading, setLoading] = useState(true);
    const [errors, setErrors] = useState([]);

    useEffect(() => {
        let active = true;

        const fetchAnalytics = async () => {
            const results = await Promise.allSettled([
                api.get("/website-analytics/summary"),
                api.get("/admin/page-analytics"),
            ]);

            if (!active) return;

            const nextErrors = [];

            if (results[0].status === "fulfilled") {
                const response = results[0].value;
                setWebsite(
                    response.data?.data || emptyWebsiteAnalytics
                );
            } else {
                nextErrors.push("Website analytics could not be loaded.");
            }

            if (results[1].status === "fulfilled") {
                const response = results[1].value;
                setAdmin(
                    response.data?.data || emptyAdminAnalytics
                );
            } else {
                nextErrors.push("Admin panel analytics could not be loaded.");
            }

            setErrors(nextErrors);
            setLoading(false);
        };

        fetchAnalytics();

        return () => {
            active = false;
        };
    }, []);

    if (loading) {
        return <div className="analytics-page">Loading analytics...</div>;
    }

    return (
        <div className="analytics-page">
            <div className="analytics-header">
                <h1>Analytics</h1>
                <p>Website performance and admin activity overview.</p>
            </div>

            {errors.map((message) => (
                <p key={message} role="alert">{message}</p>
            ))}

            {/* Main website analytics */}
            <section className="analytics-section">
                <h2>Website Analytics</h2>

                <div className="analytics-summary">
                    <div className="analytics-card">
                        <h3>Total Page Views</h3>
                        <p>{website.totalPageViews}</p>
                    </div>

                    <div className="analytics-card">
                        <h3>Unique Visitors</h3>
                        <p>{website.uniqueVisitors}</p>
                    </div>

                    <div className="analytics-card">
                        <h3>Button Clicks</h3>
                        <p>{website.totalClicks}</p>
                    </div>
                </div>

                <h3>Popular Website Pages</h3>

                {website.pageViews.length === 0 ? (
                    <p>No website page views recorded yet.</p>
                ) : (
                    <div className="analytics-table-wrapper">
                        <table className="analytics-table">
                            <thead>
                                <tr>
                                    <th>Page</th>
                                    <th>Path</th>
                                    <th>Total Views</th>
                                    <th>Last Visited</th>
                                </tr>
                            </thead>
                            <tbody>
                                {website.pageViews.map((page) => (
                                    <tr key={page._id}>
                                        <td>{page.pageTitle || page._id}</td>
                                        <td>{page._id}</td>
                                        <td>{page.totalViews}</td>
                                        <td>{formatDate(page.lastVisited)}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                )}

                <h3>Last 15 Website Events</h3>

                {website.recentVisits.length === 0 ? (
                    <p>No website events recorded yet.</p>
                ) : (
                    <div className="analytics-table-wrapper">
                        <table className="analytics-table">
                            <thead>
                                <tr>
                                    <th>Event</th>
                                    <th>Page</th>
                                    <th>Button</th>
                                    <th>Date</th>
                                </tr>
                            </thead>
                            <tbody>
                                {website.recentVisits.map((visit) => (
                                    <tr key={visit._id}>
                                        <td>
                                            {visit.eventType === "page_view"
                                                ? "Page View"
                                                : "Button Click"}
                                        </td>
                                        <td>
                                            {visit.pageTitle || visit.pagePath}
                                            <br />
                                            <small>{visit.pagePath}</small>
                                        </td>
                                        <td>{visit.elementLabel || "—"}</td>
                                        <td>{formatDate(visit.createdAt)}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                )}
            </section>

            {/* Admin panel analytics */}
            <section className="analytics-section">
                <h2>Admin Panel Analytics</h2>

                <div className="analytics-summary">
                    <div className="analytics-card">
                        <h3>Total Admin Page Visits</h3>
                        <p>{admin.totalVisits}</p>
                    </div>

                    <div className="analytics-card">
                        <h3>Unique Admin Pages</h3>
                        <p>{admin.pageViews.length}</p>
                    </div>
                </div>

                <h3>Admin Page Views</h3>

                {admin.pageViews.length === 0 ? (
                    <p>No admin page visits recorded yet.</p>
                ) : (
                    <div className="analytics-table-wrapper">
                        <table className="analytics-table">
                            <thead>
                                <tr>
                                    <th>Page</th>
                                    <th>Path</th>
                                    <th>Total Views</th>
                                    <th>Last Visited</th>
                                </tr>
                            </thead>
                            <tbody>
                                {admin.pageViews.map((page) => (
                                    <tr key={page._id}>
                                        <td>{page.pageTitle || page._id}</td>
                                        <td>{page._id}</td>
                                        <td>{page.totalVisits}</td>
                                        <td>{formatDate(page.lastVisited)}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                )}

                <h3>Last 15 Admin Page Visits</h3>

                {admin.recentVisits.length === 0 ? (
                    <p>No admin page visits recorded yet.</p>
                ) : (
                    <div className="analytics-table-wrapper">
                        <table className="analytics-table">
                            <thead>
                                <tr>
                                    <th>Admin</th>
                                    <th>Page</th>
                                    <th>Path</th>
                                    <th>Date</th>
                                </tr>
                            </thead>
                            <tbody>
                                {admin.recentVisits.map((visit) => (
                                    <tr key={visit._id}>
                                        <td>{visit.adminName || "Admin"}</td>
                                        <td>{visit.pageTitle || "—"}</td>
                                        <td>{visit.pagePath}</td>
                                        <td>{formatDate(visit.createdAt)}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                )}
            </section>
        </div>
    );
};

export default Analytics;
