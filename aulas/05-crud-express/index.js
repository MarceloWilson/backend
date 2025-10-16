const express = require('express');


const app = express();



app.use(express.json());


const contatosRouter = require('./routes/Contatos');
app.use(contatosRouter);

app.listen(3000, () => {
    console.log('Server is running on http://localhost:3000');
});

