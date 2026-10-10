
const mongoose = require("mongoose");

const adminPageVisitSchema = new mongoose.Schema(
    {
        adminId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Admin",
            default: null
        },
        adminName: {
            type: String,
            default: "Admin",
            trim: true
        },
        pagePath: {
            type: String,
            required: true,
            trim: true
        },
        pageTitle: {
            type: String,
            default: "",
            trim: true
        }
    },
    {
        timestamps: true
    }
);

adminPageVisitSchema.index({ createdAt: -1 });
adminPageVisitSchema.index({ pagePath: 1 });

module.exports =
    mongoose.models.AdminPageVisit ||
    mongoose.model("AdminPageVisit", adminPageVisitSchema);
