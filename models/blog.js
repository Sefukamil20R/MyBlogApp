// import mongoose library to interact with mongodb
const mongoose = require('mongoose');
// extract the Schema class from mongoose
const Schema = mongoose.Schema;
// create a new schema
const blogSchema = new Schema
(
    {
        title: 
        {
            type: String,
            required: true
        },
        snippet: 
        {
            type: String,
            required: true
        },
        body: 
        {
            type: String,
            required: true
        }
    }, 
    { timestamps: true}
);

// create a new model using the schema
const Blog = mongoose.model('Blog', blogSchema);

// export the model
module.exports = Blog;