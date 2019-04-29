const Mongoose = require('mongoose');
const Schema = Mongoose.Schema;

const messageSchema = new Schema({
    date: { type : Date, default : new Date, required: true},
    message:  { type : String, default : '', trim : true, required: true },
    type: { type : String, default : 'message', trim: true, required: true}
});

module.exports = Mongoose.model('message', messageSchema, 'messages');