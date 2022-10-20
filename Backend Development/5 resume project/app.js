import express from 'express';
import web from './routers/web.js'
import {join} from 'path';


const app = express();
const port = process.env.PORT || '3000';

// setup ejs
app.set('view engine', 'ejs');
// setup static file
app.use(express.static(join(process.cwd(), 'public')));

// main route
app.use('/', web);




app.listen(port, ()=>{
    console.log(`my project running on localhost:${port}`);
})