var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var mongoose = require('mongoose');
require('dotenv').config()
const cors = require('cors');
const routerUsers = require('./routes/users.route')
const port=3700;
var app = express();
app.use(cors());
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

mongoose.connect(process.env.MONGO_URL)
.then(()=>console.log('DB Connection Successful'))
.catch(err=>console.log(err.message))

app.use('/api', routerUsers)

app.listen(port,()=>{
    console.log(`server is running on port ${port}`);
})

module.exports = app;
