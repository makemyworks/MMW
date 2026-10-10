
import { Outlet } from "react-router-dom";
import Sidebar from "../components/Sidebar";
import Header from "../components/Header";
import AdminPageTracker from "../components/AdminPageTracker";

const AdminLayout = () => {
    return (
        <div className="admin-layout">
            <AdminPageTracker />

            <Sidebar />

            <div className="admin-content">
                <Header />

                <main className="admin-main">
                    <Outlet />
                </main>

                <footer className="admin-footer">
                    <span>
                        © {new Date().getFullYear()} Alpha Zeta World
                    </span>
                    <span>Admin workspace</span>
                </footer>
            </div>
        </div>
    );
};

export default AdminLayout;
