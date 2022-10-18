import express from 'express';
import web from './routes/web.js'

const app = express();

app.set('view engine', 'ejs');

app.use('/', web);


app.listen(3000, ()=>{
    console.log('my app running on localhost:3000');
})