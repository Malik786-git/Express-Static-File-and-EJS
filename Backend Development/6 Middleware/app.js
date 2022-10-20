import express from 'express';
import myLogger from './middlewares/logger-middleware.js';
import web from './routers/web.js';
import student from './routers/student.js';



const app = express();


app.set('view engine', 'ejs');

// Application Level Middleware
// app.use(myLogger); // this is run each req,  this is called application level middleware, mean run on every route.
// Application level middleware path based
// app.use('/about',myLogger); // this is run specific path. Note: it is also run on path after /about like localhost:3000/about/12. also run on this path. 

app.use('/', web);

//////////////////////////////
// Router Level Middleware
// same as app level , but bounded on router see student.js example
app.use('/', student);




app.listen(3000, ()=>{
    console.log('localhost:3000');
})