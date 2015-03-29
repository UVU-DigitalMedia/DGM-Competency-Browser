var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var PastOfferedSchema = require('./past_offered.js');

var CoursesSchema = new Schema({

    number: String,
    name: String,
    credits: Number,
    lecture: Number,
    lab: Number,
    catalog_offered: String,
    past_offered: [PastOfferedSchema],
    description: String



})

module.exports = mongoose.model('Courses', CoursesSchema);
