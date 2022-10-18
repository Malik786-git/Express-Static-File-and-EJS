import express from 'express';
import web from './routes/web.js'
import {join} from 'path';

const app = express();


// setup the directory where ejs or template file are located
// app.set('views', './views') // humare case me views me hi ejs file hy tu agr hum isy comment kare tu bh by default chale ga. 
// app.set('views', './myviews') // need to write if file in my views folder.  


// setup static file
app.use(express.static(join(process.cwd(), 'public')));


//setup what template engine we use
app.set('view engine', 'ejs');



app.use('/', web);



app.listen(3000, ()=>{
    console.log('my app run on localhost:3000');
})

