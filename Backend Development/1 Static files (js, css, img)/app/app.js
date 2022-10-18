import express, { application } from 'express';
import {join} from 'path';
import web from './routes/web.js'

const app = express();

// static file 
// app.use(express.static('public'))
// through path module (recommended)
// app.use(express.static(join(process.cwd(), 'public')))
// virtual path : here static folder not available, but it is look like virtually. so we need to add src or link or image /static/css/style.css in html file.
// app.use('/static' , express.static(join(process.cwd(), 'public')))
// if we want only include css, similarly for js
// app.use('/css', express.static(join(process.cwd(), 'public/css')))


/////////////////////////////
const options = {
     dotfiles: 'ignore', // we focused on dotfile only..
    // dotfiles: 'allow',
    // dotfiles: 'deny',
    etag: false,
    extension: ['htm', 'html'],
    index: false,
    maxAge: 'id',
    redirect: false,
    setHeader: function (res, path, stat){
        res.set('x-timestamp', Date.now())
    }
}
app.use(express.static(join(process.cwd(), 'public'), options));

// for favicon noo need to write any code express.static get it from public and show on browser. 
// you need only add favicon in public folder.  



app.use('/', web);



app.listen(3000, ()=>{
    console.log('localhost: 3000');
})