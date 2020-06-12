const express = require('express');
const path = require('path');
console.log(path);
const { urlencoded } = require('express');
var app = express();
app.use(express.json());
const data = require('/home/jinx/myexpressapp/data_new.json');
app.get('/',(req, res) => {
    res.header("Content-Type","application/json");
    res.json(data);
});
app.listen(4000,() => console.log('Server started on 4000'));
