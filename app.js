import express from "express";

const app = express();
const port = 3000;

const lista = [
    { id: 1, name: 'Daniel Larusso' },
    { id: 2, name: 'Johnny Lawrence'}
    ];

app.use(express.json());
app.get('/', (req, res) => {
        res.send(lista)
    }
);

app.listen(port, () => {
    console.log('Servidor conectado com sucesso!');
})

const cors = require('cors');
app.use(cors());
app.use(express.json());
app.get('/', (req,res) => {
    
})