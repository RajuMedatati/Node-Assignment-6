const express = require('express');
const app = express();


// Import routes
const blogRoute = require('./routes/blog');
// const blogRoute1 = require("./routes/blog?page=1&search=react")

//Router MIddlewares
app.use(express.json());
app.use('/', blogRoute);


module.exports = app;
