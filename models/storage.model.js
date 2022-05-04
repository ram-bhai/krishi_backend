const mongoose = require('mongoose');
const storageSchema = new mongoose.Schema({
    storageName: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model("stores", storageSchema);