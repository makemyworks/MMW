
import { useEffect, useState } from "react";

import {
    ArrowUpRight,
    BriefcaseBusiness,
    MessageSquareText,
    Package,
    LogIn,
    ShieldAlert,
    CalendarCheck,
    Clock
} from "lucide-react";

import { Link } from "react-router-dom";

import api from "../api/axios";

import { useAuth } from "../context/useAuth";

import { hasPermission } from "../constants/permissions";

const initialCounts = {
    products: 0,
    services: 0,
    contacts: 0,
    loginAnalytics: {
        totalLogins: 0,
        failedLogins: 0,
        todayLogins: 0,
        recentLogins: [],
        adminLoginStats: []
    }
};

const formatDate = (value) => {
    if (!value) return "—";

    const date = new Date(value);

    if (Number.isNaN(date.getTime())) return "—";

    return date.toLocaleString(undefined, {
        dateStyle: "medium",
        timeStyle: "short"
    });
};

const Dashboard = () => {
    const { admin } = useAuth();

    const [counts, setCounts] = useState(initialCounts);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");

    useEffect(() => {
        let active = true;

        api.get("/admin/dashboard-summary")
            .then(({ data }) => {
                if (active) {
                    setCounts({
                        ...initialCounts,
                        ...(data.data || {}),
                        loginAnalytics: {
                            ...initialCounts.loginAnalytics,
                            ...(data.data?.loginAnalytics || {})
                        }
                    });
                }
            })
            .catch(() => {
                if (active) {
                    setError("Could not load dashboard analytics.");
                }
            })
            .finally(() => {
                if (active) setLoading(false);
            });

        return () => {
            active = false;
        };
    }, []);

    const sections = [
        {
            title: "Products",
            description: "Catalog items and pricing",
            count: counts.products,
            to: "/products",
            icon: Package
        },
        {
            title: "Services",
            description: "Service descriptions and status",
            count: counts.services,
            to: "/services",
            icon: BriefcaseBusiness
        },
        {
            title: "Contacts",
            description: "Website enquiries and requests",
            count: counts.contacts,
            to: "/contacts",
            icon: MessageSquareText
        }
    ].filter(({ to }) => hasPermission(admin, to.slice(1)));

    const analytics = counts.loginAnalytics || initialCounts.loginAnalytics;

    return (
        <>
            <style>{`
                .page-section {
                    color: #101F43;
                }

                .page-heading h1,
                .page-heading h2 {
                    color: #101F43;
                }

                .eyebrow {
                    color: #0866F5;
                }

                .page-subtitle {
                    color: #64748B;
                }

                .dashboard-links {
                    display: grid;
                    gap: 16px;
                }

                .dashboard-link {
                    color: #101F43;
                    background: #FFFFFF;
                    border: 1px solid #E2EAF5;
                    border-radius: 14px;
                    transition:
                        border-color 0.25s ease,
                        background-color 0.25s ease,
                        box-shadow 0.25s ease;
                }

                .dashboard-link:hover {
                    border-color: #0866F5;
                    background: #EDF5FF;
                    box-shadow: 0 8px 24px rgba(16, 31, 67, 0.08);
                }

                .dashboard-icon {
                    color: #0866F5;
                    background: #EDF5FF;
                    border-radius: 12px;
                }

                .dashboard-copy strong {
                    color: #101F43;
                }

                .dashboard-copy span {
                    color: #64748B;
                }

                .dashboard-count {
                    color: #0866F5;
                    background: #EDF5FF;
                    border-radius: 8px;
                }

                .dashboard-arrow {
                    color: #0866F5;
                }

                .notice {
                    border-radius: 10px;
                }

                .notice-error {
                    color: #B42318;
                    background: #FEF3F2;
                    border-color: #FECDCA;
                }

                .notice-info {
                    color: #101F43;
                    background: #EDF5FF;
                    border-color: #D5E5FF;
                }

                .table-state {
                    color: #64748B;
                    background: #FFFFFF;
                    border: 1px solid #E2EAF5;
                    border-radius: 12px;
                }

                .table-state strong {
                    color: #101F43;
                }

                .table-wrap {
                    overflow-x: auto;
                    background: #FFFFFF;
                    border: 1px solid #E2EAF5;
                    border-radius: 12px;
                }

                .data-table {
                    width: 100%;
                    border-collapse: collapse;
                }

                .data-table thead {
                    background: #EDF5FF;
                }

                .data-table th {
                    color: #101F43;
                    font-weight: 600;
                }

                .data-table td {
                    color: #475569;
                }

                .data-table th,
                .data-table td {
                    padding: 14px 16px;
                    text-align: left;
                    border-bottom: 1px solid #E2EAF5;
                }

                .data-table tbody tr:last-child td {
                    border-bottom: none;
                }

                .data-table tbody tr:hover {
                    background: #F8FAFF;
                }

                .activity-type {
                    display: inline-flex;
                    align-items: center;
                    padding: 5px 10px;
                    border-radius: 20px;
                    color: #0866F5;
                    background: #EDF5FF;
                }

                .muted {
                    color: #64748B;
                }

                .login-analytics-grid {
                    grid-template-columns: repeat(3, minmax(0, 1fr));
                }

                @media (max-width: 768px) {
                    .login-analytics-grid {
                        grid-template-columns: 1fr;
                    }
                }
            `}</style>

            <section className="page-section">
                <div className="page-heading">
                    <div>
                        <p className="eyebrow">Workspace</p>
                        <h1>Dashboard</h1>
                        <p className="page-subtitle">
                            Your catalog, customer enquiries and admin login activity.
                        </p>
                    </div>
                </div>

                {error && (
                    <div className="notice notice-error" role="alert">
                        {error}
                    </div>
                )}

                {sections.length > 0 ? (
                    <div className="dashboard-links">
                        {sections.map(({ title, description, count, to, icon: Icon }) => (
                            <Link className="dashboard-link" to={to} key={title}>
                                <span className="dashboard-icon">
                                    <Icon size={20} />
                                </span>

                                <span className="dashboard-copy">
                                    <strong>{title}</strong>
                                    <span>{description}</span>
                                </span>

                                <span className="dashboard-count">{count}</span>

                                <ArrowUpRight className="dashboard-arrow" size={18} />
                            </Link>
                        ))}
                    </div>
                ) : (
                    <div className="notice notice-info">
                        Your account has dashboard access. Ask a staff administrator if you need access to other pages.
                    </div>
                )}

                <div className="page-heading" style={{ marginTop: 32 }}>
                    <div>
                        <p className="eyebrow">Security &amp; access</p>
                        <h2>Login Analytics</h2>
                        <p className="page-subtitle">
                            Successful and failed admin login attempts.
                        </p>
                    </div>
                </div>

                <div className="dashboard-links login-analytics-grid">
                    <div className="dashboard-link">
                        <span className="dashboard-icon">
                            <LogIn size={20} />
                        </span>

                        <span className="dashboard-copy">
                            <strong>Total Successful Logins</strong>
                            <span>All recorded login events</span>
                        </span>

                        <span className="dashboard-count">
                            {loading ? "…" : analytics.totalLogins}
                        </span>
                    </div>

                    <div className="dashboard-link">
                        <span className="dashboard-icon">
                            <ShieldAlert size={20} />
                        </span>

                        <span className="dashboard-copy">
                            <strong>Failed Attempts</strong>
                            <span>Unsuccessful sign-in attempts</span>
                        </span>

                        <span className="dashboard-count">
                            {loading ? "…" : analytics.failedLogins}
                        </span>
                    </div>

                    <div className="dashboard-link">
                        <span className="dashboard-icon">
                            <CalendarCheck size={20} />
                        </span>

                        <span className="dashboard-copy">
                            <strong>Today's Logins</strong>
                            <span>Successful logins today</span>
                        </span>

                        <span className="dashboard-count">
                            {loading ? "…" : analytics.todayLogins}
                        </span>
                    </div>
                </div>

                <div className="page-heading" style={{ marginTop: 32 }}>
                    <div>
                        <p className="eyebrow">Recent activity</p>
                        <h2>Recent Login Attempts</h2>
                    </div>
                </div>

                {loading ? (
                    <div className="table-state">
                        Loading login activity…
                    </div>
                ) : analytics.recentLogins.length === 0 ? (
                    <div className="table-state">
                        <strong>No login activity found</strong>
                        <span>
                            New login attempts will appear here when recorded.
                        </span>
                    </div>
                ) : (
                    <div className="table-wrap">
                        <table className="data-table">
                            <thead>
                                <tr>
                                    <th>Admin</th>
                                    <th>Activity</th>
                                    <th>Email</th>
                                    <th>Date &amp; Time</th>
                                </tr>
                            </thead>

                            <tbody>
                                {analytics.recentLogins.map((entry, index) => (
                                    <tr key={entry._id || `${entry.createdAt}-${index}`}>
                                        <td>{entry.actorName || "Unknown admin"}</td>

                                        <td>
                                            <span className="activity-type">
                                                {entry.action === "login"
                                                    ? "Successful login"
                                                    : entry.action === "logout"
                                                        ? "Logout"
                                                        : "Failed login"}
                                            </span>
                                        </td>

                                        <td>
                                            {entry.metadata?.email || "Unavailable"}
                                        </td>

                                        <td>{formatDate(entry.createdAt)}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                )}

                <div className="page-heading" style={{ marginTop: 32 }}>
                    <div>
                        <p className="eyebrow">Admin overview</p>
                        <h2>Login Statistics by Admin</h2>
                    </div>
                </div>

                {!loading && analytics.adminLoginStats.length === 0 ? (
                    <div className="table-state">
                        No admin login statistics available yet.
                    </div>
                ) : (
                    <div className="table-wrap">
                        <table className="data-table">
                            <thead>
                                <tr>
                                    <th>Admin</th>
                                    <th>Total Logins</th>
                                    <th>Last Successful Login</th>
                                </tr>
                            </thead>

                            <tbody>
                                {analytics.adminLoginStats.map((entry, index) => (
                                    <tr key={entry._id || index}>
                                        <td>{entry.adminName || "Unknown admin"}</td>
                                        <td>{entry.totalLogins}</td>
                                        <td>{formatDate(entry.lastLogin)}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                )}

                <div
                    style={{
                        marginTop: 16,
                        display: "flex",
                        alignItems: "center",
                        gap: 8
                    }}
                >
                    <Clock size={15} />
                    <span className="muted">
                        Login statistics are based on recorded authentication events.
                    </span>
                </div>
            </section>
        </>
    );
};

export default Dashboard;
