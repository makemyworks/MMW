
import { useCallback, useEffect, useMemo, useState } from "react";
import { RefreshCw, ScrollText } from "lucide-react";
import api from "../api/axios";
import { useAuth } from "../context/useAuth";
import { hasPermission } from "../constants/permissions";

const formatDate = (value) => {
    if (!value) return { date: "—", time: "—", timestamp: "" };

    const timestamp = new Date(value);

    if (Number.isNaN(timestamp.getTime())) {
        return { date: "—", time: "—", timestamp: String(value) };
    }

    return {
        date: timestamp.toLocaleDateString(undefined, {
            year: "numeric",
            month: "short",
            day: "2-digit",
        }),
        time: timestamp.toLocaleTimeString(undefined, {
            hour: "2-digit",
            minute: "2-digit",
            second: "2-digit",
            timeZoneName: "short",
        }),
        timestamp: timestamp.toISOString(),
    };
};

const ActivityLog = () => {
    const { admin: currentAdmin } = useAuth();

    const [logs, setLogs] = useState([]);
    const [staffById, setStaffById] = useState({});
    const [pagination, setPagination] = useState({
        page: 1,
        totalPages: 1,
        total: 0,
    });
    const [search, setSearch] = useState("");
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");

    const loadLogs = useCallback(async (page = 1) => {
        setLoading(true);
        setError("");

        try {
            const [logsResponse, staffResponse] = await Promise.all([
                api.get("/admin/activity-logs", {
                    params: { page, limit: 20 },
                }),
                hasPermission(currentAdmin, "staff")
                    ? api.get("/admin/staff")
                    : Promise.resolve(null),
            ]);

            setLogs(logsResponse.data.data?.items || []);

            setPagination(
                logsResponse.data.data?.pagination || {
                    page: 1,
                    totalPages: 1,
                    total: 0,
                }
            );

            setStaffById(
                Object.fromEntries(
                    (staffResponse?.data.data || []).map((member) => [
                        String(member.id),
                        member,
                    ])
                )
            );
        } catch (requestError) {
            setError(
                requestError.response?.data?.message ||
                    "Could not load the activity log."
            );
        } finally {
            setLoading(false);
        }
    }, [currentAdmin]);

    useEffect(() => {
        void Promise.resolve().then(() => loadLogs());
    }, [loadLogs]);

    const visibleLogs = useMemo(() => {
        const query = search.trim().toLowerCase();

        if (!query) return logs;

        return logs.filter((log) => {
            const actor =
                staffById[String(log.actor)] ||
                (String(log.actor) === String(currentAdmin?.id)
                    ? currentAdmin
                    : null);

            return [
                log.description,
                log.action,
                log.resource,
                log.actorName,
                actor?.email,
            ].some((value) =>
                String(value || "").toLowerCase().includes(query)
            );
        });
    }, [currentAdmin, logs, search, staffById]);

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

                .inbox-total {
                    color: #101F43;
                    background: #EDF5FF;
                    border: 1px solid #D5E5FF;
                    border-radius: 12px;
                }

                .inbox-total strong {
                    color: #0866F5;
                }

                .inbox-total span {
                    color: #64748B;
                }

                .notice-error {
                    color: #B42318;
                    background: #FEF3F2;
                    border-color: #FECDCA;
                }

                .activity-toolbar {
                    background: #FFFFFF;
                    border: 1px solid #E2EAF5;
                    border-radius: 12px;
                }

                .toolbar-meta {
                    color: #64748B;
                }

                .toolbar-meta svg {
                    color: #0866F5;
                }

                .activity-tools {
                    display: flex;
                    align-items: center;
                    gap: 10px;
                }

                .search-field input {
                    color: #101F43;
                    background: #FFFFFF;
                    border: 1px solid #CBD5E1;
                    border-radius: 8px;
                }

                .search-field input::placeholder {
                    color: #94A3B8;
                }

                .search-field input:focus {
                    outline: none;
                    border-color: #0866F5;
                    box-shadow: 0 0 0 3px rgba(8, 102, 245, 0.12);
                }

                .icon-button {
                    color: #0866F5;
                    background: #EDF5FF;
                    border: 1px solid #D5E5FF;
                    border-radius: 8px;
                    cursor: pointer;
                    transition: background 0.2s ease, color 0.2s ease;
                }

                .icon-button:hover {
                    color: #FFFFFF;
                    background: #0866F5;
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

                .activity-table {
                    width: 100%;
                    border-collapse: collapse;
                }

                .activity-table thead {
                    background: #EDF5FF;
                }

                .activity-table th {
                    color: #101F43;
                    font-weight: 600;
                    white-space: nowrap;
                }

                .activity-table td {
                    color: #475569;
                }

                .activity-table th,
                .activity-table td {
                    padding: 14px 16px;
                    text-align: left;
                    border-bottom: 1px solid #E2EAF5;
                }

                .activity-table tbody tr:last-child td {
                    border-bottom: none;
                }

                .activity-table tbody tr:hover {
                    background: #F8FAFF;
                }

                .activity-description {
                    color: #101F43 !important;
                    font-weight: 500;
                }

                .activity-type {
                    display: inline-flex;
                    align-items: center;
                    padding: 5px 10px;
                    color: #0866F5;
                    background: #EDF5FF;
                    border-radius: 20px;
                    font-size: 12px;
                    font-weight: 600;
                    text-transform: capitalize;
                }

                .activity-timestamp {
                    color: #64748B !important;
                    font-size: 12px;
                    white-space: nowrap;
                }

                .muted {
                    color: #64748B;
                }

                .pagination {
                    color: #64748B;
                }

                .button-secondary {
                    color: #101F43;
                    background: #FFFFFF;
                    border: 1px solid #CBD5E1;
                    border-radius: 8px;
                    transition: all 0.2s ease;
                }

                .button-secondary:hover:not(:disabled) {
                    color: #0866F5;
                    background: #EDF5FF;
                    border-color: #0866F5;
                }

                .button-secondary:disabled {
                    color: #94A3B8;
                    background: #F1F5F9;
                    cursor: not-allowed;
                    opacity: 0.7;
                }

                @media (max-width: 768px) {
                    .activity-tools {
                        width: 100%;
                    }

                    .search-field {
                        flex: 1;
                        min-width: 0;
                    }

                    .search-field input {
                        width: 100%;
                    }
                }
            `}</style>

            <section className="page-section">
                <div className="page-heading">
                    <div>
                        <p className="eyebrow">Audit trail</p>
                        <h1>Activity Log</h1>
                        <p className="page-subtitle">
                            Review administrative actions and when they happened.
                        </p>
                    </div>

                    <div className="inbox-total">
                        <strong>{pagination.total}</strong>
                        <span>activities</span>
                    </div>
                </div>

                {error && (
                    <div className="notice notice-error" role="alert">
                        {error}
                    </div>
                )}

                <div className="table-toolbar activity-toolbar">
                    <div className="toolbar-meta">
                        <ScrollText size={16} />
                        <span>
                            Newest activity first · {pagination.total} total
                        </span>
                    </div>

                    <div className="activity-tools">
                        <label className="search-field">
                            <span className="sr-only">Search activity</span>
                            <input
                                type="search"
                                placeholder="Search action, admin, or email"
                                value={search}
                                onChange={(event) => setSearch(event.target.value)}
                            />
                        </label>

                        <button
                            className="icon-button"
                            type="button"
                            onClick={() => loadLogs(pagination.page)}
                            aria-label="Refresh activity log"
                            title="Refresh"
                        >
                            <RefreshCw size={17} />
                        </button>
                    </div>
                </div>

                {loading ? (
                    <div className="table-state">Loading activity…</div>
                ) : visibleLogs.length === 0 ? (
                    <div className="table-state">
                        <strong>
                            {search
                                ? "No matching activity"
                                : "No activity recorded yet"}
                        </strong>
                        <span>
                            {search
                                ? "Try another name, email, or action."
                                : "Administrative actions will appear here when recorded by the server."}
                        </span>
                    </div>
                ) : (
                    <div className="table-wrap">
                        <table className="data-table activity-table">
                            <thead>
                                <tr>
                                    <th>Activity</th>
                                    <th>Action</th>
                                    <th>Admin / staff</th>
                                    <th>Email</th>
                                    <th>Date</th>
                                    <th>Time</th>
                                    <th>Timestamp</th>
                                </tr>
                            </thead>

                            <tbody>
                                {visibleLogs.map((log) => {
                                    const actor =
                                        staffById[String(log.actor)] ||
                                        (String(log.actor) ===
                                        String(currentAdmin?.id)
                                            ? currentAdmin
                                            : null);

                                    const dateTime = formatDate(log.createdAt);

                                    return (
                                        <tr key={log._id}>
                                            <td className="activity-description">
                                                {log.description || "—"}
                                            </td>

                                            <td>
                                                <span className="activity-type">
                                                    {String(
                                                        log.action ||
                                                            log.resource ||
                                                            "activity"
                                                    ).replaceAll("_", " ")}
                                                </span>
                                            </td>

                                            <td>
                                                {log.actorName ||
                                                    actor?.name ||
                                                    "System"}
                                            </td>

                                            <td>
                                                {actor?.email || (
                                                    <span className="muted">
                                                        Unavailable
                                                    </span>
                                                )}
                                            </td>

                                            <td>{dateTime.date}</td>
                                            <td>{dateTime.time}</td>

                                            <td className="activity-timestamp">
                                                {dateTime.timestamp || "—"}
                                            </td>
                                        </tr>
                                    );
                                })}
                            </tbody>
                        </table>
                    </div>
                )}

                {!loading && pagination.totalPages > 1 && (
                    <div className="pagination">
                        <span>
                            Page {pagination.page} of {pagination.totalPages} · 20 per page
                        </span>

                        <div>
                            <button
                                className="button button-secondary"
                                type="button"
                                disabled={pagination.page <= 1}
                                onClick={() => loadLogs(pagination.page - 1)}
                            >
                                Previous
                            </button>

                            <button
                                className="button button-secondary"
                                type="button"
                                disabled={pagination.page >= pagination.totalPages}
                                onClick={() => loadLogs(pagination.page + 1)}
                            >
                                Next
                            </button>
                        </div>
                    </div>
                )}
            </section>
        </>
    );
};

export default ActivityLog;
