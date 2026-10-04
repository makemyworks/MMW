const express = require("express");
const { createContact } = require("../controllers/contact.controller");
const requireAdmin = require("../middleware/requireAdmin");
const requirePermission = require("../middleware/requirePermission");
const { listContacts, updateContactStatus } = require("../controllers/contact.controller");

const rateLimit = require("../middleware/rateLimit");

const router = express.Router();

router.post("/", rateLimit({ windowMs: 60 * 60 * 1000, max: 15, message: "Too many submissions. Please try again later." }), createContact);
router.get("/", requireAdmin, requirePermission("contacts"), listContacts);
router.patch("/:id/status", requireAdmin, requirePermission("contacts"), updateContactStatus);

module.exports = router;
