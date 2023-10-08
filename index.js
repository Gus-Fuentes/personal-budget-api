import express from 'express';
import generate from "./src/generate.js";
import envelopes from "./src/envelopes.js";

const PORT = process.env.PORT || 3000;

const app = express()

app.use("/envelopes/generate", generate.generateRoute)
app.use("/envelopes", envelopes.envelopeRoute)

app.get('/', (req, res, next)=>{
    res.send('Welcome to Personal Budget');
})



app.listen(PORT, ()=>{
    console.log("Server listening on port:", PORT);
})