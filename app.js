const express = require('express');

const app =express();
const bodyparser=require('body-parser');
const exphbs = require('express-handlebars')
const path=require('path');
const routes=require('./routes/main_rts');
var {Host,Port }=require('./config/configuration');


app.use(express.urlencoded({extended:true}));
app.use(express.static(path.join(__dirname,'public')));

//Set viewengine
app.engine('hbs', exphbs({ layoutsDirectory:path.join(__dirname,'views/layout'),
defaultLayout: 'default', extname: '.hbs' }));
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');


//routes
app.use('/',routes);

app.listen(process.env.port || Port, ()=>{
    console.log(Host);
}); 
