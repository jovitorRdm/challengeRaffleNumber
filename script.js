const numeroDeRepeticoes = document.getElementById("numero-repeticao");
const numeroInicial = document.getElementById("numero-inicial");
const numeroFim = document.getElementById("numero-final");
const form = document.querySelector("form");
const contestRight = document.getElementById("contest-rigth");
const resultadoSort = document.getElementById("resultadoSort");
const resultado = document.getElementById("resultado");
const toggleCheckbox = document.getElementById("toggleCheckbox");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const newSort = {
    id: Date.now(),
    number: Number(numeroDeRepeticoes.value),
    startNumber: Number(numeroInicial.value),
    endNumber: Number(numeroFim.value),
    createdAt: new Date(),
  };
  resultadoSort.innerHTML = "";
  createList(newSort);
  resultado.classList.remove("desativada");
  contestRight.classList.add("desativada");
});
function createList(newSort) {
  const ul = document.createElement("ul");
  const numeros = toggleCheckbox.checked
    ? gerarNumerosUnicos(newSort)
    : gerarListaAleatoria(
        newSort.number,
        newSort.startNumber,
        newSort.endNumber
      );
  numeros.forEach((numero) => {
    const li = document.createElement("li");
    li.textContent = numero;
    li.classList.add("itemLista");
    ul.appendChild(li);
  });
  resultadoSort.appendChild(ul);
}
function gerarNumerosUnicos({ startNumber, endNumber, number }) {
  const range = Array.from(
    { length: endNumber - startNumber + 1 },
    (_, i) => startNumber + i
  );
  const resultado = [];
  for (let i = 0; i < number && range.length > 0; i++) {
    const randomIndex = Math.floor(Math.random() * range.length);
    resultado.push(range.splice(randomIndex, 1)[0]);
  }
  return resultado;
}
function gerarListaAleatoria(quantidade, inicio, fim) {
  return Array.from(
    { length: quantidade },
    () => Math.floor(Math.random() * (fim - inicio + 1)) + inicio
  );
}
