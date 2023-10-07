import global from "../global.js"
import express, { Router } from "express"

const envelopeRoute = Router()

envelopeRoute.get("/", (req, res, next)=>{
    console.log(global.envelopes)
    res.send(global.envelopes)
})

export default {envelopeRoute}