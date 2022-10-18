import express from 'express';
import web from './router/web.js'
const app = express();

app.set('view engine', 'ejs')

app.use('/', web);

app.listen(3000, ()=>{
    console.log('localhost: 3000, my app running');
})