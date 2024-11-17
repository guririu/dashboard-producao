const express = require('express');
const mysql = require('mysql2');
require('dotenv').config();

const app = express();
const port = process.env.PORT || 3000;

// Conexão com o banco de dados
const db = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  port: process.env.DB_PORT
});

// Testar a conexão
db.connect(err => {
  if (err) {
    console.error("Erro ao conectar ao banco de dados:", err);
  } else {
    console.log("Conexão com o banco de dados bem-sucedida!");
  }
});

// Rota principal
app.get('/', (req, res) => {
  res.send('Servidor está funcionando!');
});

// Subindo o servidor
app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});
