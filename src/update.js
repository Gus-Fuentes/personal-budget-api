import global from "./global.js"
import express from "express"

const updateRoute = express.Router()

updateRoute.use(express.json())

updateRoute.put("/", global.envDataValidation, (req, res, next)=>{ // Update envelope by id
    const id = Number(req.body.envelope.id);
    const name = req.body.envelope.name;
    const budget = req.body.envelope.budget;

    console.log(id);
    console.log(typeof id)
    console.log(name);

    const indexEnvToChange = global.envelopes.findIndex(env=>env.id === id);
    console.log(indexEnvToChange)
    global.envelopes[indexEnvToChange].name = name
    global.envelopes[indexEnvToChange].budget = budget

    res.json(global.envelopes[indexEnvToChange])

})

export default {updateRoute};