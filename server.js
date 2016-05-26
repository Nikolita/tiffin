var express = require('express');
var app = express();
var mongojs = require('mongojs');
var db = mongojs('tiffin',['description']);
var db2 = mongojs('tiffin',['pricing']);
/*app.get('/', function(req,res) {
	res.send("Hello from server.js")
});*/
app.use(express.static(__dirname + "/public"));

app.get('/about_content', function(req, res){
	console.log("I recieved a get request...!");
db.description.find(function(err, docs){
	console.log(docs);
	res.json(docs);
});
});

app.get('/pricing', function(req, res){
	console.log("I recieved a get request...!");
db2.pricing.find(function(err, docs){
	console.log(docs);
	res.json(docs);
});

});

app.listen(3000);
console.log("server running on port 3000");
