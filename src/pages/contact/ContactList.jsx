
import { useCallback, useEffect, useState } from "react";
import { RefreshCw } from "lucide-react";
import api from "../../api/axios";

const ContactList = () => {
    const [contacts, setContacts] = useState([]);
    const [pagination, setPagination] = useState({ page: 1, total: 0, totalPages: 1 });
    const [status, setStatus] = useState("all");
    const [searchInput, setSearchInput] = useState("");
    const [search, setSearch] = useState("");
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");

    useEffect(() => {
        const timer = window.setTimeout(() => setSearch(searchInput.trim()), 250);
        return () => window.clearTimeout(timer);
    }, [searchInput]);

    const loadContacts = useCallback(async (page = 1) => {
        setLoading(true);
        setError("");
        try {
            const params = { page, limit: 10 };
            if (status !== "all") params.status = status;
            if (search) params.search = search;
            const { data } = await api.get("/contacts", { params });
            setContacts(data.data?.items || []);
            setPagination(data.data?.pagination || { page: 1, total: 0, totalPages: 1 });
        } catch (requestError) {
            setError(requestError.response?.data?.message || "Could not load contact submissions.");
        } finally {
            setLoading(false);
        }
    }, [search, status]);

    useEffect(() => {
        let active = true;
        const params = { page: 1, limit: 10 };
        if (status !== "all") params.status = status;
        if (search) params.search = search;

        api.get("/contacts", { params }).then(({ data }) => {
            if (!active) return;
            setContacts(data.data?.items || []);
            setPagination(data.data?.pagination || { page: 1, total: 0, totalPages: 1 });
        }).catch((requestError) => {
            if (active) setError(requestError.response?.data?.message || "Could not load contact submissions.");
        }).finally(() => {
            if (active) setLoading(false);
        });

        return () => { active = false; };
    }, [search, status]);

    const updateStatus = async (contact, nextStatus) => {
        try {
            await api.patch(`/contacts/${contact.id}/status`, { status: nextStatus });
            await loadContacts(pagination.page);
        } catch (requestError) {
            setError(requestError.response?.data?.message || "Could not update contact status.");
        }
    };

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

                .contact-toolbar {
                    background: #FFFFFF;
                    border: 1px solid #E2EAF5;
                    border-radius: 12px;
                }

                .segmented-control {
                    display: inline-flex;
                    gap: 4px;
                    padding: 4px;
                    background: #F1F5F9;
                    border: 1px solid #E2EAF5;
                    border-radius: 10px;
                }

                .segmented-control button {
                    color: #64748B;
                    background: transparent;
                    border: none;
                    border-radius: 7px;
                    padding: 8px 14px;
                    cursor: pointer;
                    transition: all 0.2s ease;
                }

                .segmented-control button:hover {
                    color: #101F43;
                    background: #EDF5FF;
                }

                .segmented-control button.selected {
                    color: #FFFFFF;
                    background: #101F43;
                }

                .contact-tools {
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
                    transition: all 0.2s ease;
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

                .contacts-table {
                    width: 100%;
                    border-collapse: collapse;
                }

                .contacts-table thead {
                    background: #EDF5FF;
                }

                .contacts-table th {
                    color: #101F43;
                    font-weight: 600;
                    white-space: nowrap;
                }

                .contacts-table td {
                    color: #475569;
                }

                .contacts-table th,
                .contacts-table td {
                    padding: 14px 16px;
                    text-align: left;
                    border-bottom: 1px solid #E2EAF5;
                }

                .contacts-table tbody tr:last-child td {
                    border-bottom: none;
                }

                .contacts-table tbody tr:hover {
                    background: #F8FAFF;
                }

                .contact-person strong {
                    display: block;
                    color: #101F43;
                }

                .contact-person a,
                .contacts-table td > a {
                    color: #0866F5;
                    text-decoration: none;
                }

                .contact-person a:hover,
                .contacts-table td > a:hover {
                    text-decoration: underline;
                }

                .service-tags {
                    display: flex;
                    flex-wrap: wrap;
                    gap: 6px;
                }

                .service-tags span {
                    display: inline-flex;
                    padding: 4px 8px;
                    color: #0866F5;
                    background: #EDF5FF;
                    border: 1px solid #D5E5FF;
                    border-radius: 20px;
                    font-size: 12px;
                }

                .message-cell {
                    min-width: 180px;
                    max-width: 300px;
                    overflow-wrap: anywhere;
                }

                .muted {
                    color: #64748B;
                }

                .status-select {
                    padding: 7px 10px;
                    border: 1px solid #D5E5FF;
                    border-radius: 8px;
                    cursor: pointer;
                    outline: none;
                }

                .status-select:focus {
                    border-color: #0866F5;
                    box-shadow: 0 0 0 3px rgba(8, 102, 245, 0.12);
                }

                .status-pending {
                    color: #92400E;
                    background: #FFFBEB;
                    border-color: #FDE68A;
                }

                .status-success {
                    color: #166534;
                    background: #F0FDF4;
                    border-color: #BBF7D0;
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
                    .contact-toolbar {
                        align-items: stretch;
                        flex-direction: column;
                    }

                    .contact-tools {
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
                        <p className="eyebrow">Inbox</p>
                        <h1>Contacts</h1>
                        <p className="page-subtitle">
                            Website enquiries and service requests.
                        </p>
                    </div>

                    <div className="inbox-total">
                        <strong>{pagination.total}</strong>
                        <span>submissions</span>
                    </div>
                </div>

                {error && (
                    <div className="notice notice-error" role="alert">
                        {error}
                    </div>
                )}

                <div className="table-toolbar contact-toolbar">
                    <div className="segmented-control" aria-label="Filter contact status">
                        {["all", "pending", "success"].map((value) => (
                            <button
                                key={value}
                                type="button"
                                className={status === value ? "selected" : ""}
                                onClick={() => setStatus(value)}
                            >
                                {value === "all"
                                    ? "All"
                                    : value === "success"
                                        ? "Resolved"
                                        : "Pending"}
                            </button>
                        ))}
                    </div>

                    <div className="contact-tools">
                        <label className="search-field">
                            <span className="sr-only">Search contacts</span>
                            <input
                                type="search"
                                placeholder="Search name, email, phone"
                                value={searchInput}
                                onChange={(event) => setSearchInput(event.target.value)}
                            />
                        </label>

                        <button
                            className="icon-button"
                            type="button"
                            onClick={() => loadContacts(pagination.page)}
                            aria-label="Refresh contacts"
                            title="Refresh"
                        >
                            <RefreshCw size={17} />
                        </button>
                    </div>
                </div>

                {loading ? (
                    <div className="table-state">
                        Loading contact submissions…
                    </div>
                ) : contacts.length === 0 ? (
                    <div className="table-state">
                        <strong>No contacts found</strong>
                        <span>New website enquiries will appear here.</span>
                    </div>
                ) : (
                    <div className="table-wrap">
                        <table className="data-table contacts-table">
                            <thead>
                                <tr>
                                    <th>Contact</th>
                                    <th>Phone</th>
                                    <th>Services</th>
                                    <th>Message</th>
                                    <th>Received</th>
                                    <th>Status</th>
                                </tr>
                            </thead>

                            <tbody>
                                {contacts.map((contact) => (
                                    <tr key={contact.id}>
                                        <td>
                                            <div className="contact-person">
                                                <strong>{contact.fullName}</strong>
                                                <a href={`mailto:${contact.email}`}>
                                                    {contact.email}
                                                </a>
                                            </div>
                                        </td>

                                        <td>
                                            <a href={`tel:${contact.contactNumber}`}>
                                                {contact.contactNumber}
                                            </a>
                                        </td>

                                        <td>
                                            <div className="service-tags">
                                                {(contact.services || []).map((service) => (
                                                    <span key={service}>{service}</span>
                                                ))}
                                            </div>
                                        </td>

                                        <td className="message-cell">
                                            {contact.description || (
                                                <span className="muted">No message</span>
                                            )}
                                        </td>

                                        <td>
                                            {contact.createdAt
                                                ? new Date(contact.createdAt).toLocaleString()
                                                : "—"}
                                        </td>

                                        <td>
                                            <select
                                                aria-label={`Status for ${contact.fullName}`}
                                                className={`status-select status-${contact.status}`}
                                                value={contact.status}
                                                onChange={(event) =>
                                                    updateStatus(contact, event.target.value)
                                                }
                                            >
                                                <option value="pending">Pending</option>
                                                <option value="success">Resolved</option>
                                            </select>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                )}

                {!loading && pagination.totalPages > 1 && (
                    <div className="pagination">
                        <span>
                            Page {pagination.page} of {pagination.totalPages} · 10 per page
                        </span>

                        <div>
                            <button
                                className="button button-secondary"
                                type="button"
                                disabled={pagination.page <= 1}
                                onClick={() => loadContacts(pagination.page - 1)}
                            >
                                Previous
                            </button>

                            <button
                                className="button button-secondary"
                                type="button"
                                disabled={pagination.page >= pagination.totalPages}
                                onClick={() => loadContacts(pagination.page + 1)}
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

export default ContactList;
