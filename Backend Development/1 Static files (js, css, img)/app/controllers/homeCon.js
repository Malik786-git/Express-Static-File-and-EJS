import {join} from 'path';


const homeCon = (req, res) => res.sendFile(join(process.cwd(), 'views', 'index.html'))

export {homeCon}
