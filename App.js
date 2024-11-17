const express = require('express');
const mysql = require('mysql2');
const app = express();
const port = 3000;

// Configuração da conexão com o MySQL
const db = mysql.createConnection({
  host: '34.66.37.29',
  user: 'root',
  password: '99553598li',
  database: 'sistema_producao'
});

// Conexão com o banco de dados
db.connect(err => {
  if (err) {
    console.error('Erro ao conectar ao banco de dados:', err);
    return;
  }
  console.log('Conectado ao banco de dados MySQL!');
});

// Usando o middleware para parsear os dados do body
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Rota para adicionar um produto no banco de dados
app.post('/adicionar-produto', (req, res) => {
  const { nome, peso_pacote, preco_kg } = req.body;

  const query = 'INSERT INTO produtos (nome, peso_pacote, preco_kg) VALUES (?, ?, ?)';
  db.query(query, [nome, peso_pacote, preco_kg], (err, result) => {
    if (err) {
      res.status(500).send('Erro ao adicionar produto.');
      return;
    }
    res.status(200).send('Produto adicionado com sucesso!');
  });
});

// Rota para registrar a produção no banco de dados
app.post('/registrar-producao', (req, res) => {
  const { data, produto_id, lote, fardos, pacotes } = req.body;

  const query = 'INSERT INTO producao (data, produto_id, lote, fardos, pacotes) VALUES (?, ?, ?, ?, ?)';
  db.query(query, [data, produto_id, lote, fardos, pacotes], (err, result) => {
    if (err) {
      res.status(500).send('Erro ao registrar produção.');
      return;
    }
    res.status(200).send('Produção registrada com sucesso!');
  });
});

// Rota para obter os produtos cadastrados
app.get('/produtos', (req, res) => {
  const query = 'SELECT * FROM produtos';
  db.query(query, (err, results) => {
    if (err) {
      res.status(500).send('Erro ao buscar produtos.');
      return;
    }
    res.status(200).json(results);
  });
});

// Rota para obter os registros de produção
app.get('/producao', (req, res) => {
  const query = 'SELECT * FROM producao';
  db.query(query, (err, results) => {
    if (err) {
      res.status(500).send('Erro ao buscar registros de produção.');
      return;
    }
    res.status(200).json(results);
  });
});

// Iniciar o servidor
app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
});
