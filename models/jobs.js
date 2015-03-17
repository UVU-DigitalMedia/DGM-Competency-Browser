var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var SkillsSchema = require('./skills.js');
var CategorySchema = require('./categories.js');

var JobsSchema = new Schema({

    id: Number,
    name: String,
    requiredSkills: [SkillsSchema],
    categories: [CategorySchema],
    createdDate: Date,
    updated: { type: Date, default: Date.now }

})

module.exports = mongoose.model('Jobs', JobsSchema);
