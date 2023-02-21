const mongooose = require('mongoose');

const blogSchema = new mongooose.Schema({
    // Your code goes here
   id:{
    type:Number,
    required: true
   } 
})

const Blog = mongooose.model('blogs', blogSchema);

module.exports = Blog;