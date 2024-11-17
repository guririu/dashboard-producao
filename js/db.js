const mysql = require('mysql2');

const pool = mysql.createPool({
    host: '34.66.37.29', // Substitua pelo IP público do banco
    user: 'root', // Usuário
    password: '99553598li', // Senha
    database: 'sistema_producao'
});

module.exports = pool.promise();
