const express = require('express');
const router = express.Router();
const Link = require('../models/link');
const crypto = require('crypto');

// Generate random shortId
function generateShortId(length = 6) {
  return crypto.randomBytes(length).toString('base64url').slice(0, length);
}

// POST /api/shorten
router.post('/shorten', async (req, res) => {
  try {
    const { originalUrl, customAlias } = req.body;

    // Validate originalUrl
    if (!originalUrl) {
      return res.status(400).json({ message: 'Original URL is required' });
    }

    // Determine shortId
    let shortId;
    if (customAlias) {
      // Check uniqueness
      const exists = await Link.findOne({ shortId: customAlias });
      if (exists) return res.status(400).json({ message: 'Alias already exists' });
      shortId = customAlias;
    } else {
      // Generate random unique shortId
      let isUnique = false;
      while (!isUnique) {
        shortId = generateShortId();
        const exists = await Link.findOne({ shortId });
        if (!exists) isUnique = true;
      }
    }

    // Save to DB
    const newLink = await Link.create({ originalUrl, shortId });
    res.status(201).json({
      message: 'Short link created',
      shortLink: `http://localhost:5000/${newLink.shortId}`
    });

  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error' });
  }
});

module.exports = router;
