import global from "./global.js"
import express, { Router } from "express"

const generateRoute = Router()

generateRoute.use(express.json())

//TO-DO
// -- !! CONFIRM DATA VALIDATION FROM req.body.envelope

generateRoute.post('/', global.addID, global.envDataValidation, (req, res, next)=>{

    if(req.body.envelope){
        global.envelopes.push(req.body.envelope)
    }
    console.log(req.body.envelope)

    res.send(global.envelopes.filter((env)=>env.id===req.body.envelope.id));
})


export default {generateRoute}