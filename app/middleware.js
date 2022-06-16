const cors = require('cors');
const express = require('express');
const morgan = require('morgan');

const middlewares = [morgan('dev'),express.json()];
module.exports = middlewares;
