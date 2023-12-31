// this schema is for defining mongo database.

const mongoose = require('mongoose');
const Schema = mongoose.Schema;
// const ObjectId = Schema.ObjectId;

const ResetPinSchema = new Schema({
    // ObjectId,
    
    pin: {
        type: String,
        maxlength: 6,
        minlength:6,
    
    },
    email: {
        type: String,
        maxlength: 40,
        required: true
    },
    addedAt: {
        type: Date,
        required: true,
        default: Date.now()
    }

});
// exporting by making databse model table and passing the schema as second argument;
module.exports = {
    ResetPinSchema:mongoose.model('ResetPassword',ResetPinSchema)
}