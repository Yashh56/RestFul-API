const express = require('express');
const app = express();
const mongoose = require('mongoose');
const port = 8080;
require('dotenv').config();

// Import Routes
const postsRoute = require('./routes/posts')

// Connect to MongoDB
mongoose.connect(process.env.DB_CONNECTION).then(()=> console.log("Connected To DB")).catch((err)=> console.log(err));


// Middleware
app.use(express.json())
app.use('/posts', postsRoute)


app.get('/', (req, res) => res.send('<h1 align= "center">Hello World!</h1>'));

app.listen(port, () => console.log(`Example app listening on port ${port}!`));