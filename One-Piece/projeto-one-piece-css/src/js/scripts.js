function trocarPersonagem(personagemIndex) {
  const personagens = document.querySelectorAll(".personagem");
  const botoes = document.querySelectorAll(".botao");

  personagens.forEach((personagem) => {
    personagem.classList.remove("selecionado");
  });
  botoes.forEach((botao) => {
    botao.classList.remove("selecionado");
  });

  personagens[personagemIndex].classList.add("selecionado");
  botoes[personagemIndex].classList.add("selecionado");
}
