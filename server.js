const express = require('express');
const dotenv = require('dotenv');
const morgan = require('morgan');
const bodyparser = require('body-parser');
const path = require('path');
const connectDB = require('./server/database/connection.js');


const app = express();

const route= require('./server/routes/router');
dotenv.config({path:'config.env'});
let port = process.env.PORT || 3000;



//log requests
app.use(morgan('tiny'));

//Database Connection 
connectDB();

//set view engine
app.set('view engine','ejs');

//parse requests to body-parser
app.use(bodyparser.urlencoded({extended : true}));


// app.use(express.static(path.resolve(__dirname,"assets/js")));

app.use('/css',express.static(path.resolve(__dirname,"assets/css")))
app.use('/js',express.static(path.resolve(__dirname,"assets/js")))
app.use('/',route);

app.listen(port,()=>{
    console.log(`server listening on port http://localhost:${port}`);
})