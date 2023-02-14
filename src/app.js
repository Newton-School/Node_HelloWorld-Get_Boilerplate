const express = require('express');
const app = express();


// Import routes


//Router Middlewares
app.use(express.json());
app.get('/', (req,res) => {
    res.send('Hello World');
});

module.exports = app;
