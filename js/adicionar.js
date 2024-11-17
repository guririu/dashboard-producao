document.getElementById('form-adicionar-produto').addEventListener('submit', function(e) {
  e.preventDefault();

  // Pegando os dados do formulário
  const nome = document.getElementById('nome').value;
  const preco = document.getElementById('preco').value;
  const custo = document.getElementById('custo').value;

  // Criando o objeto de produto
  const produto = {
    nome: nome,
    preco: parseFloat(preco),
    custo: parseFloat(custo)
  };

  // Obtendo os produtos já cadastrados no LocalStorage, ou criando um array vazio
  let produtos = JSON.parse(localStorage.getItem('produtos')) || [];

  // Adicionando o novo produto ao array
  produtos.push(produto);

  // Salvando os produtos atualizados no LocalStorage
  localStorage.setItem('produtos', JSON.stringify(produtos));

  // Limpando o formulário após o envio
  document.getElementById('form-adicionar-produto').reset();

  alert('Produto adicionado com sucesso!');
});
