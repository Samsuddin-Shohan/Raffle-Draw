require('dotenv').config('../.env');

const http = require('http');
const app = require('./app/app');
require('dotenv').config();
const PORT = process.env.PORT || 8000;

const server = http.createServer(app);

server.listen(PORT,()=>{
    console.log(`listening on port ${PORT}`);
})

