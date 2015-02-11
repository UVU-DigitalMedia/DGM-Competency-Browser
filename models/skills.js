var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var skillsSchema = new Schema({
  {
    "id": "2001",
    "name": "HTML5",
    "description": "HTML 5 is a revision of the Hypertext Markup Language (HTML), the standard programming language for describing the contents and appearance of Web pages.",
    "flags": ["001", "583"]
  },
  {
    "id": "2002",
    "name": "CSS3",
    "description": "Stands for 'Cascading Style Sheet'. Cascading style sheets are used to format the layout of Web pages. They can be used to define text styles, table sizes, and other aspects of Web pages that previously could only be defined in a page's HTML.",
    "flags": ["53", "51"]
  },
  {
    "id": "2003",
    "name": "Adobe Illustrator",
    "description": "Adobe Illustrator is a vector graphics editor developed and marketed by Adobe Systems.",
    "flags": ["001", "583"]
  }
})
