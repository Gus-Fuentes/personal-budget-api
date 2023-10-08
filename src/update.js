import global from "./global.js"
import express from "express"

const updateRoute = express.Router()

updateRoute.use(express.json())

updateRoute.put("/:id", envDataValidation, (req, res, next)=>{
    const id = Number(req.params.id)
})