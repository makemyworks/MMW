
const mongoose = require("mongoose");

const websiteAnalyticsSchema = new mongoose.Schema(
    {
        eventType: {
            type: String,
            enum: ["page_view", "button_click"],
            required: true,
            index: true
        },
        pagePath: {
            type: String,
            required: true,
            trim: true,
            maxlength: 300
        },
        pageTitle: {
            type: String,
            default: "",
            trim: true,
            maxlength: 150
        },
        elementLabel: {
            type: String,
            default: "",
            trim: true,
            maxlength: 150
        },
        visitorId: {
            type: String,
            default: "",
            maxlength: 100
        },
        sessionId: {
            type: String,
            default: "",
            maxlength: 100
        }
    },
    { timestamps: true }
);

websiteAnalyticsSchema.index({ createdAt: -1 });
websiteAnalyticsSchema.index({ pagePath: 1, eventType: 1 });

module.exports =
    mongoose.models.WebsiteAnalytics ||
    mongoose.model("WebsiteAnalytics", websiteAnalyticsSchema);
