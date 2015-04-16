var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var CoursesSchema = new Schema({

    number: String,
    name: String,
    credits: Number,
    lecture: Number,
    lab: Number,
    catalog_offered: String,
    past_offered: [],
    description: String



})

module.exports = mongoose.model('Courses', CoursesSchema);
