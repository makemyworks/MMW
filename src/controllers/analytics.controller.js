
const AdminPageVisit = require("../models/AdminPageVisit");

const getAdminPageAnalytics = async (req, res, next) => {
    try {
        const [pageViews, recentVisits, totalVisits] = await Promise.all([
            AdminPageVisit.aggregate([
                {
                    $group: {
                        _id: "$pagePath",
                        pageTitle: { $last: "$pageTitle" },
                        totalVisits: { $sum: 1 },
                        lastVisited: { $max: "$createdAt" }
                    }
                },
                {
                    $sort: { totalVisits: -1 }
                }
            ]),

            AdminPageVisit.find()
                .sort({ createdAt: -1 })
                .limit(15)
                .select("adminId adminName pagePath pageTitle createdAt")
                .lean(),

            AdminPageVisit.countDocuments()
        ]);

        return res.json({
            success: true,
            data: {
                totalVisits,
                pageViews,
                recentVisits
            }
        });
    } catch (error) {
        next(error);
    }
};

module.exports = {
    getAdminPageAnalytics
};
