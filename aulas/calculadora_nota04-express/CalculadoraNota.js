const express = require('express');

const router = express.Router();


router.get('/nota', (req, res, next) => {
    const exercicio = parseFloat(req.query.exercicio);
    const trabalho = parseFloat(req.query.trabalho);
    const prova = parseFloat(req.query.prova);

    console.log(exercicio, trabalho, prova);

    res.send(`A nota final é ${((exercicio + trabalho + prova) / 3).toFixed(2)}`);

    next();
}   )


//Validando notas 

if(
    exercicio < 0 || exercicio > 1 ||
    trabalho < 0 || trabalho > 3 ||
    prova < 0 || prova > 6
){
    return res.status(400).send("Notas inválidas");
}

const notaA2 = exercicio + trabalho + prova;

