const mysql = require('mysql2');

const db = mysql.createConnection({
    host: 'localhost',      // Endereço do servidor MySQL
    user: 'root',           // Usuário do MySQL
    password: 'dontblameitonme',  // Substitua por sua senha do MySQL
    database: 'dream_cake' // Nome do banco de dados que você criou
});

// Testando a conexão
db.connect((err) => {
    if (err) {
        console.error('Erro ao conectar ao banco de dados:', err.message);
        return;
    }
    console.log('Conectado ao banco de dados MySQL!');
});

module.exports = db;
