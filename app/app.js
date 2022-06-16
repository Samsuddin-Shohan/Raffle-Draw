const express = require('express');
require('dotenv').config('../.env');
const {notFoundHandle,errorHandler} = require('./error');


const app =express();


app.use(require('./middleware'));
app.use(require('./router'));
app.use(notFoundHandle);
app.use(errorHandler)



module.exports=app;