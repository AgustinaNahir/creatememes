const body = document.body;
const btnTheme = document.getElementById("lightMode");

btnTheme.addEventListener("click", () => {
  body.classList.toggle('light-theme');
  let modoOscuro = body.classList.contains('light-theme')
  if(modoOscuro){
    btnTheme.innerText = "Modo claro"
  }
  else{
    btnTheme.innerText = "Modo oscuro"
  }
});