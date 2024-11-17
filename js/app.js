const express = require('express');
const cors = require('cors');
const mysql = require('mysql2');
const dotenv = require('dotenv');

// Configurar variáveis de ambiente
dotenv.config();

// Criar o aplicativo Express
const app = express();
app.use(cors());
app.use(express.json()); // Middleware para interpretar JSON

// Configurar conexão com o MySQL
const db = mysql.createPool({
    host: process.env.DB_HOST, // IP ou nome do host
    user: process.env.DB_USER, // Usuário do banco
    password: process.env.DB_PASS, // Senha do banco
    database: process.env.DB_NAME // Nome do banco
});

// Testar conexão com o banco de dados
db.getConnection((err) => {
    if (err) {
        console.error('Erro ao conectar ao banco de dados:', err);
    } else {
        console.log('Conexão com o banco de dados estabelecida!');
    }
});

// Rota para adicionar produto
app.post('/api/produtos', (req, res) => {
    const { nome, peso, preco_kg } = req.body;

    const query = 'INSERT INTO produtos (nome, peso, preco_kg) VALUES (?, ?, ?)';
    db.query(query, [nome, peso, preco_kg], (err, result) => {
        if (err) {
            console.error('Erro ao adicionar produto:', err);
            res.status(500).json({ error: 'Erro ao adicionar produto' });
        } else {
            res.status(201).json({ id: result.insertId, nome, peso, preco_kg });
        }
    });
});

// Rota para listar produtos
app.get('/api/produtos', (req, res) => {
    const query = 'SELECT * FROM produtos';
    db.query(query, (err, rows) => {
        if (err) {
            console.error('Erro ao buscar produtos:', err);
            res.status(500).json({ error: 'Erro ao buscar produtos' });
        } else {
            res.json(rows);
        }
    });
});

// Configurar a porta do servidor
const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});
