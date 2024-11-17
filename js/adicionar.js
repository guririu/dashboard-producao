// Função para salvar os produtos no localStorage
function salvarProduto(produto) {
  const produtos = JSON.parse(localStorage.getItem('produtos')) || [];
  produtos.push(produto);
  localStorage.setItem('produtos', JSON.stringify(produtos));
}

// Função para editar um produto
function editarProduto(index, produtoEditado) {
  const produtos = JSON.parse(localStorage.getItem('produtos')) || [];
  produtos[index] = produtoEditado;
  localStorage.setItem('produtos', JSON.stringify(produtos));
}

// Função para excluir um produto
function excluirProduto(index) {
  const produtos = JSON.parse(localStorage.getItem('produtos')) || [];
  produtos.splice(index, 1);
  localStorage.setItem('produtos', JSON.stringify(produtos));
}

// Função para exibir a lista de produtos
function exibirProdutos() {
  const produtos = JSON.parse(localStorage.getItem('produtos')) || [];
  const tabelaProdutos = document.querySelector('#tabela-produtos tbody');
  tabelaProdutos.innerHTML = ''; // Limpa a tabela antes de adicionar os produtos

  produtos.forEach((produto, index) => {
    const tr = document.createElement('tr');
    tr.innerHTML = `
      <td>${produto.nome}</td>
      <td>R$ ${produto.preco.toFixed(2)}</td>
      <td>R$ ${produto.custo.toFixed(2)}</td>
      <td>
        <button class="editar" onclick="editar(${index})">Editar</button>
        <button class="excluir" onclick="excluir(${index})">Excluir</button>
      </td>
    `;
    tabelaProdutos.appendChild(tr);
  });
}

// Função chamada ao enviar o formulário
document.getElementById('form-produto').addEventListener('submit', function(event) {
  event.preventDefault(); // Evita o envio do formulário

  const nome = document.getElementById('nome').value;
  const preco = parseFloat(document.getElementById('preco').value);
  const custo = parseFloat(document.getElementById('custo').value);

  // Salva o novo produto
  salvarProduto({ nome, preco, custo });

  // Limpa os campos do formulário
  document.getElementById('nome').value = '';
  document.getElementById('preco').value = '';
  document.getElementById('custo').value = '';

  // Atualiza a lista de produtos
  exibirProdutos();

  alert('Produto adicionado com sucesso!');
});

// Função para editar o produto
function editar(index) {
  const produtos = JSON.parse(localStorage.getItem('produtos')) || [];
  const produto = produtos[index];

  document.getElementById('nome').value = produto.nome;
  document.getElementById('preco').value = produto.preco;
  document.getElementById('custo').value = produto.custo;

  // Remove o produto original antes de editar
  excluirProduto(index);
}

// Função para excluir o produto
function excluir(index) {
  if (confirm('Tem certeza que deseja excluir este produto?')) {
    excluirProduto(index);
    exibirProdutos();
  }
}

// Exibir os produtos quando a página carregar
window.onload = function() {
  exibirProdutos();
};
