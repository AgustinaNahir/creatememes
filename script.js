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

let btnImage = document.getElementById("btn-image");
let btnTxt = document.getElementById("btn-text");
let asideImage = document.getElementById("section-image");
let asideTxt = document.getElementById("section-text");

btnTxt.addEventListener("click", (event)=>{
  asideTxt.classList.remove("display-none");
  asideImage.classList.add("display-none");
})

btnImage.addEventListener("click", (event)=>{
  asideTxt.classList.add("display-none");
  asideImage.classList.remove("display-none");
})


const inputText = document.getElementById('inputText');
const renderText = document.getElementById('renderText');


inputText.addEventListener('input', (event) => {
  const textoIngresado = event.target.value;
  renderText.innerHTML= textoIngresado
})

const inputBotton=document.getElementById("inputBotton");
const bottonText = document.getElementById('bottonText');

inputBotton.addEventListener('input', (Event) => {
  const textoIngresadoB = Event.target.value;
  bottonText.innerHTML = textoIngresadoB ;
  
})

let url = document.getElementById("inputUrl");
let imageContainer = document.getElementById("img-meme");


url.addEventListener ("input", (event)=>{
imageContainer.style.backgroundImage = `url("${event.target.value}")`;
  
})
