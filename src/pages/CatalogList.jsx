
import { useCallback, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Edit2, Plus, RefreshCw, Search, Trash2, X } from "lucide-react";
import Swal from "sweetalert2";
import api from "../api/axios";
import { resolveImageUrl } from "../utils/imageUrl";

const config = {
    products: { singular: "Product", plural: "Products" },
    services: { singular: "Service", plural: "Services" },
};

const PAGE_SIZE = 10;

const CatalogList = ({ type }) => {
    const itemConfig = config[type];
    const [items, setItems] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");
    const [pagination, setPagination] = useState({ page: 1, total: 0, totalPages: 1 });
    const [searchInput, setSearchInput] = useState("");
    const [search, setSearch] = useState("");

    useEffect(() => {
        const timer = window.setTimeout(() => setSearch(searchInput.trim()), 250);
        return () => window.clearTimeout(timer);
    }, [searchInput]);

    const loadItems = useCallback(async (page = 1) => {
        setLoading(true);
        setError("");
        try {
            const params = { status: "all", page, limit: PAGE_SIZE };
            if (search) params.search = search;
            const response = await api.get(`/${type}`, { params });
            setItems(response.data.data?.items || []);
            setPagination(response.data.data?.pagination || { page: 1, total: 0, totalPages: 1 });
        } catch (requestError) {
            setError(requestError.response?.data?.message || `Could not load ${itemConfig.plural.toLowerCase()}.`);
        } finally {
            setLoading(false);
        }
    }, [type, itemConfig.plural, search]);

    useEffect(() => {
        let active = true;
        const params = { status: "all", page: 1, limit: PAGE_SIZE };
        if (search) params.search = search;
        api.get(`/${type}`, { params }).then((response) => {
            if (active) setItems(response.data.data?.items || []);
            if (active) setPagination(response.data.data?.pagination || { page: 1, total: 0, totalPages: 1 });
        }).catch((requestError) => {
            if (active) setError(requestError.response?.data?.message || `Could not load ${itemConfig.plural.toLowerCase()}.`);
        }).finally(() => {
            if (active) setLoading(false);
        });
        return () => { active = false; };
    }, [type, itemConfig.plural, search]);

    const removeItem = async (item) => {
        const confirmation = await Swal.fire({
            title: `Delete ${item.name}?`,
            text: "This will permanently remove the record from your catalog.",
            icon: "warning",
            showCancelButton: true,
            confirmButtonText: "Delete",
            cancelButtonText: "Keep item",
            reverseButtons: true,
            focusCancel: true,
            customClass: {
                popup: "admin-swal-popup",
                confirmButton: "admin-swal-danger",
                cancelButton: "admin-swal-cancel",
            },
            buttonsStyling: false,
        });

        if (!confirmation.isConfirmed) return;

        try {
            await api.delete(`/${type}/${item._id}`);
            const nextPage = items.length === 1 && pagination.page > 1
                ? pagination.page - 1
                : pagination.page;
            await loadItems(nextPage);

            await Swal.fire({
                toast: true,
                position: "top-end",
                icon: "success",
                title: `${itemConfig.singular} deleted`,
                showConfirmButton: false,
                timer: 2200,
                timerProgressBar: true,
            });
        } catch (requestError) {
            await Swal.fire({
                icon: "error",
                title: "Delete failed",
                text: requestError.response?.data?.message || `Could not delete ${itemConfig.singular.toLowerCase()}.`,
            });
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

                .button-primary {
                    color: #FFFFFF;
                    background: #0866F5;
                    border: 1px solid #0866F5;
                    border-radius: 8px;
                    transition: background 0.2s ease, border-color 0.2s ease;
                }

                .button-primary:hover {
                    color: #FFFFFF;
                    background: #101F43;
                    border-color: #101F43;
                }

                .notice-error {
                    color: #B42318;
                    background: #FEF3F2;
                    border-color: #FECDCA;
                }

                .table-toolbar {
                    background: #FFFFFF;
                    border: 1px solid #E2EAF5;
                    border-radius: 12px;
                }

                .catalog-search {
                    color: #0866F5;
                    background: #FFFFFF;
                    border: 1px solid #CBD5E1;
                    border-radius: 8px;
                }

                .catalog-search input {
                    color: #101F43;
                    background: transparent;
                    border: none;
                    outline: none;
                }

                .catalog-search input::placeholder {
                    color: #94A3B8;
                }

                .catalog-search:focus-within {
                    border-color: #0866F5;
                    box-shadow: 0 0 0 3px rgba(8, 102, 245, 0.12);
                }

                .search-clear {
                    color: #64748B;
                    background: transparent;
                    border: none;
                    cursor: pointer;
                }

                .search-clear:hover {
                    color: #0866F5;
                }

                .toolbar-meta {
                    color: #64748B;
                }

                .icon-button {
                    display: inline-flex;
                    align-items: center;
                    justify-content: center;
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
                    border-color: #0866F5;
                }

                .icon-button.danger-action {
                    color: #DC2626;
                    background: #FEF2F2;
                    border-color: #FECACA;
                }

                .icon-button.danger-action:hover {
                    color: #FFFFFF;
                    background: #DC2626;
                    border-color: #DC2626;
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
                    white-space: nowrap;
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

                .item-cell {
                    display: flex;
                    align-items: center;
                    gap: 12px;
                    min-width: 180px;
                }

                .item-cell strong {
                    color: #101F43;
                }

                .item-image {
                    width: 48px;
                    height: 48px;
                    flex-shrink: 0;
                    object-fit: cover;
                    border: 1px solid #E2EAF5;
                    border-radius: 8px;
                }

                .image-placeholder {
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    color: #0866F5;
                    background: #EDF5FF;
                    font-weight: 700;
                }

                .description-cell {
                    min-width: 180px;
                    max-width: 320px;
                    color: #64748B !important;
                    overflow-wrap: anywhere;
                }

                .muted {
                    color: #64748B;
                }

                .status-pill {
                    display: inline-flex;
                    align-items: center;
                    padding: 5px 10px;
                    border-radius: 20px;
                    font-size: 12px;
                    font-weight: 600;
                    text-transform: capitalize;
                }

                .status-active,
                .status-published,
                .status-success {
                    color: #166534;
                    background: #F0FDF4;
                    border: 1px solid #BBF7D0;
                }

                .status-inactive,
                .status-draft,
                .status-pending {
                    color: #92400E;
                    background: #FFFBEB;
                    border: 1px solid #FDE68A;
                }

                .actions-heading {
                    text-align: right !important;
                }

                .row-actions {
                    display: flex;
                    align-items: center;
                    justify-content: flex-end;
                    gap: 8px;
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

                .admin-swal-popup {
                    color: #101F43;
                    border-radius: 14px;
                }

                .admin-swal-danger {
                    color: #FFFFFF;
                    background: #DC2626;
                    border: none;
                    border-radius: 8px;
                    padding: 10px 18px;
                    margin: 0 5px;
                    cursor: pointer;
                }

                .admin-swal-cancel {
                    color: #101F43;
                    background: #EDF5FF;
                    border: 1px solid #D5E5FF;
                    border-radius: 8px;
                    padding: 10px 18px;
                    margin: 0 5px;
                    cursor: pointer;
                }

                @media (max-width: 768px) {
                    .table-toolbar {
                        gap: 12px;
                        flex-wrap: wrap;
                    }

                    .catalog-search {
                        flex: 1;
                        min-width: 0;
                    }

                    .toolbar-meta {
                        gap: 10px;
                    }
                }
            `}</style>

            <section className="page-section">
                <div className="page-heading">
                    <div>
                        <p className="eyebrow">Catalog</p>
                        <h1>{itemConfig.plural}</h1>
                        <p className="page-subtitle">
                            Manage the items shown in your public catalog.
                        </p>
                    </div>

                    <Link className="button button-primary" to={`/${type}/new`}>
                        <Plus size={17} />
                        Add {itemConfig.singular}
                    </Link>
                </div>

                {error && (
                    <div className="notice notice-error" role="alert">
                        {error}
                    </div>
                )}

                <div className="table-toolbar">
                    <label className="search-field catalog-search">
                        <Search size={16} />
                        <span className="sr-only">
                            Search {itemConfig.plural.toLowerCase()}
                        </span>
                        <input
                            type="search"
                            placeholder={`Search ${itemConfig.plural.toLowerCase()}`}
                            value={searchInput}
                            onChange={(event) => setSearchInput(event.target.value)}
                        />
                        {searchInput && (
                            <button
                                className="search-clear"
                                type="button"
                                onClick={() => setSearchInput("")}
                                aria-label="Clear search"
                            >
                                <X size={15} />
                            </button>
                        )}
                    </label>

                    <div className="toolbar-meta">
                        <span>
                            {pagination.total} {pagination.total === 1 ? "item" : "items"}
                        </span>
                        <button
                            className="icon-button"
                            type="button"
                            onClick={() => loadItems(pagination.page)}
                            aria-label="Refresh list"
                            title="Refresh"
                        >
                            <RefreshCw size={17} />
                        </button>
                    </div>
                </div>

                {loading ? (
                    <div className="table-state">
                        Loading {itemConfig.plural.toLowerCase()}…
                    </div>
                ) : items.length === 0 ? (
                    <div className="table-state">
                        <strong>No {itemConfig.plural.toLowerCase()} found</strong>
                        <span>
                            Add your first {itemConfig.singular.toLowerCase()} to get started.
                        </span>
                    </div>
                ) : (
                    <div className="table-wrap">
                        <table className="data-table">
                            <thead>
                                <tr>
                                    <th>{itemConfig.singular}</th>
                                    <th>Description</th>
                                    <th>Status</th>
                                    <th>Updated</th>
                                    <th className="actions-heading">Actions</th>
                                </tr>
                            </thead>

                            <tbody>
                                {items.map((item) => (
                                    <tr key={item._id}>
                                        <td>
                                            <div className="item-cell">
                                                {item.image ? (
                                                    <img
                                                        className="item-image"
                                                        src={resolveImageUrl(item.image)}
                                                        alt=""
                                                    />
                                                ) : (
                                                    <div className="item-image image-placeholder">
                                                        {item.name?.slice(0, 1)?.toUpperCase()}
                                                    </div>
                                                )}
                                                <strong>{item.name}</strong>
                                            </div>
                                        </td>

                                        <td className="description-cell">
                                            {item.description || (
                                                <span className="muted">No description</span>
                                            )}
                                        </td>

                                        <td>
                                            <span className={`status-pill status-${item.status}`}>
                                                {item.status}
                                            </span>
                                        </td>

                                        <td>
                                            {item.updatedAt
                                                ? new Date(item.updatedAt).toLocaleDateString()
                                                : "—"}
                                        </td>

                                        <td>
                                            <div className="row-actions">
                                                <Link
                                                    className="icon-button"
                                                    to={`/${type}/${item._id}/edit`}
                                                    aria-label={`Edit ${item.name}`}
                                                    title="Edit"
                                                >
                                                    <Edit2 size={17} />
                                                </Link>

                                                <button
                                                    className="icon-button danger-action"
                                                    type="button"
                                                    onClick={() => removeItem(item)}
                                                    aria-label={`Delete ${item.name}`}
                                                    title="Delete"
                                                >
                                                    <Trash2 size={17} />
                                                </button>
                                            </div>
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
                                onClick={() => loadItems(pagination.page - 1)}
                            >
                                Previous
                            </button>

                            <button
                                className="button button-secondary"
                                type="button"
                                disabled={pagination.page >= pagination.totalPages}
                                onClick={() => loadItems(pagination.page + 1)}
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

export default CatalogList;
