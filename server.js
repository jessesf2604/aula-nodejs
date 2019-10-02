const express = require('express');
const bodyParser = require('body-parser');
const bd = require('./bd');

const app = express();
app.use(bodyParser.json)

app.get('/', (req, res) => {
    res.send('<h1>App Online</h1>');
})

app.get('/api/alunos', (req, res)=>{
    res.send('bd.getAlunos');
})

app.post('/api/alunos', (req, res) => {
    bd.addAluno(req.body);
    res.send('Aluno adicionado com sucesso!');
})

app.listen(3000, () => console.log('servidor online'));