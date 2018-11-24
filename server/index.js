
const express = require('express');
const db = require('../db/index');
const parser = require('body-parser');
const path =require('path');
const router = require('./routes.js');

const app = express();


app.use(parser.json());
app.use(parser.urlencoded({extended:true}))
app.use('/', router); 

app.use(express.static(path.join(__dirname, '../dist/client')));




app.get('/',function(req,res){
	res.sendFile('index.html')
})

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
	console.log(`Our app is running on port ${ PORT }`);
});

module.exports.app = app;
