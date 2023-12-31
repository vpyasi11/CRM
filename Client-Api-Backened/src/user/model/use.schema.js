// this schema is for defining mongo database.

const mongoose = require('mongoose');
const Schema = mongoose.Schema;
// const ObjectId = Schema.ObjectId;

const UserSchema = new Schema({
    // ObjectId,
    name: {
        type: String,
        maxlength: 40,
        required: true
    },
    company: {
        type: String,
        maxlength: 40,
        required: true
    },
    address: {
        type: String,
        maxlength: 40,
    },
    email: {
        type: String,
        maxlength: 40,
        required: true
    },
    password: {
        type: String,
        min:8,
        maxlength: 200,
        required: true
    },
    refreshJWT: {
        token: {
            type: String,
            maxlength: 500,
            default:''
        },
        addedAt: {
            type: Date,
            required: true,
            default:Date.now()
        }
    }

});
// exporting by making databse model table and passing the schema as second argument;
module.exports = {
    UserSchema:mongoose.model('User',UserSchema)
}