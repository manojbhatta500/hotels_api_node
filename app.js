const express = require('express');
const db = require('./db');
const app = express();
require('dotenv').config();
const bodyParser = require('body-parser');
const Person = require('./models/person');
app.use(bodyParser.json());


// routes
const personRouter = require('./routes/personRoutes');
const menuRouter = require('./routes/menuRoutes');




// routes

app.use('/person',personRouter);

app.use('/menu',menuRouter);






const port = process.env.PORT || 3000;

app.listen(port,()=>{
    console.log("server is running in port 3000")
})