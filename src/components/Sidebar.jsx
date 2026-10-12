
import {
    LayoutDashboard,
    Package,
    Briefcase,
    MessageSquare,
    UsersRound,
    ScrollText,
    ChartNoAxesCombined
} from "lucide-react";

import { NavLink } from "react-router-dom";
import { useAuth } from "../context/useAuth";
import { hasPermission } from "../constants/permissions";

const Sidebar = () => {
    const { admin } = useAuth();

    const items = [
        {
            to: "/dashboard",
            label: "Dashboard",
            permission: "dashboard",
            icon: LayoutDashboard
        },
        {
            to: "/analytics",
            label: "Analytics",
            permission: "analytics",
            icon: ChartNoAxesCombined
        },
        {
            to: "/products",
            label: "Products",
            permission: "products",
            icon: Package
        },
        {
            to: "/services",
            label: "Services",
            permission: "services",
            icon: Briefcase
        },
        {
            to: "/contacts",
            label: "Contacts",
            permission: "contacts",
            icon: MessageSquare
        },
        {
            to: "/staff",
            label: "Staff & access",
            permission: "staff",
            icon: UsersRound
        },
        {
            to: "/activity-log",
            label: "Activity log",
            permission: "activity-log",
            icon: ScrollText
        }
    ];

    return (
        <>
            <style>{`
                .sidebar {
                    --mmw-navy: #101f43;
                    --mmw-blue: #0866f5;
                    --mmw-light-blue: #edf5ff;
                    --mmw-text: #d2dced;
                    --mmw-muted: #a9b9d4;
                    --mmw-border: #2a3a5c;

                    display: flex;
                    flex-direction: column;
                    background: var(--mmw-navy);
                    color: #ffffff;
                    border-right: 1px solid var(--mmw-border);
                }

                /* Brand */
                .sidebar .sidebar-brand {
                    display: flex;
                    align-items: center;
                    gap: 12px;
                    padding: 22px 20px;
                    color: #ffffff;
                    text-decoration: none;
                }

                .sidebar .brand-mark {
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    width: 42px;
                    height: 42px;
                    flex-shrink: 0;
                    border-radius: 11px;
                    background: var(--mmw-light-blue);
                    color: var(--mmw-blue);
                    font-size: 15px;
                    font-weight: 800;
                    letter-spacing: -0.5px;
                    border: 1px solid #dceaff;
                }

                .sidebar .brand-copy {
                    display: flex;
                    flex-direction: column;
                    gap: 4px;
                }

                .sidebar .brand-copy strong {
                    color: #ffffff;
                    font-size: 15px;
                    font-weight: 800;
                    letter-spacing: -0.4px;
                }

                .sidebar .brand-copy small {
                    color: #a9c0e8;
                    font-size: 9px;
                    font-weight: 700;
                    letter-spacing: 1.4px;
                }

                /* Section label */
                .sidebar .sidebar-section-label {
                    padding: 20px 20px 10px;
                    color: #a9b9d4;
                    font-size: 10px;
                    font-weight: 700;
                    letter-spacing: 1.5px;
                }

                /* Navigation */
                .sidebar nav {
                    display: flex;
                    flex-direction: column;
                    gap: 5px;
                    padding: 8px 12px;
                }

                .sidebar nav a {
                    display: flex;
                    align-items: center;
                    gap: 12px;
                    min-height: 44px;
                    padding: 0 13px;
                    border: 1px solid transparent;
                    border-radius: 9px;
                    background: transparent;
                    color: var(--mmw-text);
                    font-size: 13px;
                    font-weight: 500;
                    text-decoration: none;
                    transition:
                        background 0.2s ease,
                        color 0.2s ease,
                        border-color 0.2s ease;
                }

                .sidebar nav a svg {
                    flex-shrink: 0;
                    color: var(--mmw-muted);
                    transition: color 0.2s ease;
                }

                /* Hover */
                .sidebar nav a:hover {
                    background: #20365e;
                    color: #ffffff;
                    border-color: #304b78;
                }

                .sidebar nav a:hover svg {
                    color: #69a2ff;
                }

                /* Active menu */
                .sidebar nav a.active {
                    background: var(--mmw-light-blue);
                    color: var(--mmw-blue);
                    border-color: #dceaff;
                    font-weight: 700;
                }

                .sidebar nav a.active svg {
                    color: var(--mmw-blue);
                }

                /* Bottom status */
                .sidebar .sidebar-bottom {
                    display: flex;
                    align-items: center;
                    gap: 9px;
                    margin-top: auto;
                    padding: 18px 20px;
                    border-top: 1px solid var(--mmw-border);
                    color: #c2cee2;
                    font-size: 11px;
                }

                .sidebar .sidebar-status-dot {
                    width: 8px;
                    height: 8px;
                    flex-shrink: 0;
                    border-radius: 50%;
                    background: #65d6a0;
                    box-shadow: 0 0 0 3px #203e50;
                }
            `}</style>

            <aside className="sidebar">
                <NavLink
                    to="/dashboard"
                    className="sidebar-brand"
                    aria-label="Make My Works admin home"
                >
                    <span className="brand-mark">MW</span>

                    <span className="brand-copy">
                        <strong>Make My Works</strong>
                        <small>WE MAKE YOU GROW</small>
                    </span>
                </NavLink>

                <div className="sidebar-section-label">
                    WORKSPACE
                </div>

                <nav aria-label="Main navigation">
                    {items
                        .filter(({ permission }) =>
                            hasPermission(admin, permission)
                        )
                        .map(({ to, label, icon: Icon }) => (
                            <NavLink
                                key={to}
                                to={to}
                                end={to === "/dashboard"}
                                className={({ isActive }) =>
                                    isActive ? "active" : ""
                                }
                            >
                                <Icon size={18} strokeWidth={1.8} />
                                <span>{label}</span>
                            </NavLink>
                        ))}
                </nav>

                <div className="sidebar-bottom">
                    <span className="sidebar-status-dot" />
                    Secure administration
                </div>
            </aside>
        </>
    );
};

export default Sidebar;
