const Mongoose = require('mongoose');
const Schema = Mongoose.Schema;

const notificationSchema = new Schema({
    date: { type : Date, default : new Date, required: true},
    message:  { type : String, default : '', trim : true, required: true },
    type: { type : String, default : 'notification', trim: true, required: true},
    category: { type : Number, default : 1, trim: true, required: true}
});

module.exports = Mongoose.model('notification', notificationSchema, 'notifications');