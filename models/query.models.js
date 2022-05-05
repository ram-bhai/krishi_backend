const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const querySchema = new mongoose.Schema({

    user_id: {
        type: Schema.Types.ObjectId,
        ref: "users",
    },
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    message: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        default: Date.now
    }

})

module.exports = mongoose.model("queries", querySchema);