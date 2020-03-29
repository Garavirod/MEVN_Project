/********************************** */
// REQUERIMENTS

import express from 'express';
import morgan from 'morgan' //This is useful to know the http request (verbos de http)
import cors from 'cors'; //this is useful for making requests to an external server and avoid the loked by CORS
import path from 'path'; //To access to current path
/********************************** */


/********************************** */
// MIDLEWEARS
const app = express();

//Express configuration uses morgan print on console what request http was requested
app.use(morgan('tiny'));
app.use(cors());
app.use(express.json());
//application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));
//Routes
// app.get('/', (req, res) => {
//     res.send('Hello World!');
// });

const history = require('connect-history-api-fallback'); // Middleware para Vue.js router modo history
app.use(history()); //This goes before
app.use(express.static(path.join(__dirname, 'public'))); //path/public
/********************************** */


/********************************** */
// SETTINGS PORT

//We create a default port for our hosting
app.set('puerto', process.env.PORT || 3000);

//The server will be listenig on port asigned
const port = app.get('puerto');
app.listen(port, () => {
    console.log('Project app listening on port -> ', port);
});
/********************************** */


/**
    Cors is useful to do reuest HTTP from other domain
    es una característica de seguridad del navegador que restringe las solicitudes HTTP de origen cruzado

 */