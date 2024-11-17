// Dados simulados (substitua por dados reais no futuro)
const dados = {
  totalProduzido: 1200, // Total produzido em kg
  mediaProduzida: 150, // Média diária
  rentabilidade: 0.35, // Rentabilidade como percentual (ex: 0.35 = 35%)
};

// Atualizar valores no Dashboard
document.getElementById("total-produzido").querySelector("p").textContent = `${dados.totalProduzido} kg`;
document.getElementById("media-produzida").querySelector("p").textContent = `${dados.mediaProduzida} kg/dia`;
document.getElementById("rentabilidade").querySelector("p").textContent = `${(dados.rentabilidade * 100).toFixed(2)}%`;

// Função para obter dados do localStorage
function obterDadosProducao() {
  return JSON.parse(localStorage.getItem('producao')) || [];
}

// Função para gerar os dados do gráfico
function atualizarGrafico() {
  const producao = obterDadosProducao();

  // Extrai os dias e as quantidades produzidas dos dados
  const dias = producao.map(item => item.data);
  const quantidades = producao.map(item => item.quantidade);

  // Atualiza o gráfico com os novos dados
  const ctx = document.getElementById('graficoProducao').getContext('2d');
  new Chart(ctx, {
    type: 'line',
    data: {
      labels: dias,
      datasets: [{
        label: 'Produção (kg)',
        data: quantidades,
        borderColor: 'rgba(75, 192, 192, 1)',
        backgroundColor: 'rgba(75, 192, 192, 0.2)',
        borderWidth: 2,
        tension: 0.3,
      }]
    },
    options: {
      responsive: true,
      plugins: {
        legend: {
          position: 'top'
        },
        tooltip: {
          enabled: true
        }
      },
      scales: {
        y: {
          beginAtZero: true
        }
      }
    }
  });
}

// Chama a função para atualizar o gráfico quando a página carregar
window.onload = function() {
  atualizarGrafico();
};

/* Estilizando os botões do cabeçalho */
header nav a {
  background-color: #007bff;
  color: white;
  text-decoration: none;
  padding: 10px 20px;
  border-radius: 5px;
  font-size: 16px;
  margin-right: 10px;
  transition: background-color 0.3s ease;
}

header nav a:hover {
  background-color: #0056b3;
}

header nav .btn-adicionar {
  background-color: #28a745;
}

header nav .btn-adicionar:hover {
  background-color: #218838;
}

header nav .btn-registrar {
  background-color: #ffc107;
}

header nav .btn-registrar:hover {
  background-color: #e0a800;
}

