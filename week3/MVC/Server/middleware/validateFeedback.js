// Server/middleware/validateFeedback.js
// Validates the request body for creating a feedback item.
// If invalid -> respond 400 and stop the pipeline.
// If valid -> call next() so the controller can run.

function validateFeedback(req, res, next) {
  const { sender, message, rating, platform } = req.body || {};

  // Required fields
  if (typeof sender !== 'string' || sender.trim().length === 0) {
    return res
      .status(400)
      .json({ error: 'sender is required (non-empty string)' });
  }

  if (typeof message !== 'string' || message.trim().length === 0) {
    return res
      .status(400)
      .json({ error: 'message is required (non-empty string)' });
  }

  // Optional fields validation (only if provided)
  if (rating !== undefined && rating !== null) {
    const n = Number(rating);
    if (!Number.isFinite(n) || n < 1 || n > 5) {
      return res
        .status(400)
        .json({ error: 'rating must be a number between 1 and 5' });
    }
  }

  if (platform !== undefined && platform !== null) {
    const allowed = new Set(['web', 'mobile', 'desktop']);
    if (typeof platform !== 'string' || !allowed.has(platform)) {
      return res
        .status(400)
        .json({ error: "platform must be one of: 'web', 'mobile', 'desktop'" });
    }
  }

  next();
}

module.exports = validateFeedback;
