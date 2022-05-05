const { booleanParser } = require('config/parser');
const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const contractSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    mobile: {
        type: String,
        required: true,
        unique: true
    },
    image: {
        type: String,
        required: true
    },
    verification: {
        type: Boolean,
        default: false
    },
    date: [{
        start_date: {
            type: Date,
            required: true
        },
        end_date: {
            type: Date,
            required: true
        }
    }],
    isApproved: {
        type: Boolean,
        default: false
    }

})

module.exports = mongoose.model("contracts", contractSchema);