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
