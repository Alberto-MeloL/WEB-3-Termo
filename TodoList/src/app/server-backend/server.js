import express from 'express';
import cors from 'cors';
import Tarefa from '../database/tabelaTarefa.js';

const app = express();

const PORTA = process.env.PORTA || 3000;

let tarefas = []
app.use(cors({
    origin: 'http://localhost:4200',
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
  }));
app.get('', (req, res) => {
    res.json(tarefas)
})

app.post('', (req, res) => {
    const tarefa = req.body;
    Tarefa.create(req.body)
    tarefas.push(tarefa)
    console.log(tarefa)
    res.json(tarefa)

})

app.listen(PORTA, () => {
    console.log(`Servidor rodando na porta ${PORTA}`)
})