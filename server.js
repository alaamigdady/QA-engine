var express = require('express');
const db = require('./db');
const mysql = require('mysql');
const path = require('path')


const morgan = require('morgan');

const app = express();
const parser = require('body-parser');
app.use(parser.json());
app.use(morgan('dev'));
app.use(express.static(path.join(__dirname, './dist/client')));



app.post('/saveLog',function(req,res){
	let params =[req.body.type, req.body.amount,req.body.date]
	console.log(params)
	let queryStr = 'INSERT INTO logs (type,amount,created_at) VAlUES (?,?,?)';
	let total ;	
	db.query(queryStr,params,function(err,results){
			if (err) throw err 
			result= results
	})
	
	let queryStr2= 'SELECT SUM(amount) FROM logs';
	db.query(queryStr2,function(err,results){
		if (err) throw err
	    let x = (JSON.stringify(results)).split(':')[1];
		x=x.slice(0,-2)
		res.send(x)
	})


})

app.get('/getAll',function(req,res){
	let queryStr2= 'SELECT SUM(amount) FROM logs';
	db.query(queryStr2,function(err,results){
		if (err) throw err
	    let x = (JSON.stringify(results)).split(':')[1];
		console.log(results)
		x=x.slice(0,-2)
		res.send(x)
	})

})

app.get('/getLog/:type/:month', function(req,res){
	let months={JAN:'01',FEB:'02',MAR:'03',APR:'04',MAY:'05',JUN:'06',JUL:'07',AUG:'08',SEP:'09',OCT:'10',NOV:'11',DEC:'12'}
	console.log(req.params.type,req.params.month)
	let type = req.params.type;
	let month = months[req.params.month];
	let queryStr = mysql.format('SELECT SUM(amount) from logs WHERE type = ? AND MONTH(created_at)=?',[type,month])

	
	db.query(queryStr,function(err,results){
		if(err) throw err
		// let x = JSON.stringify(results)
		// console.log(x)
		// let sum =0;
		// for(var i=0;i<x.length;i++){
		// 	sum += x[i]["amount"]
		// }
		// console.log(sum)
		let x = (JSON.stringify(results)).split(':')[1];
		x=x.slice(0,-2)
		res.send(x)
	})
})

app.get('/',function(req,res){
	res.sendFile('index.html')
})
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
	console.log(`Our app is running on port ${ PORT }`);
});
