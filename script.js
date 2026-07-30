function filtrar(categoria) {
  const cards = document.querySelectorAll('.card');

  cards.forEach(card => {
    if (categoria === 'todos') {
      card.style.display = 'block';
    } else {
      if (card.classList.contains(categoria)) {
        card.style.display = 'block';
      } else {
        card.style.display = 'none';
      }
    }
  });
}
function filtrar(categoria) {
  // 1. Seleciona todos os cards e botões
  const cards = document.querySelectorAll('.card');
  const botoes = document.querySelectorAll('nav button');

  // 2. Remove a classe 'ativo' de todos os botões e adiciona apenas no clicado
  botoes.forEach(btn => btn.classList.remove('ativo'));
  
  // Encontra qual botão foi clicado com base no texto ou evento para aplicar o estilo visual
  const botaoClicado = Array.from(botoes).find(btn => 
    btn.getAttribute('onclick').includes(categoria)
  );
  if (botaoClicado) botaoClicado.classList.add('ativo');

  // 3. Lógica de filtrar os cards
  cards.forEach(card => {
    if (categoria === 'todos') {
      card.classList.remove('escondido');
    } else {
      if (card.classList.contains(categoria)) {
        card.classList.remove('escondido');
      } else {
        card.classList.add('escondido');
      }
    }
  });
}

// Inicializa a página com o botão 'Todos' já destacado visualmente
document.addEventListener("DOMContentLoaded", () => {
  const botaoTodos = document.querySelector("nav button");
  if (botaoTodos) botaoTodos.classList.add("ativo");
});
const btnCurtir = document.getElementById("btnCurtir");

const curtiu = localStorage.getItem("curtiu");

if(curtiu){
    btnCurtir.classList.add("curtido");
    btnCurtir.innerHTML = "❤️ Curtido";
}

btnCurtir.addEventListener("click", () => {
    if(!btnCurtir.classList.contains("curtido")){
        btnCurtir.classList.add("curtido");
        btnCurtir.innerHTML = "❤️ Curtido";
        localStorage.setItem("curtiu", "true");
    }else{
        btnCurtir.classList.remove("curtido");
        btnCurtir.innerHTML = "🤍 Curtir";
        localStorage.removeItem("curtiu");
    }
});
const botoes = document.querySelectorAll(".btnCurtir");

botoes.forEach(botao => {

    const artista = botao.dataset.artista;

    if(localStorage.getItem(artista) === "true"){
        botao.classList.add("ativo");
        botao.innerHTML = "❤️ Curtido";
    }

    botao.addEventListener("click", () => {

        if(localStorage.getItem(artista) === "true"){
            localStorage.removeItem(artista);
            botao.classList.remove("ativo");
            botao.innerHTML = "🤍 Curtir";
        }else{
            localStorage.setItem(artista,"true");
            botao.classList.add("ativo");
            botao.innerHTML = "❤️ Curtido";
        }

    });

});
