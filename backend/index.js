const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const db = require('./db'); // Importa a conexão com o banco de dados

const app = express();
const PORT = 5000;

app.use(cors());
app.use(bodyParser.json());

// Rota inicial
app.get('/', (req, res) => {
    res.send('API da loja de cupcakes funcionando!');
});

// Rota para listar produtos
app.get('/produtos', (req, res) => {
    db.query('SELECT * FROM Produtos', (err, results) => {
        if (err) {
            console.error('Erro ao buscar produtos:', err.message);
            res.status(500).json({ error: 'Erro ao buscar produtos' });
        } else {
            res.json(results);
        }
    });
});

app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});
