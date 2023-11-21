let mongoose = require('mongoose');

// create a model class
let assignmentModel = mongoose.Schema({
    Assignment:String,
    Class:String,
    Due:String,
    Weight:String,
},
{
    collection:"assignments"
});
module.exports = mongoose.model('Assignment',assignmentModel);