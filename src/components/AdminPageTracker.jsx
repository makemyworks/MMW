
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import api from "../api/axios";
import { useAuth } from "../context/useAuth";

const getPageTitle = (pathname) => {
    const pageNames = {
        "/dashboard": "Dashboard",
        "/products": "Products",
        "/services": "Services",
        "/contacts": "Contacts",
        "/staff": "Staff",
        "/activity-logs": "Activity Logs",
        "/analytics": "Analytics"
    };

    return pageNames[pathname] || pathname;
};

const AdminPageTracker = () => {
    const location = useLocation();
    const { admin, token } = useAuth();

    useEffect(() => {
        if (!admin || !token) return;

        api.post("/admin/page-visits", {
            pagePath: location.pathname,
            pageTitle: getPageTitle(location.pathname)
        }).catch((error) => {
            console.error("Could not record admin page visit:", error.message);
        });
    }, [location.pathname, admin, token]);

    return null;
};

export default AdminPageTracker;
