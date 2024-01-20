function geraNumeroAleatorio () {
    return parseInt(Math.random() * 10 + 1);
}

function exibeTextoNaTela(tag, texto) {
    let espaco = document.querySelector(tag);
    espaco.innerHTML = texto;
}

exibeTextoNaTela("h1", "Jogo da Adivinhação");
exibeTextoNaTela("p", "Escolha um número de 1 a 10");
numeroSorteado = geraNumeroAleatorio();
console.log(numeroSorteado);

function verificarChute() {
    let chute = document.querySelector("input").value;
    if (chute == numeroSorteado) {
        exibeTextoNaTela("h1", "ACERTOU!!!");
        exibeTextoNaTela("p", "Parabéns, você adivinhou o número secreto");
    } else {
        menorOuMaior = chute > numeroSorteado ? "menor" : "maior";
            exibeTextoNaTela("p", `O número é ${menorOuMaior}. Tente novamente!`);
        }
}