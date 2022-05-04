const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const subStorageSchema = new mongoose.Schema({

    storage_id: {
        type: Schema.Types.ObjectId,
        ref: "stores"
    },
    total_space: {
        type: String,
        required: true
    },
    isAvailable: {
        type: Boolean

    },
    items: [{
        type: String,
        required: true
    }],
    images: [{
        type: String,
        required: true,
        unique: true
    }],
    charges: {
        type: String,
    },
    location: {
        type: String,
        required: true
    },
    customers: [{
        user: Schema.Types.ObjectId,
        ref: "users",
        amount: {
            type: String
        },
        measurement: {
            type: String
        },
        start_date: Date,
        end_date: Date
    }],
    description: {
        type: String,
        required: true
    },
    review: [{
        user: Schema.Types.ObjectId,
        ref: "users",
        feedback: {
            type: String,
        }
    }],
    date: {
        type: Date,
        default: Date.now
    }
})

module.exports = mongoose.model("subStores", subStorageSchema)