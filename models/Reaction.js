const { Schema } = require('mongoose');

const ReactionSchema = new Schema(
    {
        reactionId: {

        },
        reactionBody: {
            type: String, 
            required: true,
            maxlength: 280
        },
        username: {
            type: String,
            required: true
        },
        createdAt: {
            type: Date,
            default: Date.now,
            get: (createdAtVal) => dateFormat(createdAtVal)
        }
    }
)

module.exports = ReactionSchema;