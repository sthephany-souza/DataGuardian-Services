let coll = document.getElementsByClassName("collapsible");
let i;

for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function() {
    this.classList.toggle("action");
    let content = this.nextElementSibling;

    if (content.style.display === "block") {
      content.style.display = "none";
    } else {
      content.style.display = "block";
    }
  });
}

const btnAvancar = document.getElementById("proximo");
const btnVoltar = document.getElementById("anterior");
const cartoes = document.querySelectorAll(".slide");
let cartaoAtual = 0;

btnAvancar.addEventListener("click", function () {
    const ultimoCartao = cartaoAtual === cartoes.length - 1;
    if (ultimoCartao) return;

    esconderCartoes();

    cartaoAtual++;
    mostrarCartoes();
});

btnVoltar.addEventListener("click", function () {
    const primeiroCartao = cartaoAtual === 0;
    if (primeiroCartao) return;

    esconderCartoes();

    cartaoAtual--;
    mostrarCartoes();
});

function mostrarCartoes() {
    cartoes[cartaoAtual].classList.add("aparente");
}

function esconderCartoes() {
    const cartaoSelecionado = document.querySelector(".aparente");
    cartaoSelecionado.classList.remove("aparente");
}