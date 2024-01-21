const cta =  document.querySelector("#cta");
const textChange = document.querySelector("#text-change");
let booleano = false;

cta.addEventListener("click", () => {
  booleano = !booleano;
  console.log(booleano);
  if(booleano){
    textChange.textContent = "@NerfVergil";
  } else {
    textChange.textContent = "@VerDanT";
  }
})