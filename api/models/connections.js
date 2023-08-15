const mongoose = require("mongoose");

const connectionSchema = new mongoose.Schema(
    {
        username: {
            type: String,
            required: true
        },
        role: {
            type: String,
            required: true
        },
        company: {
            type: String,
            required: true
        },
        isConnected: {
            type: Boolean,
            default: false
        }
    }
)

module.exports = mongoose.model("Connection", connectionSchema);