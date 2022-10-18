const homeCon = (req, res)=>{
// send local variable..
    // res.render('index', {'name': 'malikProgrammer'})
    // or 

    const data = {
        'name': 'malik m jahangir',
        'id': 11,
        'marks':[80,85,90,94,77]
    }
    res.render('index', data)
}

export {homeCon}