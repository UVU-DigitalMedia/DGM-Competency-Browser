var mongoose     = require('mongoose');
var Schema       = mongoose.Schema;

//Don't forget to rename the schema.
var ModelSchema   = new Schema({
	name: String
});

module.exports = mongoose.model('Model', ModelSchema);