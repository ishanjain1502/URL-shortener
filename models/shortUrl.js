const mongoose = require('mongoose');

const shortID = require('short-id');

const shortUrlSchema = new mongoose.Schema({
    full: {
        type: String,
        required: true
    },
    short: {
        type: String,
        required: true,
        default: shortID.generate
    },
    clicks: {
        type: Number,
        required: true,
        default: 0
    }
})
// exporting schemas
module.exports = mongoose.model('ShortUrl', shortUrlSchema);