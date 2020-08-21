'use strict';
// In the server: 
// (1) Require all the dependencies for the project
// (2) Require all routes from the routes folder: "./routes/api.js"
// (3) Use the css styles in the public folder
// (4) Use bodyParser -> .json & .urlencoded
// (5) Prevent XSS Attacks w/ Helmet: .noSniff() & .xssFilter()
// (6) App.route to get the main page
// (7) Send another page w/ different URL if the user clickes on "userstories"
// (8) Use middleware that will check if there is an error, will send => "App is not found"

var express     = require('express');
var bodyParser  = require('body-parser');
var expect      = require('chai').expect;
var cors        = require('cors');

var apiRoutes         = require('./routes/api.js');
var fccTestingRoutes  = require('./routes/fcctesting.js');
var runner            = require('./test-runner');
let helmet = require("helmet");
var app = express();

app.use('/public', express.static(process.cwd() + '/public'));

app.use(cors({origin: '*'})); //For FCC testing purposes only

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(helmet.noSniff()) // set HTTP header: X-Content-Type-Options: nosniff
// helps prevent XSS attacks
app.use(helmet.xssFilter()) // any inputs are santized by the browser

// Index page (static HTML)

app.route('/')
  .get(function (req, res) {
    res.sendFile(process.cwd() + '/views/index.html');
  });

app.get("/userstories", (req,res) => {
    res.sendFile(process.cwd() + '/views/stories.html');
})
  
//For FCC testing purposes
fccTestingRoutes(app);

//Routing for API 
apiRoutes(app);  

    
//404 Not Found Middleware
app.use(function(req, res, next) {
  res.status(404)
    .type('text')
    .send('Not Found');
});

//Start our server and tests!
app.listen(process.env.PORT || 3000, function () {
  console.log("Listening on port " + process.env.PORT);
  if(process.env.NODE_ENV==='test') {
    console.log('Running Tests...');
    setTimeout(function () {
      try {
        runner.run();
      } catch(e) {
        var error = e;
          console.log('Tests are not valid:');
          console.log(error);
      }
    }, 1500);
  }
});

module.exports = app; //for testing
