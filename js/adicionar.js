// Função para carregar os produtos do LocalStorage e exibir na lista
function carregarProdutos() {
  const produtos = JSON.parse(localStorage.getItem('produtos')) || [];
  const listaProdutos = document.getElementById('lista-produtos');
  listaProdutos.innerHTML = ''; // Limpar a lista antes de recarregar

  produtos.forEach((produto, index) => {
    const li = document.createElement('li');
    li.innerHTML = `
      <span>${produto.nome} - R$ ${produto.preco} - Custo: R$ ${produto.custo}</span>
      <button onclick="editarProduto(${index})">Editar</button>
      <button onclick="excluirProduto(${index})">Excluir</button>
    `;
    listaProdutos.appendChild(li);
  });
}

// Função para adicionar um novo produto
document.getElementById('form-adicionar-produto').addEventListener('submit', function(e) {
  e.preventDefault();

  const nome = document.getElementById('nome').value;
  const preco = document.getElementById('preco').value;
  const custo = document.getElementById('custo').value;

  const produto = {
    nome: nome,
    preco: parseFloat(preco),
    custo: parseFloat(custo)
  };

  let produtos = JSON.parse(localStorage.getItem('produtos')) || [];
  produtos.push(produto);

  localStorage.setItem('produtos', JSON.stringify(produtos));

  document.getElementById('form-adicionar-produto').reset();
  carregarProdutos(); // Atualizar a lista de produtos

  alert('Produto adicionado com sucesso!');
});

// Função para editar um produto
function editarProduto(index) {
  let produtos = JSON.parse(localStorage.getItem('produtos')) || [];
  const produto = produtos[index];

  // Preencher o formulário com os dados do produto
  document.getElementById('nome').value = produto.nome;
  document.getElementById('preco').value = produto.preco;
  document.getElementById('custo').value = produto.custo;

  // Atualizar o botão de submit para editar o produto
  const form = document.getElementById('form-adicionar-produto');
  form.onsubmit = function(e) {
    e.preventDefault();

    produto.nome = document.getElementById('nome').value;
    produto.preco = parseFloat(document.getElementById('preco').value);
    produto.custo = parseFloat(document.getElementById('custo').value);

    produtos[index] = produto; // Substitui o produto editado no array

    localStorage.setItem('produtos', JSON.stringify(produtos));

    document.getElementById('form-adicionar-produto').reset();
    carregarProdutos(); // Atualizar a lista de produtos

    alert('Produto atualizado com sucesso!');
  };
}

// Função para excluir um produto
function excluirProduto(index) {
  let produtos = JSON.parse(localStorage.getItem('produtos')) || [];
  produtos.splice(index, 1); // Remove o produto pelo índice

  localStorage.setItem('produtos', JSON.stringify(produtos));

  carregarProdutos(); // Atualizar a lista de produtos

  alert('Produto excluído com sucesso!');
}

// Carregar os produtos ao iniciar a página
carregarProdutos();
