const Mongoose = require('mongoose');
const Schema = Mongoose.Schema;

const performanceSchema = new Schema({
    date: { type : Date, default : new Date, required: true},
    targetTime : { type : Number, default : 0, trim : true, required: true},
    workTime : { type : Number, default : 0, trim : true, required: true},
    achievement : { type : Number, default : 0, trim : true, required: true},
    overtime : { type : Number, default : 0, trim : true, required: true},
});

module.exports = Mongoose.model('performance', performanceSchema, 'performances');