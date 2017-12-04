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
res.send('Hello homey <h1>Home</h1><img src="images/minions.jpg" height="100" width="220"><h2></h2> Minions are possibly made from humans by the Minionizer, a ray gun that turns humans into Minions, as seen in Despicable Me: Minion Mayhem at Universal Studios.<p> This is generally considered as non-canon (or just something Gru invented for the express purpose of the ride).');
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
res.send('Minions are possibly made from humans by the Minionizer, a ray gun that turns humans into Minions, as seen in Despicable Me: Minion Mayhem at Universal Studios. This is generally considered as non-canon (or just something Gru invented for the express purpose of the ride).');
 }) 
 
 
 //app.get for Faq
  app.get('/faq', function (req, res) {
res.send('<h1>Faq</h1><img src="/images/minions.jpg" height="350" width="220"><h2>Minions</h2> Minions are possibly made from humans by the Minionizer, a ray gun that turns humans into Minions, as seen in Despicable Me: Minion Mayhem at Universal Studios.<p> This is generally considered as non-canon (or just something Gru invented for the express purpose of the ride).. ');
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