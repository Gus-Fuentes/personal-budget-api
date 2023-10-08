let envelopes = [];
let totalBudget = 0;
let id = 1;

//Create Envelope's data validation middleware
const envDataValidation = (req, res, next)=>{
    const id = req.body.envelope.id
    const name = req.body.envelope.name
    const budget = req.body.envelope.budget

    if (id && name && budget){
        next()
    } else {
        const error = new Error("body.envelope is missing 'id, name, budget' properties")
        res.status(428).send(error.message) // 428 Precondition Required
    }
}

export default {
    envelopes, 
    totalBudget, 
    id,
    envDataValidation
};