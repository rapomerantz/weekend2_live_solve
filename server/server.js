//requires
let express = require('express');
let app = express();
let bodyParser = require('body-parser'); 

//uses
app.use(bodyParser.urlencoded({extended: true}));
//look in the server/public folder first 
app.use (express.static('server/public')); 



//vars
let port = 4567; 

//spin up server
app.listen( port, function () {
    console.log('server up on:', port); 
}); //end spin up server`