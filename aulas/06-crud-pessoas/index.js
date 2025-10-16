const express = require('express');
const app = express();

const cors = require('cors');
app.use(cors());


app.use(express.json());


const pessoasRouter = require('./routes/Pessoas');
app.use(pessoasRouter);


app.listen(3000, () => {
    console.log('Server is running on http://localhost:3000');
});

