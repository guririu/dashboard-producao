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

// Dados fictícios para o gráfico
const dias = ['Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sáb', 'Dom']; // Dias da semana
const producao = [200, 300, 150, 400, 250, 350, 500]; // Produção por dia

// Configuração do gráfico
const ctx = document.getElementById('graficoProducao').getContext('2d');
new Chart(ctx, {
  type: 'line', // Tipo do gráfico
  data: {
    labels: dias, // Eixo X
    datasets: [{
      label: 'Produção (kg)',
      data: producao, // Valores no eixo Y
      borderColor: 'rgba(75, 192, 192, 1)',
      backgroundColor: 'rgba(75, 192, 192, 0.2)',
      borderWidth: 2,
      tension: 0.3 // Curvatura da linha
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
