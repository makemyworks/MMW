```jsx
import { useEffect, useState } from "react";
import api from "../api/axios";

const Analytics = () => {
    const [analytics, setAnalytics] = useState({
        totalVisits: 0,
        pageViews: [],
        recentVisits: [],
    });

    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");

    useEffect(() => {
        const fetchAnalytics = async () => {
            try {
                const response = await api.get("/admin/page-analytics");

                setAnalytics(
                    response.data?.data || {
                        totalVisits: 0,
                        pageViews: [],
                        recentVisits: [],
                    }
                );
            } catch (err) {
                setError(
                    err.response?.data?.message ||
                    "Unable to load page analytics."
                );
            } finally {
                setLoading(false);
            }
        };

        fetchAnalytics();
    }, []);

    if (loading) {
        return <div className="analytics-page">Loading analytics...</div>;
    }

    if (error) {
        return (
            <div className="analytics-page">
                <h2>Page Analytics</h2>
                <p>{error}</p>
            </div>
        );
    }

    return (
        <div className="analytics-page">
            <div className="analytics-header">
                <h1>Page Analytics</h1>
                <p>Track page views across the admin panel.</p>
            </div>

            <div className="analytics-summary">
                <div className="analytics-card">
                    <h3>Total Page Visits</h3>
                    <p>{analytics.totalVisits}</p>
                </div>

                <div className="analytics-card">
                    <h3>Unique Pages Visited</h3>
                    <p>{analytics.pageViews.length}</p>
                </div>
            </div>

            <section className="analytics-section">
                <h2>Page-wise Views</h2>

                {analytics.pageViews.length === 0 ? (
                    <p>No page visits recorded yet.</p>
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
                                {analytics.pageViews.map((page) => (
                                    <tr key={page._id}>
                                        <td>{page.pageTitle || page._id}</td>
                                        <td>{page._id}</td>
                                        <td>{page.totalVisits}</td>
                                        <td>
                                            {page.lastVisited
                                                ? new Date(
                                                    page.lastVisited
                                                ).toLocaleString()
                                                : "—"}
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                )}
            </section>

            <section className="analytics-section">
                <h2>Last 15 Page Visits</h2>

                {analytics.recentVisits.length === 0 ? (
                    <p>No recent visits recorded yet.</p>
                ) : (
                    <div className="analytics-table-wrapper">
                        <table className="analytics-table">
                            <thead>
                                <tr>
                                    <th>Admin</th>
                                    <th>Page</th>
                                    <th>Path</th>
                                    <th>Visited At</th>
                                </tr>
                            </thead>

                            <tbody>
                                {analytics.recentVisits.map((visit) => (
                                    <tr key={visit._id}>
                                        <td>{visit.adminName || "Admin"}</td>
                                        <td>{visit.pageTitle || "—"}</td>
                                        <td>{visit.pagePath}</td>
                                        <td>
                                            {visit.createdAt
                                                ? new Date(
                                                    visit.createdAt
                                                ).toLocaleString()
                                                : "—"}
                                        </td>
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
```
