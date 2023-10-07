import global from "../global.js"
import express, { Router } from "express"

const generateRoute = Router()

// const betterRequest = (req, res, next)=>{
//     console.log(req.body)
    
//     if(Object.keys(req.body).length === 0){
//         next()
//     }else{
//         for (let key in req.body){
//             console.log(key);
//         }

//         next()
//     }
// }

generateRoute.use(express.json())

generateRoute.post('/', (req, res, next)=>{
    if(req.body.envelope){
        global.envelopes.push(req.body.envelope)
    }
    console.log(req.body.envelope)

    res.send("hola");
})


export default {generateRoute}