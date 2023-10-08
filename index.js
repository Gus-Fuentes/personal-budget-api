import express from 'express';
import generate from "./src/generate.js";
import envelopes from "./src/envelopes.js";
import update from "./src/update.js";
import deleted from "./src/delete.js"

const PORT = process.env.PORT || 3000;

const app = express()

app.use("/envelopes/generate", generate.generateRoute)
app.use("/envelopes", envelopes.envelopeRoute)
app.use("/envelopes/update", update.updateRoute)
app.use("/envelopes/delete", deleted.deleteRoute)

app.get('/', (req, res, next)=>{
    res.send('Welcome to Personal Budget');
})



app.listen(PORT, ()=>{
    console.log("Server listening on port:", PORT);
})