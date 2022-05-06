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
        required: true
    },
    description_1:{
         type:String,
         required:true
    },
    customers: [{
        user: Schema.Types.ObjectId,
        amount: String,
        measurement: String,
        start_date: Date,
        end_date: Date
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