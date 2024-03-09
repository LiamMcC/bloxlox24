const express = require('express');
const cookieParser = require('cookie-parser'); // Import cookie-parser middleware

const app = express();

// Use cookie-parser middleware
app.use(cookieParser());


app.use(express.static("style")); 
app.use(express.static("images"));
app.use(express.static("partials"));
app.use(express.static("style"));
app.use(express.static("sass"));
app.use(express.static("js"));

app.set('view engine', 'ejs'); // Set the template engine 

app.use((req, res, next) => {
  res.locals.cookies = req.cookies;
  next();
});

// **********************************  Code from here **************************

app.get('/', function(req, res) {

  res.render('home');
});

app.get('/bloxlox-features', function(req,res){

    res.render('features')


})


app.get('/how-bloxlox-works', function(req,res){

  res.render('howitworks')


})

app.get('/bloxlox-benifits', function(req,res){

  res.render('benifits')


})

app.get('/bloxlox-patents', function(req,res){

  res.render('patents')


})

app.get('/bloxlox-usecase', function(req,res){

  res.render('usecases')


})

app.get('/contact', function(req,res){

  res.render('contact')


})

app.get('/partherships', function(req,res){

  res.render('partner')


})


app.get('/bloxlox-privacy', function(req,res){

  res.render('privacy')


})


app.get('/error', function(req,res){

  res.render('notfound')


})

app.get('/servererror', function(req,res){

  res.render('broken')


})


app.post('/accept-cookies', function(req, res) {

  let options = {
      maxAge: 1000 * 60 * 5// would expire after 90 minutes
      //httpOnly: true, // The cookie only accessible by the web server
    // signed: true // Indicates if the cookie should be signed
  }
 
  res.cookie('cookie_consent', 1, options) // options is optional
  //res.send('')


 
  res.redirect(req.get('referer'));
 //res.redirect('/');
 });


 app.get('/rejectCookie', function(req, res) {

  let options = {
      maxAge: 1000 * 60 * 60 * 24 * 30 * 6
      //httpOnly: true, // The cookie only accessible by the web server
    // signed: true // Indicates if the cookie should be signed
  }
 
  res.cookie('cookie_consent', 0 , options) // options is optional
  //res.send('')


 
  res.redirect(req.get('referer'));
 //res.redirect('/');
 });



app.use((req, res, next) => {
  res.status(404);
  res.redirect('/error'); // Render a specific 404 page
  // or
  // res.json({ error: 'Not Found' }); // Send a JSON response
});

// Global error handling
app.use((err, req, res, next) => {
  console.error('Error:', err);
  res.status(500);
  res.redirect('/servererror'); // Render a general error page
  // or
  // res.json({ error: 'Internal Server Error' }); // Send a JSON response
});



// **********************************  Code to here **************************

app.listen(process.env.PORT || 3000, process.env.IP || "0.0.0.0" , function(){
  console.log("New Full Demo is Live")
});



// The topic is WIFI security. What i want is a video showing a person entering a house. they ask for the WIFI password and are told there is none. Instead the home owner says watch this secure WIFI connection. They go to a screen in the house where there is a record showing the visitors device. They touch the screen and the message is displayed saying connection started. hey then look at a different screen which has a message saying do you confirm this connection. They tap yes and the visitors device is then connected to the WIFI and they both smile and say isn't blockchain password authentication so smart and safe 