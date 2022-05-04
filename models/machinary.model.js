const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const toolSchema = new mongoose.Schema({

    toolname: {
        type: String,
        required: true,
        unique: true
    },
    images: [{
        type: String,
        required: true
    }],

    charges: {
        type: String
    },
    travelling_charges: {
        type: String
    },
    customer: [{

        user: Schema.Types.ObjectId,
        bookingDate: Date,
        location: String,
        Area: String,
        description: {
            type: String
        }
    }],
    desc: {
        type: String,
        required: true
    },
    reviews: [{
        user: Schema.Types.ObjectId,
        feedback: {
            type: String
        }
    }],
    date: {
        type: Date,
        default: Date.now
    }
})

module.exports = mongoose.model("tools", toolSchema);