const qdpi = document.getElementById("qdpi");
let inputA = document.getElementById("dpi");
let inputB = document.getElementById("sens");

// fazer os calculos ----------------------->

const calculoqdpi = (a, b) => (a * b) / 400;
const calculoodpi = (a, b) => (a * b) / 800;
const calculomodpi = (a, b) => (a * b) / 1200;
const calculomdpi = (a, b) => (a * b) / 1600;
const calculoEdpi = (a, b) => a * b;

const calcular = () => {
  let a = parseFloat(inputA.value);
  let b = parseFloat(inputB.value);

  qdpi.innerHTML = calculoqdpi(a, b).toFixed(3);
  odpi.innerHTML = calculoodpi(a, b).toFixed(3);
  modpi.innerHTML = calculomodpi(a, b).toFixed(3);
  mdpi.innerHTML = calculomdpi(b, a).toFixed(3);
  edpi.innerHTML = calculoEdpi(b, a).toFixed(3);
};

inputB.addEventListener("input", calcular);
