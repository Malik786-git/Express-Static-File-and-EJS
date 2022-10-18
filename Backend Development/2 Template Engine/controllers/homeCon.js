const homeCon = (req, res)=>{
    // res.render('index')
    // pass local variable to index.ejs file and use in index.ejs file.
    res.render('index', {'name':'malik_programmer'})
}

export {homeCon}