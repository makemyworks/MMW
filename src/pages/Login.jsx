
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../api/axios";
import { useAuth } from "../context/useAuth";
import { getFirstPermittedPath } from "../constants/permissions";
import {
    ArrowRight,
    LockKeyhole,
    ShieldCheck,
    Mail,
    Eye,
    EyeOff,
} from "lucide-react";

const Login = () => {
    const navigate = useNavigate();
    const { login } = useAuth();

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");
    const [showPassword, setShowPassword] = useState(false);

    // Existing login API and authentication logic preserved
    const handleSubmit = async (e) => {
        e.preventDefault();

        setError("");
        setLoading(true);

        try {
            const response = await api.post("/admin/login", {
                email: email.trim().toLowerCase(),
                password,
            });

            if (
                !response.data?.status ||
                !response.data?.data?.token ||
                !response.data?.data?.admin
            ) {
                throw new Error(
                    response.data?.message ||
                    "The server returned an invalid login response."
                );
            }

            login(
                response.data.data.admin,
                response.data.data.token
            );

            navigate(
                getFirstPermittedPath(response.data.data.admin),
                { replace: true }
            );
        } catch (requestError) {
            setError(
                requestError.response?.data?.message ||
                (requestError.request
                    ? "Could not reach the admin server. Check your connection and try again."
                    : requestError.message || "Login failed. Please try again.")
            );
        } finally {
            setLoading(false);
        }
    };

    const logoSrc = `${import.meta.env.BASE_URL}images/logo.png`;

    return (
        <>
            <style>{`
                .mmw-login {
                    --mmw-navy: #10264c;
                    --mmw-blue: #0878f9;
                    --mmw-muted: #64748b;

                    min-height: 100vh;
                    display: grid;
                    grid-template-columns: 1.08fr .92fr;
                    background: #fff;
                    color: var(--mmw-navy);
                    font-family: Inter, "Segoe UI", Arial, sans-serif;
                }

                .mmw-login * {
                    box-sizing: border-box;
                }

                /* Left branding section */
                .mmw-brand-panel {
                    position: relative;
                    isolation: isolate;
                    overflow: hidden;
                    display: flex;
                    flex-direction: column;
                    min-height: 100vh;
                    padding: 38px clamp(28px, 5.5vw, 90px) 35px;
                    background:
                        radial-gradient(
                            ellipse at 95% 85%,
                            #c8e3ff 0%,
                            transparent 38%
                        ),
                        linear-gradient(140deg, #f9fbff, #edf5ff);
                }

                .mmw-brand {
                    position: relative;
                    z-index: 2;
                    display: inline-flex;
                    align-items: center;
                    gap: 13px;
                    width: fit-content;
                    max-width: 100%;
                    text-decoration: none;
                }

                .mmw-brand-symbol {
                    display: block;
                    flex-shrink: 0;
                    width: 82px;
                    height: 58px;
                    object-fit: contain;
                    object-position: center;
                }

                .mmw-brand-text {
                    display: flex;
                    flex-direction: column;
                    gap: 4px;
                }

                .mmw-brand-text strong {
                    color: #10264c;
                    font-size: clamp(19px, 1.8vw, 25px);
                    line-height: 1.15;
                    font-weight: 850;
                    letter-spacing: -0.8px;
                    white-space: nowrap;
                }

                .mmw-brand-text small {
                    color: #7889a3;
                    font-size: 11px;
                    font-weight: 750;
                    letter-spacing: 1.5px;
                    white-space: nowrap;
                }

                .mmw-brand-content {
                    position: relative;
                    z-index: 2;
                    max-width: 680px;
                    margin-top: clamp(65px, 10vh, 105px);
                }

                .mmw-kicker {
                    display: flex;
                    align-items: center;
                    gap: 10px;
                    margin-bottom: 25px;
                    color: var(--mmw-blue);
                    font-size: 11px;
                    font-weight: 800;
                    letter-spacing: 2px;
                }

                .mmw-brand-content h2 {
                    margin: 0;
                    color: var(--mmw-navy);
                    font-size: clamp(38px, 4.2vw, 64px);
                    line-height: 1.1;
                    letter-spacing: -2px;
                    font-weight: 800;
                }

                .mmw-brand-content h2 span {
                    display: block;
                    color: var(--mmw-blue);
                }

                .mmw-description {
                    max-width: 490px;
                    margin: 23px 0 30px;
                    color: var(--mmw-muted);
                    font-size: 15px;
                    line-height: 1.8;
                }

                .mmw-brand-footer {
                    position: relative;
                    z-index: 2;
                    margin-top: auto;
                    padding-top: 30px;
                    color: #536b8c;
                    font-size: 13px;
                }

                .mmw-footer-line {
                    display: block;
                    width: 24px;
                    height: 4px;
                    margin-bottom: 12px;
                    border-radius: 8px;
                    background: var(--mmw-blue);
                }

                .mmw-decoration {
                    position: absolute;
                    z-index: 0;
                    pointer-events: none;
                    border-radius: 50%;
                }

                .mmw-decoration-one {
                    width: 300px;
                    height: 300px;
                    right: -180px;
                    top: 28%;
                    border: 1px solid #b7d9ff;
                    box-shadow:
                        0 0 0 40px #0878f906,
                        0 0 0 80px #0878f906;
                }

                .mmw-decoration-two {
                    width: 240px;
                    height: 240px;
                    left: -165px;
                    bottom: -160px;
                    background: linear-gradient(
                        145deg,
                        #c4e1ff,
                        #eaf4ff
                    );
                }

                /* Right login section */
                .mmw-form-panel {
                    min-height: 100vh;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    padding: 45px clamp(24px, 5vw, 80px);
                    background: #fff;
                }

                .mmw-login-box {
                    width: 100%;
                    max-width: 470px;
                    animation: mmw-login-enter .45s ease both;
                }

                .mmw-mobile-logo {
                    display: none;
                }

                .mmw-login-icon {
                    width: 54px;
                    height: 54px;
                    display: grid;
                    place-items: center;
                    margin-bottom: 25px;
                    border: 1px solid #d9eaff;
                    border-radius: 16px;
                    background: #eff6ff;
                    color: var(--mmw-blue);
                }

                .mmw-eyebrow {
                    margin: 0 0 12px;
                    color: var(--mmw-blue);
                    font-size: 11px;
                    font-weight: 800;
                    letter-spacing: 2px;
                }

                .mmw-login-box h1 {
                    margin: 0;
                    color: var(--mmw-navy);
                    font-size: clamp(30px, 3vw, 39px);
                    font-weight: 800;
                    letter-spacing: -1.3px;
                }

                .mmw-subtitle {
                    margin: 12px 0 32px;
                    color: var(--mmw-muted);
                    font-size: 14px;
                    line-height: 1.7;
                }

                .mmw-form {
                    display: flex;
                    flex-direction: column;
                    gap: 22px;
                }

                .mmw-field {
                    display: flex;
                    flex-direction: column;
                    gap: 10px;
                    color: var(--mmw-navy);
                    font-size: 13px;
                    font-weight: 700;
                }

                .mmw-input-wrap {
                    min-height: 55px;
                    display: flex;
                    align-items: center;
                    gap: 12px;
                    padding: 0 15px;
                    border: 1px solid #dce5f0;
                    border-radius: 10px;
                    background: #fff;
                    color: #637995;
                    transition: border-color .2s, box-shadow .2s;
                }

                .mmw-input-wrap:focus-within {
                    border-color: var(--mmw-blue);
                    box-shadow: 0 0 0 4px #0878f914;
                }

                .mmw-input-wrap input {
                    width: 100%;
                    min-width: 0;
                    height: 52px;
                    padding: 0;
                    border: 0;
                    outline: none;
                    background: transparent;
                    color: var(--mmw-navy);
                    font: inherit;
                    font-size: 14px;
                }

                .mmw-input-wrap input::placeholder {
                    color: #94a3b8;
                }

                .mmw-password-toggle {
                    display: grid;
                    place-items: center;
                    flex-shrink: 0;
                    padding: 6px;
                    border: 0;
                    background: transparent;
                    color: #637995;
                    cursor: pointer;
                }

                .mmw-password-toggle:hover {
                    color: var(--mmw-blue);
                }

                .mmw-submit {
                    min-height: 55px;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    gap: 12px;
                    margin-top: 3px;
                    border: 0;
                    border-radius: 10px;
                    background: linear-gradient(
                        100deg,
                        #0878f9,
                        #0868e8
                    );
                    box-shadow: 0 9px 20px #0878f925;
                    color: #fff;
                    font-size: 14px;
                    font-weight: 750;
                    cursor: pointer;
                    transition: transform .2s, box-shadow .2s;
                }

                .mmw-submit:hover:not(:disabled) {
                    transform: translateY(-2px);
                    box-shadow: 0 13px 25px #0878f935;
                }

                .mmw-submit:disabled {
                    opacity: .7;
                    cursor: wait;
                }

                .mmw-error {
                    margin-bottom: 20px;
                    padding: 13px 15px;
                    border: 1px solid #fecaca;
                    border-radius: 10px;
                    background: #fff1f2;
                    color: #b91c1c;
                    font-size: 13px;
                    line-height: 1.6;
                }

                .mmw-form-footer {
                    margin-top: 30px;
                    padding-top: 21px;
                    border-top: 1px solid #e8edf4;
                    color: #7b8ba3;
                    font-size: 12px;
                    line-height: 1.7;
                    text-align: center;
                }

                @keyframes mmw-login-enter {
                    from {
                        opacity: 0;
                        transform: translateY(10px);
                    }

                    to {
                        opacity: 1;
                        transform: translateY(0);
                    }
                }

                @media (max-width: 1050px) {
                    .mmw-brand-panel {
                        padding: 32px;
                    }

                    .mmw-form-panel {
                        padding: 32px;
                    }

                    .mmw-brand-symbol {
                        width: 68px;
                        height: 50px;
                    }

                    .mmw-brand-text strong {
                        font-size: 19px;
                    }

                    .mmw-brand-text small {
                        font-size: 9px;
                        letter-spacing: 1.2px;
                    }

                    .mmw-brand-content h2 {
                        font-size: clamp(35px, 4.5vw, 49px);
                        letter-spacing: -1.5px;
                    }
                }

                @media (max-width: 760px) {
                    .mmw-login {
                        grid-template-columns: 1fr;
                    }

                    .mmw-brand-panel {
                        min-height: auto;
                        padding: 25px 24px 30px;
                    }

                    .mmw-brand-symbol {
                        width: 62px;
                        height: 46px;
                    }

                    .mmw-brand-text strong {
                        font-size: 19px;
                    }

                    .mmw-brand-text small {
                        font-size: 9px;
                        letter-spacing: 1px;
                    }

                    .mmw-brand-content {
                        margin-top: 45px;
                    }

                    .mmw-brand-content h2 {
                        font-size: clamp(36px, 9vw, 50px);
                        letter-spacing: -1.5px;
                    }

                    .mmw-description {
                        font-size: 14px;
                    }

                    .mmw-brand-footer {
                        margin-top: 28px;
                    }

                    .mmw-form-panel {
                        min-height: auto;
                        padding: 40px 24px 32px;
                    }

                    .mmw-login-box {
                        max-width: 520px;
                    }

                    .mmw-login-icon {
                        margin-bottom: 22px;
                    }
                }

                @media (max-width: 380px) {
                    .mmw-brand-panel,
                    .mmw-form-panel {
                        padding-left: 18px;
                        padding-right: 18px;
                    }

                    .mmw-brand {
                        gap: 9px;
                    }

                    .mmw-brand-symbol {
                        width: 52px;
                        height: 40px;
                    }

                    .mmw-brand-text strong {
                        font-size: 17px;
                    }

                    .mmw-brand-text small {
                        font-size: 8px;
                        letter-spacing: .8px;
                    }

                    .mmw-brand-content h2 {
                        font-size: 34px;
                    }
                }

                @media (prefers-reduced-motion: reduce) {
                    .mmw-login-box {
                        animation: none;
                    }

                    .mmw-submit {
                        transition: none;
                    }
                }
            `}</style>

            <main className="mmw-login">
                <section className="mmw-brand-panel">
                    <a
                        className="mmw-brand"
                        href={`${import.meta.env.BASE_URL}`}
                        aria-label="Make My Works home"
                    >
                        <img
                            className="mmw-brand-symbol"
                            src={logoSrc}
                            alt="MMW"
                        />

                        <span className="mmw-brand-text">
                            <strong>Make My Works</strong>
                            <small>WE MAKE YOU GROW</small>
                        </span>
                    </a>

                    <div className="mmw-brand-content">
                        <div className="mmw-kicker">
                            <ShieldCheck size={16} />
                            <span>ALL IN ONE PLATFORM</span>
                        </div>

                        <h2>
                            Manage Your Business
                            <span>Effortlessly.</span>
                        </h2>

                        <p className="mmw-description">
                            Control your catalog, enquiries, staff access and
                            business activities — all from one secure workspace.
                        </p>
                    </div>

                    <div className="mmw-brand-footer">
                        <span className="mmw-footer-line" />
                        A smarter way to manage your business.
                    </div>

                    <div className="mmw-decoration mmw-decoration-one" />
                    <div className="mmw-decoration mmw-decoration-two" />
                </section>

                <section className="mmw-form-panel">
                    <div className="mmw-login-box">
                        <div className="mmw-mobile-logo">
                            <a
                                className="mmw-brand"
                                href={`${import.meta.env.BASE_URL}`}
                                aria-label="Make My Works home"
                            >
                                <img
                                    className="mmw-brand-symbol"
                                    src={logoSrc}
                                    alt="MMW"
                                />

                                <span className="mmw-brand-text">
                                    <strong>Make My Works</strong>
                                    <small>WE MAKE YOU GROW</small>
                                </span>
                            </a>
                        </div>

                        <div className="mmw-login-icon">
                            <LockKeyhole size={23} />
                        </div>

                        <p className="mmw-eyebrow">MAKE MY WORKS</p>
                        <h1>Welcome back</h1>

                        <p className="mmw-subtitle">
                            Sign in to continue to your admin workspace.
                        </p>

                        {error && (
                            <div className="mmw-error" role="alert">
                                {error}
                            </div>
                        )}

                        <form className="mmw-form" onSubmit={handleSubmit}>
                            <label className="mmw-field">
                                Email address

                                <span className="mmw-input-wrap">
                                    <Mail size={18} />

                                    <input
                                        type="email"
                                        placeholder="you@example.com"
                                        autoComplete="username"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        required
                                    />
                                </span>
                            </label>

                            <label className="mmw-field">
                                Password

                                <span className="mmw-input-wrap">
                                    <LockKeyhole size={18} />

                                    <input
                                        type={showPassword ? "text" : "password"}
                                        placeholder="Enter your password"
                                        autoComplete="current-password"
                                        value={password}
                                        onChange={(e) => setPassword(e.target.value)}
                                        required
                                    />

                                    <button
                                        type="button"
                                        className="mmw-password-toggle"
                                        onClick={() => setShowPassword(!showPassword)}
                                        aria-label={
                                            showPassword
                                                ? "Hide password"
                                                : "Show password"
                                        }
                                    >
                                        {showPassword
                                            ? <EyeOff size={19} />
                                            : <Eye size={19} />}
                                    </button>
                                </span>
                            </label>

                            <button
                                className="mmw-submit"
                                type="submit"
                                disabled={loading}
                            >
                                {loading ? (
                                    "Signing in..."
                                ) : (
                                    <>
                                        Sign in
                                        <ArrowRight size={19} />
                                    </>
                                )}
                            </button>
                        </form>

                        <div className="mmw-form-footer">
                            © {new Date().getFullYear()} Make My Works.
                            All rights reserved.
                        </div>
                    </div>
                </section>
            </main>
        </>
    );
};

export default Login;
