const express = require('express');
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');


//Should export whatever are imported, CheckUser should be exported

require('dotenv/config');

app.use(bodyParser.json());

//Importing Routes
const postsRoute = require('./routes/posts');
const usersRoute = require('./routes/users');
const checkAuth = require('./middleware/check-auth');
//const checkUser = require('./middleware/check-auth');

app.use('/posts', postsRoute);
app.use('/users', usersRoute);

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
