const express = require('express');
const engine = require('ejs-mate');
const path = require('path');
//initializations
const app = express();

// setings
app.engine('ejs', engine);
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// routes
app.use(require('./routes/'));

app.listen(3000, ()=>{
    console.log('Server on port 3000');
});