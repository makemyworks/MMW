
const express = require("express");

const {
    loginAdmin,
    logoutAdmin,
    changeAdminPassword,
    listAdmins,
    createAdmin,
    updateAdmin,
    deleteAdmin,
    listActivityLogs
} = require("../controllers/admin.controller");

const requireAdmin = require("../middleware/requireAdmin");
const requirePermission = require("../middleware/requirePermission");
const { getDashboardSummary } = require("../controllers/dashboard.controller");

const router = express.Router();

router.post("/login", loginAdmin);
router.post("/logout", requireAdmin, logoutAdmin);

router.get(
    "/dashboard-summary",
    requireAdmin,
    requirePermission("dashboard"),
    getDashboardSummary
);

router.post("/change-password", requireAdmin, changeAdminPassword);

router.get("/staff", requireAdmin, requirePermission("staff"), listAdmins);
router.post("/staff", requireAdmin, requirePermission("staff"), createAdmin);
router.patch("/staff/:id", requireAdmin, requirePermission("staff"), updateAdmin);
router.delete("/staff/:id", requireAdmin, requirePermission("staff"), deleteAdmin);

router.get(
    "/activity-logs",
    requireAdmin,
    requirePermission("activity-log"),
    listActivityLogs
);


const AdminPageVisit = require("../models/AdminPageVisit");

// Track admin page visits
router.post("/page-visits", requireAdmin, async (req, res, next) => {
    try {
        const { pagePath, pageTitle } = req.body || {};

        if (
            typeof pagePath !== "string" ||
            !pagePath.startsWith("/") ||
            pagePath.startsWith("//") ||
            pagePath.length > 300
        ) {
            return res.status(400).json({
                success: false,
                message: "A valid page path is required"
            });
        }

        await AdminPageVisit.create({
            adminId: req.admin.id,
            adminName: req.admin.name || "Admin",
            pagePath,
            pageTitle: typeof pageTitle === "string"
                ? pageTitle.slice(0, 150)
                : ""
        });

        return res.status(201).json({
            success: true,
            message: "Page visit recorded"
        });
    } catch (error) {
        next(error);
    }
});

module.exports = router;
