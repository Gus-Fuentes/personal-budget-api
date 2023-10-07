import global from "../global.js"
import express, { Router } from "express"

const generateRoute = Router()

generateRoute.use(express.json())

generateRoute.post('/', (req, res, next)=>{
    //add an ID to the envelope
    req.body.envelope.id = global.id;
    global.id++

    if(req.body.envelope){
        global.envelopes.push(req.body.envelope)
    }
    console.log(req.body.envelope)

    res.send(global.envelopes.filter((env)=>env.id===req.body.envelope.id));
})


export default {generateRoute}