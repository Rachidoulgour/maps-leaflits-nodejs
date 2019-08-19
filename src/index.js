const express = require('express');
const engine = require('ejs-mate');
//initializations
const app = express();

// setings
app.engine('ejs', engine);
app.set('view engine', 'ejs');

// routes
app.get('/', (req,res)=>{
    res.render('index');
});

app.listen(3000, ()=>{
    console.log('Server on port 3000');
});