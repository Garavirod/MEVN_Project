const express = require('express');
const app = express();
const morgan = require('morgan'); //This is useful to know the http request (verbos de http)

app.get('/', function(req, res) {
    res.send('Hello World!');
});
/********************************** */
// SETTINGS PORT
/********************************** */

//We create a default port for our hosting
app.set('puerto', process.env.PORT || 3000);

//The server will be listenig on port asigned
const port = app.get('puerto');
app.listen(port, function() {
    console.log('Project app listening on port -> ', port);
});