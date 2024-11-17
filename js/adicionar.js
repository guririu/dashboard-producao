// Função para atualizar os dados de produção no localStorage
function salvarDadosProducao(data, quantidade) {
  // Recupera os dados armazenados no localStorage, ou cria um array vazio
  let producao = JSON.parse(localStorage.getItem('producao')) || [];

  // Adiciona os novos dados ao array
  producao.push({ data: data, quantidade: quantidade });

  // Salva os dados atualizados no localStorage
  localStorage.setItem('producao', JSON.stringify(producao));
}

// Lida com o envio do formulário
document.getElementById('form-producao').addEventListener('submit', function(event) {
  event.preventDefault(); // Evita o envio do formulário

  // Recupera os dados do formulário
  const data = document.getElementById('data').value;
  const quantidade = document.getElementById('quantidade').value;

  // Salva os dados de produção
  salvarDadosProducao(data, quantidade);

  // Limpa os campos do formulário
  document.getElementById('data').value = '';
  document.getElementById('quantidade').value = '';

  alert('Dados de produção adicionados com sucesso!');
});
