var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var jobsSchema = new Schema({
  {
    "id": "1001",
    "name": "Assistant Technical Artist - Contributor (TA)",
    "requiredSkills": ["2009, 2005, 2001, 2004"],
    "categories": ["3013", "3014", "3004"]
  },
  {
    "id": "1002",
    "name": "Associate Technical Artist - Contributor (TA)",
    "requiredSkills": ["2004, 2019, 2075, 2045"],
    "categories": ["3001", "3005", "3004"]
  },
  {
    "id": "1003",
    "name": "Technical Artist - Contributing Leader (TA)",
    "requiredSkills": ["2043, 2024, 2015, 2005"],
    "categories": ["3013", "3014", "3004"]
  }
})
