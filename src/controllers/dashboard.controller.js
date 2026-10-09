
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

            ActivityLog.countDocuments({
                action: "login",
                resource: "authentication"
            }),

            ActivityLog.countDocuments({
                action: "login_failed",
                resource: "authentication"
            }),

            ActivityLog.countDocuments({
                action: "login",
                resource: "authentication",
                createdAt: { $gte: startOfDay }
            }),

            ActivityLog.find({
                action: { $in: ["login", "login_failed"] },
                resource: "authentication"
            })
                .sort({ createdAt: -1 })
                .limit(10)
                .select("actor actorName action description metadata ipAddress createdAt")
                .lean(),

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

        res.json({
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
