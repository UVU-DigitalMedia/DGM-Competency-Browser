var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var ScheduledSchema = new Schema({

  days: String,
  start_time: String,
  end_time: String,
  room: String

})

module.exports = mongoose.model('Scheduled', ScheduledSchema);
