var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var JobsSchema = new Schema({

    id: Number,
    name: String,
    requiredSkills: [SkillsSchema],
    categories: [CategorySchema],
    createdDate: Date,
    updated: { type: Date, default: Date.now }

})

module.exports = mongoose.model('Jobs', JobsSchema);
