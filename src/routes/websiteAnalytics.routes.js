```js
const express = require("express");
const WebsiteAnalytics = require("../models/WebsiteAnalytics");
const requireAdmin = require("../middleware/requireAdmin");
const requirePermission = require("../middleware/requirePermission");

const router = express.Router();

// Public endpoint: record a website page view or button click
router.post("/track", async (req, res, next) => {
    try {
        const {
            eventType,
            pagePath,
            pageTitle,
            elementLabel,
            visitorId,
            sessionId
        } = req.body || {};

        if (
            !["page_view", "button_click"].includes(eventType) ||
            typeof pagePath !== "string" ||
            !pagePath.startsWith("/") ||
            pagePath.startsWith("//") ||
            pagePath.length > 300
        ) {
            return res.status(400).json({
                success: false,
                message: "Invalid analytics event"
            });
        }

        await WebsiteAnalytics.create({
            eventType,
            pagePath,
            pageTitle:
                typeof pageTitle === "string"
                    ? pageTitle.slice(0, 150)
                    : "",
            elementLabel:
                typeof elementLabel === "string"
                    ? elementLabel.slice(0, 150)
                    : "",
            visitorId:
                typeof visitorId === "string"
                    ? visitorId.slice(0, 100)
                    : "",
            sessionId:
                typeof sessionId === "string"
                    ? sessionId.slice(0, 100)
                    : ""
        });

        return res.status(201).json({
            success: true,
            message: "Analytics event recorded"
        });
    } catch (error) {
        next(error);
    }
});

// Admin-only endpoint: website analytics summary
router.get(
    "/summary",
    requireAdmin,
    requirePermission("analytics"),
    async (req, res, next) => {
        try {
            const [totalPageViews, totalClicks, uniqueVisitors, pageViews, recentVisits] =
                await Promise.all([
                    WebsiteAnalytics.countDocuments({
                        eventType: "page_view"
                    }),
                    WebsiteAnalytics.countDocuments({
                        eventType: "button_click"
                    }),
                    WebsiteAnalytics.distinct("visitorId", {
                        eventType: "page_view",
                        visitorId: { $nin: ["", null] }
                    }),
                    WebsiteAnalytics.aggregate([
                        { $match: { eventType: "page_view" } },
                        {
                            $group: {
                                _id: "$pagePath",
                                pageTitle: { $last: "$pageTitle" },
                                totalViews: { $sum: 1 },
                                lastVisited: { $max: "$createdAt" }
                            }
                        },
                        { $sort: { totalViews: -1 } }
                    ]),
                    WebsiteAnalytics.find()
                        .sort({ createdAt: -1 })
                        .limit(15)
                        .select(
                            "eventType pagePath pageTitle elementLabel createdAt"
                        )
                        .lean()
                ]);

            return res.json({
                success: true,
                data: {
                    totalPageViews,
                    totalClicks,
                    uniqueVisitors: uniqueVisitors.length,
                    pageViews,
                    recentVisits
                }
            });
        } catch (error) {
            next(error);
        }
    }
);

module.exports = router;
```
