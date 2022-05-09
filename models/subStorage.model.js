const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const subStorageSchema = new mongoose.Schema({

    storage_id: {
        type: Schema.Types.ObjectId,
        ref: "stores"
    },
    total_space: {
        type: String,

    },
    isAvailable: {
        type: Boolean,
        default: true

    },
    items: [{
        name: {
            type: String,
        },
        charges: {
            type: String,
        },
        description: {
            type: String,
        }
    }],
    images: [{
        type: String,
        required: true,
        unique: true
    }],
    location: {
        type: String,

    },
    description_1: {
        type: String,

    },
    customers: [{
        user: {
            type: Schema.Types.ObjectId,
            ref: "users"
        },
        amount: String,
        start_date: Date,
        item: [{
            name: String,
            weight: String,
            isAvailable: Boolean
        }]
    }],
    review: [{
        user: Schema.Types.ObjectId,
        feedback: String
    }],
    date: {
        type: Date,
        default: Date.now
    }
})

module.exports = mongoose.model("subStores", subStorageSchema)