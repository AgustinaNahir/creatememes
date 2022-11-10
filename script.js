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

let btnTxt = document.getElementById("btn-text");
let btnImage = document.getElementById("btn-image");
let asideTxt = document.getElementById("section-text");
let asideImage = document.getElementById("section-image");

btnImage.addEventListener("click", ()=>{
  asideImage.classList.remove("display-none");
  asideTxt.classList.add("display-none");
})

btnTxt.addEventListener("click", ()=>{
  asideTxt.classList.remove("display-none");
  asideImage.classList.add("display-none");
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

/* filtros de imagen*/

let brightnessImg = document.getElementById("brightness");
let opacityImg = document.getElementById("opacity");


/*filtros de texto*/
let colorText = document.getElementById("color-text");

colorText.addEventListener('blur', (event) =>{
  let colorText = event.target.value;
  topText.style.color = colorText;
})

colorText.addEventListener('blur', (event) =>{
  let colorText = event.target.value;
  bottomText.style.color = colorText;
})

let topTextContainer = document.getElementById("top-text-container");
let bottomTextContainer = document.getElementById("bottom-text-container");
let backgroundText = document.getElementById("background-text");

backgroundText.addEventListener('blur', (event) => {
  let backgroundColorText = event.target.value;
  topTextContainer.style.backgroundColor = backgroundColorText;
});

backgroundText.addEventListener('blur', (event) => {
  let backgroundColorText = event.target.value;
  bottomTextContainer.style.backgroundColor = backgroundColorText;
});