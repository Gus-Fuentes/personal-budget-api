import global from "../global.js"
import { Router } from "express"

const envelopeRoute = Router()

envelopeRoute.get("/", (req, res, next) => {
    console.log(global.envelopes);
    res.send(global.envelopes);
})

envelopeRoute.get("/:id", (req, res, next) => {
    const id = Number(req.params.id)
    const envelope = global.envelopes.find(env => env.id === id);
    res.send(envelope);
})

export default { envelopeRoute };