
import { useEffect, useState } from "react";
import { ArrowLeft, ImagePlus, Save, X } from "lucide-react";
import { Link, useNavigate, useParams } from "react-router-dom";
import api from "../api/axios";
import { resolveImageUrl } from "../utils/imageUrl";

const definitions = {
    products: { singular: "Product", collection: "products" },
    services: { singular: "Service", collection: "services" },
};

const emptyForm = { name: "", description: "", image: "", status: "active" };

const CatalogForm = ({ type }) => {
    const definition = definitions[type];
    const { id } = useParams();
    const navigate = useNavigate();
    const isEditing = Boolean(id);
    const [form, setForm] = useState(emptyForm);
    const [selectedFile, setSelectedFile] = useState(null);
    const [preview, setPreview] = useState("");
    const [loading, setLoading] = useState(isEditing);
    const [saving, setSaving] = useState(false);
    const [error, setError] = useState("");

    useEffect(() => {
        if (!id) return;
        let active = true;
        api.get(`/${definition.collection}/${id}?status=all`).then(({ data }) => {
            if (active) setForm({ ...emptyForm, ...data.data });
        }).catch((requestError) => {
            if (active) setError(requestError.response?.data?.message || `Could not load this ${definition.singular.toLowerCase()}.`);
        }).finally(() => { if (active) setLoading(false); });
        return () => { active = false; };
    }, [definition.collection, definition.singular, id]);

    useEffect(() => () => {
        if (preview.startsWith("blob:")) URL.revokeObjectURL(preview);
    }, [preview]);

    const updateField = (event) => setForm((current) => ({ ...current, [event.target.name]: event.target.value }));

    const chooseImage = (event) => {
        const file = event.target.files?.[0];
        event.target.value = "";
        if (!file) return;
        setSelectedFile(file);
        setPreview(URL.createObjectURL(file));
    };

    const removeImage = () => {
        setSelectedFile(null);
        setPreview("");
        setForm((current) => ({ ...current, image: "" }));
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        setSaving(true);
        setError("");
        try {
            let image = form.image || "";
            if (selectedFile) {
                const upload = new FormData();
                upload.append("image", selectedFile);
                const uploaded = await api.post("/uploads/catalog", upload);
                image = uploaded.data.data.image;
            }

            const payload = { name: form.name.trim(), description: form.description.trim(), image };
            if (isEditing) payload.status = form.status;
            if (isEditing) await api.patch(`/${definition.collection}/${id}`, payload);
            else await api.post(`/${definition.collection}`, payload);
            navigate(`/${definition.collection}`);
        } catch (requestError) {
            setError(requestError.response?.data?.message || `Could not save this ${definition.singular.toLowerCase()}.`);
        } finally {
            setSaving(false);
        }
    };

    const imagePreview = preview || resolveImageUrl(form.image);

    return (
        <section className="page-section form-page catalog-form-theme">
            <style>{`
                .catalog-form-theme {
                    color: #101F43;
                }

                .catalog-form-theme .back-link {
                    display: inline-flex;
                    align-items: center;
                    gap: 8px;
                    color: #64748B;
                    text-decoration: none;
                    font-weight: 500;
                    transition: color 0.2s ease;
                }

                .catalog-form-theme .back-link:hover {
                    color: #0866F5;
                }

                .catalog-form-theme .eyebrow {
                    color: #0866F5;
                    font-weight: 700;
                    letter-spacing: 0.08em;
                    text-transform: uppercase;
                }

                .catalog-form-theme .page-heading h1 {
                    color: #101F43;
                }

                .catalog-form-theme .page-subtitle {
                    color: #64748B;
                }

                .catalog-form-theme .editor-form {
                    background: #FFFFFF;
                    border: 1px solid #E2EAF5;
                    border-radius: 16px;
                    padding: 28px;
                    box-shadow: 0 8px 28px rgba(16, 31, 67, 0.05);
                }

                .catalog-form-theme .field {
                    color: #101F43;
                    font-weight: 600;
                    gap: 9px;
                }

                .catalog-form-theme .required-mark {
                    color: #0866F5;
                }

                .catalog-form-theme .field input:not([type="file"]),
                .catalog-form-theme .field textarea,
                .catalog-form-theme .field select {
                    width: 100%;
                    color: #101F43;
                    background: #FFFFFF;
                    border: 1px solid #D9E3F0;
                    border-radius: 9px;
                    padding: 12px 14px;
                    outline: none;
                    transition: border-color 0.2s ease, box-shadow 0.2s ease;
                }

                .catalog-form-theme .field input:focus,
                .catalog-form-theme .field textarea:focus,
                .catalog-form-theme .field select:focus {
                    border-color: #0866F5;
                    box-shadow: 0 0 0 3px rgba(8, 102, 245, 0.12);
                }

                .catalog-form-theme .upload-control {
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    justify-content: center;
                    gap: 10px;
                    padding: 30px 20px;
                    border: 1.5px dashed #B8CFF2;
                    border-radius: 12px;
                    background: #EDF5FF;
                    color: #0866F5;
                    cursor: pointer;
                    text-align: center;
                    transition: background 0.2s ease, border-color 0.2s ease;
                }

                .catalog-form-theme .upload-control:hover {
                    background: #E2EEFF;
                    border-color: #0866F5;
                }

                .catalog-form-theme .upload-control span {
                    color: #101F43;
                    font-weight: 600;
                }

                .catalog-form-theme .upload-control .upload-hint {
                    color: #64748B;
                    font-size: 12px;
                    font-weight: 400;
                }

                .catalog-form-theme .upload-control input[type="file"] {
                    max-width: 100%;
                    color: #64748B;
                    font-size: 12px;
                }

                .catalog-form-theme .image-preview {
                    display: flex;
                    align-items: flex-start;
                    gap: 12px;
                    margin-top: 16px;
                    padding: 12px;
                    border: 1px solid #E2EAF5;
                    border-radius: 12px;
                    background: #F8FAFF;
                }

                .catalog-form-theme .image-preview img {
                    width: 150px;
                    height: 120px;
                    object-fit: cover;
                    border-radius: 8px;
                    border: 1px solid #E2EAF5;
                }

                .catalog-form-theme .form-actions {
                    display: flex;
                    justify-content: flex-end;
                    align-items: center;
                    gap: 12px;
                    margin-top: 28px;
                    padding-top: 22px;
                    border-top: 1px solid #E2EAF5;
                }

                .catalog-form-theme .button-primary {
                    background: #0866F5;
                    border: 1px solid #0866F5;
                    color: #FFFFFF;
                    transition: background 0.2s ease, transform 0.2s ease;
                }

                .catalog-form-theme .button-primary:hover:not(:disabled) {
                    background: #0754CC;
                    border-color: #0754CC;
                    transform: translateY(-1px);
                }

                .catalog-form-theme .button-primary:disabled {
                    opacity: 0.65;
                    cursor: not-allowed;
                }

                .catalog-form-theme .button-secondary {
                    background: #FFFFFF;
                    color: #101F43;
                    border: 1px solid #D9E3F0;
                }

                .catalog-form-theme .button-secondary:hover:not(:disabled) {
                    background: #EDF5FF;
                    border-color: #B8CFF2;
                }

                .catalog-form-theme .icon-button {
                    color: #0866F5;
                    background: #EDF5FF;
                    border: 1px solid #D8E7FF;
                    border-radius: 8px;
                    transition: background 0.2s ease, color 0.2s ease;
                }

                .catalog-form-theme .icon-button:hover {
                    background: #DCEAFF;
                }

                .catalog-form-theme .icon-button.danger-action {
                    color: #DC2626;
                    background: #FEF2F2;
                    border-color: #FECACA;
                }

                .catalog-form-theme .icon-button.danger-action:hover {
                    background: #FEE2E2;
                }

                .catalog-form-theme .notice-error {
                    color: #B91C1C;
                    background: #FEF2F2;
                    border: 1px solid #FECACA;
                    border-radius: 10px;
                }

                .catalog-form-theme .table-state {
                    color: #64748B;
                    background: #FFFFFF;
                    border: 1px solid #E2EAF5;
                    border-radius: 12px;
                    padding: 28px;
                }

                @media (max-width: 640px) {
                    .catalog-form-theme .editor-form {
                        padding: 18px;
                    }

                    .catalog-form-theme .form-actions {
                        flex-wrap: wrap;
                    }

                    .catalog-form-theme .form-actions > * {
                        flex: 1;
                        justify-content: center;
                    }

                    .catalog-form-theme .image-preview img {
                        width: 120px;
                        height: 100px;
                    }
                }
            `}</style>

            <Link className="back-link" to={`/${definition.collection}`}>
                <ArrowLeft size={17} /> Back to {definition.collection}
            </Link>

            <div className="page-heading form-heading">
                <div>
                    <p className="eyebrow">{definition.singular} catalog</p>
                    <h1>{isEditing ? `Edit ${definition.singular}` : `Add ${definition.singular}`}</h1>
                    <p className="page-subtitle">Add clear details and a product image for your catalog.</p>
                </div>
            </div>

            {error && <div className="notice notice-error" role="alert">{error}</div>}

            {loading ? (
                <div className="table-state">Loading {definition.singular.toLowerCase()}…</div>
            ) : (
                <form className="editor-form" onSubmit={handleSubmit}>
                    <div className="form-grid">
                        <label className="field field-wide">
                            Name <span className="required-mark">*</span>
                            <input
                                name="name"
                                value={form.name}
                                onChange={updateField}
                                required
                                maxLength={120}
                                autoFocus
                            />
                        </label>

                        <label className="field field-wide">
                            Description
                            <textarea
                                name="description"
                                value={form.description || ""}
                                onChange={updateField}
                                rows={5}
                                maxLength={5000}
                            />
                        </label>

                        <div className="field field-wide">
                            <span>Image</span>
                            <label className="upload-control">
                                <ImagePlus size={20} />
                                <span>{selectedFile ? selectedFile.name : "Choose an image"}</span>
                                <span className="upload-hint">JPEG, PNG, WebP or AVIF · up to 5 MB</span>
                                <input
                                    type="file"
                                    accept="image/jpeg,image/png,image/webp,image/avif"
                                    onChange={chooseImage}
                                />
                            </label>

                            {imagePreview && (
                                <div className="image-preview">
                                    <img src={imagePreview} alt="Selected catalog item" />
                                    <button
                                        className="icon-button danger-action"
                                        type="button"
                                        onClick={removeImage}
                                        aria-label="Remove image"
                                        title="Remove image"
                                    >
                                        <X size={17} />
                                    </button>
                                </div>
                            )}
                        </div>

                        {isEditing && (
                            <label className="field">
                                Status
                                <select name="status" value={form.status} onChange={updateField}>
                                    <option value="active">Active</option>
                                    <option value="inactive">Inactive</option>
                                </select>
                            </label>
                        )}
                    </div>

                    <div className="form-actions">
                        <Link className="button button-secondary" to={`/${definition.collection}`}>
                            Cancel
                        </Link>
                        <button className="button button-primary" type="submit" disabled={saving}>
                            <Save size={17} />
                            {saving ? "Saving…" : isEditing ? "Save changes" : `Add ${definition.singular}`}
                        </button>
                    </div>
                </form>
            )}
        </section>
    );
};

export default CatalogForm;
