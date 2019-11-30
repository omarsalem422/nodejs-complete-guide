const express = require('express');

const app = express();

app.use( '/add-product',(req, res, next) =>  {
    console.log('In the middleware');
    res.send('<h1>The "Add Product" Page </h>');
});

app.use( '/',(req, res, next) =>  {
    console.log('In the middleware');
    res.send('<h1>Hello from Express!!!</h>');
});




app.listen(8000);
console.log("Server started at port 3000 ...");
