const body = document.body;
const btnTheme = document.getElementById("lightMode");

/* Dark mode*/

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

/* Botones de Imagen / Texto aside*/

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

/* input textos */
let topText = document.getElementById('top-text');
let bottomText = document.getElementById('bottom-text');
let inputText = document.getElementById('input-text');
let inputBottom = document.getElementById('input-bottom');

inputText.addEventListener('input', (event) => {
  topText.innerText = event.target.value;
});

inputBottom.addEventListener('input', (event) => {
  bottomText.innerText = event.target.value;
});


/* input link de imagen*/
let url = document.getElementById("inputUrl");
let imageContainer = document.getElementById("img-meme");

url.addEventListener ("input", (event)=>{
imageContainer.style.backgroundImage = `url("${event.target.value}")`;
  
})
/* Boton descarga */
const $ = (selector) => document.querySelector(selector)
let btnDownload = $("#btnDownload");

const downloadMeme = () => {
  domtoimage.toBlob($('.editor-container')).then(function (blob) {
    saveAs(blob, 'mi-meme.jpg');
  });

};

btnDownload.addEventListener("click", downloadMeme);
