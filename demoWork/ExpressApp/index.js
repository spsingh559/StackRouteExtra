var express=require('express');
var app=express();

app.get('/',function(req,res){
	res.send("New express Program");
})

app.listen(3000, function(){
	console.log("express is running .....");
})