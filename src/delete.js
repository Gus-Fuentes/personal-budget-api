import express from "express"
import global from "./global.js"

const deleteRoute = express.Router()

deleteRoute.delete("/:id", (req, res, next)=>{
    const id = Number(req.params.id);
    if(global.envelopes.find(env=>env.id === id)){
        const indexToRemove = global.envelopes.findIndex(env=>env.id === id);
        const deleted = global.envelopes.splice(indexToRemove,1)
    
        res.send(deleted)
    }else {
        res.sendStatus(404)
    }
})

export default {deleteRoute};