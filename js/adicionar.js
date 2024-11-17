// Função para salvar os produtos no localStorage
function salvarProduto(produto) {
  const produtos = JSON.parse(localStorage.getItem('produtos')) || [];
  produtos.push(produto);
  localStorage.setItem('produtos', JSON.stringify(produtos));
}

// Função para exibir a lista de produtos
function exibirProdutos() {
  const produtos = JSON.parse(localStorage.getItem('produtos')) || [];
  const tabelaProdutos = document.querySelector('#tabela-produtos tbody');
  tabelaProdutos.innerHTML = ''; // Limpa a tabela antes de adicionar os produtos

  produtos.forEach(produto => {
    const tr = document.createElement('tr');
    tr.innerHTML = `
      <td>${produto.nome}</td>
      <td>R$ ${produto.preco.toFixed(2)}</td>
      <td>R$ ${produto.custo.toFixed(2)}</td>
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

// Exibir os produtos quando a página carregar
window.onload = function() {
  exibirProdutos();
};
