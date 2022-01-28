function buscaLenteNoSistemas(
  esfericoEsquerdo,
  esfericoDireito,
  cilindricoEsquerdo,
  cilindricoDireito
) {
  const maxEsfericoLentePrime =
    cilindricoEsquerdo < 0 || cilindricoDireito < 0 ? -10 : -12;
  if (
    esfericoEsquerdo <= -3 &&
    esfericoEsquerdo >= maxEsfericoLentePrime &&
    esfericoDireito <= -3 &&
    esfericoDireito >= maxEsfericoLentePrime &&
    cilindricoEsquerdo >= -2 &&
    cilindricoDireito >= -2
  ) {
    document.getElementById("resultado").innerHTML = alert("Lente Prime");
  } else if (cilindricoEsquerdo >= -5 && cilindricoDireito >= -5) {
    document.getElementById("resultado").innerHTML = alert("Lente Vision");
  } else {
    document.getElementById("resultado").innerHTML = alert(
      "Nada encontrado. Por favor, insira um valor válido."
    );
  }
}

function retornar() {
  let esfericoEsquerdo = document.getElementById("grauEsfEsquerdo").value;
  let esfericoDireito = document.getElementById("grauEsfDireito").value;
  let cilindricoEsquerdo = document.getElementById("grauCiliEsquerdo").value;
  let cilindricoDireito = document.getElementById("grauCiliDireito").value;

  buscaLenteNoSistemas(
    esfericoEsquerdo,
    esfericoDireito,
    cilindricoEsquerdo,
    cilindricoDireito
  );
}

//botao fica desabilitado até que todos os campos estejam preenchidos

function checarInput(inputs) {
  var insere = true;

  inputs.forEach(function (input) {
    if (input.value == "") {
      insere = false;
    }
  });

  return insere;
}

var inputs = document.querySelectorAll("input");
var botao = document.querySelector("button");

inputs.forEach(function (input) {
  input.addEventListener("keyup", function () {
    if (checarInput(inputs)) {
      botao.disabled = false;
    } else {
      botao.disabled = true;
    }
  });
});
