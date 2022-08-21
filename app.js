const express = require('express');
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
require('dotenv/config');

app.use(bodyParser.json());

//Importing Routes
const postsRoute = require('./routes/posts');

app.use('/posts', postsRoute);

//Routes
app.get('/',(req,res)=>{
    res.send('We are on home');
});



//Connecting with DB
mongoose.connect(process.env.DB_CONNECTION, { useNewUrlParser: true}, () => 
    console.log('Connected to DB')
);

//This will be listening the Server
app.listen(3000);
