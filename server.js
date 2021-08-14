/*Description: This is just me testing node+express with a restful api and a web app.
im using nodemon to update my work on realtime.
*/

//simplest express config
const express = require('express');
const app = express();
const port = 3000;

//routes
app.get('/', (req, res) => {
    if(req.query.id == 1){
        res.send(`Hello World! Your parameter id is: ${req.query.id}`);    
    }
    res.send('<h2>Hello World!</h2> <p>This is the welcome page</p>');
});

//start server
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
});