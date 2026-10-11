
import { useCallback, useEffect, useState } from "react";
import { Plus, RefreshCw, Trash2, UserRoundPen } from "lucide-react";
import Swal from "sweetalert2";
import api from "../api/axios";
import { useAuth } from "../context/useAuth";
import { ALL_PERMISSION_IDS, hasPermission, PERMISSIONS } from "../constants/permissions";

const makeEmptyForm = (admin) => ({
    name: "",
    email: "",
    password: "",
    isActive: true,
    permissions: PERMISSIONS.filter(({ id }) => hasPermission(admin, id)).slice(0, 1).map(({ id }) => id),
});

const StaffList = () => {
    const { admin: currentAdmin } = useAuth();
    const [staff, setStaff] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");
    const [form, setForm] = useState(() => makeEmptyForm(currentAdmin));
    const [editing, setEditing] = useState(null);
    const [saving, setSaving] = useState(false);

    const loadStaff = useCallback(async () => {
        setLoading(true);
        setError("");
        try {
            const { data } = await api.get("/admin/staff");
            setStaff(data.data || []);
        } catch (requestError) {
            setError(requestError.response?.data?.message || "Could not load staff members.");
        } finally {
            setLoading(false);
        }
    }, []);

    useEffect(() => {
        void Promise.resolve().then(() => loadStaff());
    }, [loadStaff]);

    const updateField = (event) => setForm((value) => ({
        ...value,
        [event.target.name]: event.target.name === "isActive"
            ? event.target.checked
            : event.target.value,
    }));

    const startEdit = (member) => {
        setEditing(member);
        setForm({
            name: member.name,
            email: member.email,
            password: "",
            isActive: member.isActive,
            permissions: member.permissions || ALL_PERMISSION_IDS,
        });
        setError("");
    };

    const cancelEdit = () => {
        setEditing(null);
        setForm(makeEmptyForm(currentAdmin));
        setError("");
    };

    const togglePermission = (permission) => setForm((value) => ({
        ...value,
        permissions: value.permissions.includes(permission)
            ? value.permissions.filter((item) => item !== permission)
            : [...value.permissions, permission],
    }));

    const canManageMember = (member) => (member.permissions || ALL_PERMISSION_IDS)
        .every((permission) => hasPermission(currentAdmin, permission));

    const saveStaff = async (event) => {
        event.preventDefault();
        setSaving(true);
        setError("");

        try {
            const payload = {
                ...form,
                name: form.name.trim(),
                email: form.email.trim().toLowerCase(),
            };

            if (editing && !payload.password) delete payload.password;

            if (editing) {
                await api.patch(`/admin/staff/${editing.id}`, payload);
            } else {
                await api.post("/admin/staff", payload);
            }

            cancelEdit();
            await loadStaff();
        } catch (requestError) {
            setError(requestError.response?.data?.message || "Could not save staff member.");
        } finally {
            setSaving(false);
        }
    };

    const removeStaff = async (member) => {
        const result = await Swal.fire({
            title: `Remove ${member.name}?`,
            text: "This staff account will no longer be able to sign in.",
            icon: "warning",
            showCancelButton: true,
            confirmButtonText: "Remove",
            cancelButtonText: "Cancel",
            reverseButtons: true,
            customClass: {
                popup: "admin-swal-popup",
                confirmButton: "admin-swal-danger",
                cancelButton: "admin-swal-cancel",
            },
            buttonsStyling: false,
        });

        if (!result.isConfirmed) return;

        try {
            await api.delete(`/admin/staff/${member.id}`);
            await loadStaff();
        } catch (requestError) {
            setError(requestError.response?.data?.message || "Could not remove staff member.");
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

                .staff-layout {
                    color: #101F43;
                }

                .staff-form {
                    background: #FFFFFF;
                    border: 1px solid #E2EAF5;
                    border-radius: 14px;
                }

                .staff-form-heading {
                    color: #101F43;
                }

                .staff-form-heading svg {
                    color: #0866F5;
                }

                .field {
                    color: #101F43;
                }

                .field input {
                    color: #101F43;
                    background: #FFFFFF;
                    border: 1px solid #CBD5E1;
                    border-radius: 8px;
                }

                .field input::placeholder {
                    color: #94A3B8;
                }

                .field input:focus {
                    outline: none;
                    border-color: #0866F5;
                    box-shadow: 0 0 0 3px rgba(8, 102, 245, 0.12);
                }

                .required-mark,
                .permission-error {
                    color: #DC2626;
                }

                .permission-fieldset {
                    border: 1px solid #D5E5FF;
                    border-radius: 10px;
                }

                .permission-fieldset legend {
                    color: #101F43;
                    font-weight: 600;
                }

                .permission-fieldset p {
                    color: #64748B;
                }

                .permission-option {
                    background: #FFFFFF;
                    border: 1px solid #E2EAF5;
                    border-radius: 8px;
                    transition: background 0.2s ease, border-color 0.2s ease;
                }

                .permission-option:hover {
                    background: #EDF5FF;
                    border-color: #0866F5;
                }

                .permission-option input,
                .checkbox-field input {
                    accent-color: #0866F5;
                }

                .permission-option strong {
                    color: #101F43;
                }

                .permission-option small {
                    color: #64748B;
                }

                .checkbox-field {
                    color: #101F43;
                }

                .staff-form-actions {
                    display: flex;
                    align-items: center;
                    gap: 10px;
                }

                .button-primary {
                    color: #FFFFFF;
                    background: #0866F5;
                    border: 1px solid #0866F5;
                    border-radius: 8px;
                    transition: background 0.2s ease;
                }

                .button-primary:hover:not(:disabled) {
                    background: #101F43;
                    border-color: #101F43;
                }

                .button-primary:disabled {
                    opacity: 0.55;
                    cursor: not-allowed;
                }

                .button-secondary {
                    color: #101F43;
                    background: #FFFFFF;
                    border: 1px solid #CBD5E1;
                    border-radius: 8px;
                }

                .button-secondary:hover:not(:disabled) {
                    color: #0866F5;
                    background: #EDF5FF;
                    border-color: #0866F5;
                }

                .table-toolbar {
                    background: #FFFFFF;
                    border: 1px solid #E2EAF5;
                    border-radius: 10px;
                }

                .toolbar-meta {
                    color: #64748B;
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

                .contact-person strong {
                    display: block;
                    color: #101F43;
                }

                .contact-person span {
                    display: block;
                    color: #64748B;
                    margin-top: 4px;
                }

                .staff-permission-tags {
                    display: flex;
                    flex-wrap: wrap;
                    gap: 6px;
                }

                .staff-permission-tags span {
                    display: inline-flex;
                    padding: 4px 8px;
                    color: #0866F5;
                    background: #EDF5FF;
                    border: 1px solid #D5E5FF;
                    border-radius: 20px;
                    font-size: 12px;
                }

                .status-pill {
                    display: inline-flex;
                    align-items: center;
                    padding: 5px 10px;
                    border-radius: 20px;
                    font-size: 12px;
                    font-weight: 600;
                }

                .status-active {
                    color: #15803D;
                    background: #F0FDF4;
                    border: 1px solid #BBF7D0;
                }

                .status-inactive {
                    color: #B91C1C;
                    background: #FEF2F2;
                    border: 1px solid #FECACA;
                }

                .row-actions {
                    display: flex;
                    align-items: center;
                    gap: 8px;
                }

                .actions-heading {
                    text-align: right !important;
                }

                .notice-error {
                    color: #B42318;
                    background: #FEF3F2;
                    border-color: #FECDCA;
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
                    .staff-layout {
                        grid-template-columns: 1fr;
                    }

                    .staff-form-actions {
                        flex-wrap: wrap;
                    }
                }
            `}</style>

            <section className="page-section">
                <div className="page-heading">
                    <div>
                        <p className="eyebrow">Access</p>
                        <h1>Staff</h1>
                        <p className="page-subtitle">
                            Add and manage people who can access the admin panel.
                        </p>
                    </div>
                </div>

                {error && (
                    <div className="notice notice-error" role="alert">
                        {error}
                    </div>
                )}

                <div className="staff-layout">
                    <form className="staff-form" onSubmit={saveStaff}>
                        <div className="staff-form-heading">
                            <UserRoundPen size={18} />
                            <strong>
                                {editing ? "Edit staff member" : "Add staff member"}
                            </strong>
                        </div>

                        <label className="field">
                            Name <span className="required-mark">*</span>
                            <input
                                name="name"
                                value={form.name}
                                onChange={updateField}
                                required
                                maxLength={120}
                            />
                        </label>

                        <label className="field">
                            Email <span className="required-mark">*</span>
                            <input
                                name="email"
                                type="email"
                                value={form.email}
                                onChange={updateField}
                                required
                                maxLength={254}
                            />
                        </label>

                        <label className="field">
                            {editing ? "New password" : "Password"}{" "}
                            <span className="required-mark">
                                {editing ? "(optional)" : "*"}
                            </span>
                            <input
                                name="password"
                                type="password"
                                value={form.password}
                                onChange={updateField}
                                required={!editing}
                                minLength={8}
                                placeholder={
                                    editing
                                        ? "Leave blank to keep current password"
                                        : "At least 8 characters"
                                }
                            />
                        </label>

                        <fieldset className="permission-fieldset">
                            <legend>
                                Page access <span className="required-mark">*</span>
                            </legend>

                            <p>Choose the pages this staff member can open.</p>

                            <div className="permission-options">
                                {PERMISSIONS.filter(({ id }) =>
                                    hasPermission(currentAdmin, id)
                                ).map(({ id, label, description }) => (
                                    <label className="permission-option" key={id}>
                                        <input
                                            type="checkbox"
                                            checked={form.permissions.includes(id)}
                                            onChange={() => togglePermission(id)}
                                        />

                                        <span>
                                            <strong>{label}</strong>
                                            <small>{description}</small>
                                        </span>
                                    </label>
                                ))}
                            </div>

                            {form.permissions.length === 0 && (
                                <span className="permission-error">
                                    Select at least one page.
                                </span>
                            )}
                        </fieldset>

                        {editing && editing.id !== currentAdmin?.id && (
                            <label className="checkbox-field">
                                <input
                                    name="isActive"
                                    type="checkbox"
                                    checked={form.isActive}
                                    onChange={updateField}
                                />
                                Account is active
                            </label>
                        )}

                        <div className="staff-form-actions">
                            {editing && (
                                <button
                                    className="button button-secondary"
                                    type="button"
                                    onClick={cancelEdit}
                                >
                                    Cancel
                                </button>
                            )}

                            <button
                                className="button button-primary"
                                disabled={saving || form.permissions.length === 0}
                                type="submit"
                            >
                                <Plus size={16} />
                                {saving
                                    ? "Saving…"
                                    : editing
                                        ? "Save changes"
                                        : "Add staff"}
                            </button>
                        </div>
                    </form>

                    <div>
                        <div className="table-toolbar">
                            <div className="toolbar-meta">
                                <span>
                                    {staff.length}{" "}
                                    {staff.length === 1 ? "member" : "members"}
                                </span>
                            </div>

                            <button
                                className="icon-button"
                                type="button"
                                onClick={loadStaff}
                                aria-label="Refresh staff"
                                title="Refresh"
                            >
                                <RefreshCw size={17} />
                            </button>
                        </div>

                        {loading ? (
                            <div className="table-state">Loading staff…</div>
                        ) : (
                            <div className="table-wrap">
                                <table className="data-table">
                                    <thead>
                                        <tr>
                                            <th>Staff member</th>
                                            <th>Page access</th>
                                            <th>Status</th>
                                            <th>Added</th>
                                            <th className="actions-heading">Actions</th>
                                        </tr>
                                    </thead>

                                    <tbody>
                                        {staff.length === 0 ? (
                                            <tr>
                                                <td colSpan="5">
                                                    <div className="table-state">
                                                        <strong>No staff accounts yet</strong>
                                                        <span>
                                                            Add a staff member using the form.
                                                        </span>
                                                    </div>
                                                </td>
                                            </tr>
                                        ) : (
                                            staff.map((member) => (
                                                <tr key={member.id}>
                                                    <td>
                                                        <div className="contact-person">
                                                            <strong>{member.name}</strong>
                                                            <span>{member.email}</span>
                                                        </div>
                                                    </td>

                                                    <td>
                                                        <div className="staff-permission-tags">
                                                            {(member.permissions || ALL_PERMISSION_IDS).map(
                                                                (permission) => (
                                                                    <span key={permission}>
                                                                        {PERMISSIONS.find(
                                                                            ({ id }) =>
                                                                                id === permission
                                                                        )?.label || permission}
                                                                    </span>
                                                                )
                                                            )}
                                                        </div>
                                                    </td>

                                                    <td>
                                                        <span
                                                            className={`status-pill status-${
                                                                member.isActive
                                                                    ? "active"
                                                                    : "inactive"
                                                            }`}
                                                        >
                                                            {member.isActive
                                                                ? "Active"
                                                                : "Inactive"}
                                                        </span>
                                                    </td>

                                                    <td>
                                                        {member.createdAt
                                                            ? new Date(
                                                                  member.createdAt
                                                              ).toLocaleDateString()
                                                            : "—"}
                                                    </td>

                                                    <td>
                                                        <div className="row-actions">
                                                            {canManageMember(member) && (
                                                                <button
                                                                    className="icon-button"
                                                                    onClick={() =>
                                                                        startEdit(member)
                                                                    }
                                                                    type="button"
                                                                    title="Edit"
                                                                    aria-label={`Edit ${member.name}`}
                                                                >
                                                                    <UserRoundPen size={16} />
                                                                </button>
                                                            )}

                                                            {member.id !== currentAdmin?.id &&
                                                                canManageMember(member) && (
                                                                    <button
                                                                        className="icon-button danger-action"
                                                                        onClick={() =>
                                                                            removeStaff(member)
                                                                        }
                                                                        type="button"
                                                                        title="Remove"
                                                                        aria-label={`Remove ${member.name}`}
                                                                    >
                                                                        <Trash2 size={16} />
                                                                    </button>
                                                                )}
                                                        </div>
                                                    </td>
                                                </tr>
                                            ))
                                        )}
                                    </tbody>
                                </table>
                            </div>
                        )}
                    </div>
                </div>
            </section>
        </>
    );
};

export default StaffList;
