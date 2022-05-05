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
        required: true,
        unique: true
    },
    Area: {
        type: String,
        required: true
    },
    address: {
        type: String,
        required: true
    },
    verification: {
        type: Boolean,
        default: false
    },
    start_date: {
        type: Date,
    },
    end_date: {
        type: Date,
    },
    isApproved: {
        type: Boolean,
        default: false
    },
    date: {
        type: Date,
        default: Date.now
    }

})

module.exports = mongoose.model("contracts", contractSchema);