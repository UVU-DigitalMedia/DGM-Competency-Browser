var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var SkillsSchema = new Schema({

    id: Number,
    name: String,
    description: String,
    flags: []

})

module.exports = mongoose.model('Skills', SkillsSchema);
