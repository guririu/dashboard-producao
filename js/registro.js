window.onload = function() {
  // Obtendo os produtos do LocalStorage
  const produtos = JSON.parse(localStorage.getItem('produtos')) || [];

  // Pegando o campo de select de produtos
  const selectProduto = document.getElementById('produto');

  // Preenchendo o select com os produtos armazenados
  produtos.forEach(function(produto) {
    const option = document.createElement('option');
    option.value = produto.nome; // Valor que será enviado
    option.textContent = produto.nome; // Texto que será exibido
    selectProduto.appendChild(option);
  });
};

// Exemplo para salvar a produção no localStorage
function salvarProducao() {
    const nomeProduto = document.getElementById("produto").value;
    const quantidade = document.getElementById("quantidade").value;
    const data = document.getElementById("data").value;

    const produto = {
        nome: nomeProduto,
        quantidade: quantidade,
        data: data
    };

    const producao = JSON.parse(localStorage.getItem("producao")) || [];
    producao.push(produto);
    localStorage.setItem("producao", JSON.stringify(producao));

    alert("Produção registrada com sucesso!");
}
