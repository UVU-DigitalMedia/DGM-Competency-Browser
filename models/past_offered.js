var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var ScheduledSchema = require('./scheduled.js');

var PastOfferedSchema = new Schema({

    crn: Number,
    section: String,
    start_date: Date,
    end_date: Date,
    scheduled: [ScheduledSchema],
    instructor: String,
    enrolled: Number,
    max_enrollment: Number

})

module.exports = mongoose.model('PastOffered', PastOfferedSchema);
