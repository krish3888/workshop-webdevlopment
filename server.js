var express=require('express');
var app=express();
var port=3001;
app.use(express.static('workshopWD'));
app.listen(port);
console.log('Server started at'+port);
