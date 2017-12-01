var express = require('express');
var app = express();
var path = require('path');
var bodyParser = require("body-parser");

app.use(express.static(path.join(__dirname, 'public')));
//The following app.get functions are used to display the text connected to the images on the index.html page. Each one has information on the plot,title and publication history
app.get('/', function(req, res) {
	console.log("file io");
    res.sendFile(path.join(__dirname + '/index.html'));
	
	
});

//app.get for Home
 app.get('/home', function (req, res) {
res.send('Hello homey <h1>Home</h1><img src="" height="100" width="220"><h4>Plot Summary:</h4>Jack Torrance, his wife Wendy, and their young son Danny move into the Overlook Hotel, where Jack has been hired as the winter caretaker. Cut off from civilization for months, Jack hopes to battle alcoholism and uncontrolled rage while writing a play.<p> <h4>Publication History:</h4>Published in 1977, it is Kings third published novel and first hardback bestseller: the success of the book firmly established King as a preeminent author in the horror genre. The setting and characters are influenced by Kings personal experiences, including both his visit to The Stanley Hotel in 1974 and his recovery from alcoholism. ');
 })
 
 //app.get Products
 app.get('/product', function (req, res) {
res.send("Hello Hello Hello!");
  })
  
  //app.get for Contact
 app.get('/about', function (req, res) {
res.send('Whats going on?');
 })
 
 //app.get for Contact
 app.get('/contact', function (req, res) {
res.send('');
 }) 
 
 
 //app.get for Faq
  app.get('/faq', function (req, res) {
res.send('<h1>Faq</h1><img src="" height="350" width="220"><h4>Plot Summary:</h4> After a serious car crash, novelist Paul Sheldon is rescued by former nurse Annie Wilkes , who claims to be his biggest fan. Annie brings him to her remote cabin to recover, where her obsession takes a dark turn when she discovers Sheldon is killing off her favorite character from his novels. As Sheldon devises plans for escape, Annie grows increasingly controlling, even violent, as she forces the author to shape his writing to suit her twisted fantasies.<p> <h4>Publication History:</h4> When King was writing Misery in 1985 he planned the book to be released under the pseudonym Richard Bachman but the identity of the pseudonym was discovered before the release of the book. ');
 })
 


 
 
//Here we are configuring express to use body-parser as middle-ware.
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());



app.listen(8080);
//When node is initiated the website will be visible on the browser by typing "http://localhost:8081/" in the URL bar .
var server = app.listen(8081, function () {
   var host = server.address().address
   var port = server.address().port
   
   console.log("Example app listening at http://%s:%s", host, port)
})