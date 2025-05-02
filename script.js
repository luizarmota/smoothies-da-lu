// Função principal que exibe o resumo do pedido

function mostrarResumo () {
document.getElementById("carregando").classList.add("visivel");

  // Captura o nome do cliente

let nomeCliente = document.getElementById("nome-cliente").value.trim();

 //  Captura as quantidades de cada smoothie

let qtdMorango = parseInt(document.getElementById("qtd-morango").value) || 0;
let qtdManga = parseInt(document.getElementById("qtd-manga").value) || 0;
let qtdAcai = parseInt(document.getElementById("qtd-acai").value) || 0;

  //  Define os preços unitários

let precoMorango = 12.0;
let precoManga = 10.0;
let precoAcai = 14.0;
  
    // Soma total de itens pedidos

  let totalItens = qtdMorango + qtdManga + qtdAcai;

  // Alerta caso nenhum item seja selecionado

  if (totalItens === 0) {
    alert("Por favor, selecione pelo menos 1 smoothie para fazer seu pedido!");
    return;
  }
  
  // Cálculo do valor total
  
let total = qtdMorango * precoMorango + qtdManga * precoManga + qtdAcai * precoAcai;
  
  //  Início do texto do resumo
  
let resumo = `Obrigada por seu pedido${nomeCliente ? ', ' + nomeCliente : ''}! ✨<br>`;
  
  //  Adiciona ao resumo apenas os itens pedidos
  
if (qtdMorango > 0) {
  resumo += `${qtdMorango} smoothie(s) de morango 🍓<br>`;
}
if (qtdManga > 0) {
  resumo += `${qtdManga} smoothie(s) de manga 🥭<br>`;
}
if (qtdAcai > 0) {
  resumo += `${qtdAcai} smoothie(s) de açaí 💜<br>`;
}
  //  Exibe total no final do resumo

resumo += `<br><strong>Total de smoothies: ${totalItens}</strong>`;
resumo += `<br><strong>Total: R$ ${total.toFixed(2)}</strong>`;

    //  Seleciona o campo do resumo para inserir o conteúdo com fade-in

const resumoDiv = document.getElementById("resumo-pedido");
const carregandoDiv = document.getElementById("carregando");

  // Mostra a animação de carregamento
  carregandoDiv.classList.add("visivel");

  // Aguarda 1 segundo antes de mostrar o resultado
  
  setTimeout(() => {
    carregandoDiv.classList.remove("visivel");
//  Remove a classe para reiniciar a animação
    resumoDiv.classList.remove("visivel");
    resumoDiv.style.transition = "none";
    
  //  Força reflow para reiniciar o efeito
    
    void resumoDiv.offsetWidth;
    
  //  Aplica o novo conteúdo com a classe visível

    resumoDiv.style.transition = "";
    resumoDiv.innerHTML = resumo;
    resumoDiv.classList.add("visivel");

  }, 1000);

 
document.getElementById("resumo-pedido").innerHTML = resumo;

}

function limparPedido() {
  document.getElementById("qtd-morango").value = 0;
  document.getElementById("qtd-manga").value = 0;
  document.getElementById("qtd-acai").value = 0;
  document.getElementById("resumo-pedido").innerHTML = "Seu pedido aparecerá aqui...";
}

document.getElementById("btn-finalizar").addEventListener("click", mostrarResumo);
document.getElementById("btn-limpar").addEventListener("click", limparPedido);

window.addEventListener("scroll", function() {
  const botaoTopo = document.getElementById("botao-topo");

  if (window.scrollY > 300) {
    botaoTopo.classList.add("visivel");
  } else {
    botaoTopo.classList.remove("visivel");
  }
});
