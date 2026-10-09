
const Product = require("../models/product");
const Service = require("../models/service");
const Contact = require("../models/contact");
const ActivityLog = require("../models/ActivityLog");

const getDashboardSummary = async (req, res, next) => {
    try {
        const startOfDay = new Date();
        startOfDay.setHours(0, 0, 0, 0);

        const [
            products,
            services,
            contacts,
            totalLogins,
            failedLogins,
            todayLogins,
            recentLogins,
            adminLoginStats
        ] = await Promise.all([
            Product.countDocuments({ status: "active" }),
            Service.countDocuments({ status: "active" }),
            Contact.countDocuments(),

            // Total successful logins
            ActivityLog.countDocuments({
                action: "login",
                resource: "authentication"
            }),

            // Total failed login attempts
            ActivityLog.countDocuments({
                action: "login_failed",
                resource: "authentication"
            }),

            // Successful logins today
            ActivityLog.countDocuments({
                action: "login",
                resource: "authentication",
                createdAt: { $gte: startOfDay }
            }),

            // Recent login, failed login and logout activity
            ActivityLog.find({
                action: {
                    $in: ["login", "login_failed", "logout"]
                },
                resource: "authentication"
            })
                .sort({ createdAt: -1 })
                .limit(10)
                .select(
                    "actor actorName action description metadata ipAddress createdAt"
                )
                .lean(),

            // Successful login statistics by admin
            ActivityLog.aggregate([
                {
                    $match: {
                        action: "login",
                        resource: "authentication"
                    }
                },
                {
                    $group: {
                        _id: "$actor",
                        adminName: { $last: "$actorName" },
                        totalLogins: { $sum: 1 },
                        lastLogin: { $max: "$createdAt" }
                    }
                },
                { $sort: { totalLogins: -1 } },
                { $limit: 10 }
            ])
        ]);

        return res.json({
            success: true,
            data: {
                products,
                services,
                contacts,
                loginAnalytics: {
                    totalLogins,
                    failedLogins,
                    todayLogins,
                    recentLogins,
                    adminLoginStats
                }
            }
        });
    } catch (error) {
        next(error);
    }
};

module.exports = { getDashboardSummary };
