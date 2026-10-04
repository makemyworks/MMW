// Simple in-memory rate limiter (no extra package needed).
// Stops people from guessing passwords or spamming the contact form.
const rateLimit = ({ windowMs, max, message }) => {
    const hits = new Map();

    setInterval(() => {
        const now = Date.now();
        for (const [key, entry] of hits) if (entry.resetAt <= now) hits.delete(key);
    }, windowMs).unref();

    return (req, res, next) => {
        const key = req.ip || "unknown";
        const now = Date.now();
        let entry = hits.get(key);
        if (!entry || entry.resetAt <= now) {
            entry = { count: 0, resetAt: now + windowMs };
            hits.set(key, entry);
        }
        entry.count += 1;
        if (entry.count > max) {
            res.setHeader("Retry-After", Math.ceil((entry.resetAt - now) / 1000));
            return res.status(429).json({ success: false, message: message || "Too many requests. Please try again later." });
        }
        return next();
    };
};

module.exports = rateLimit;
