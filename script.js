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

/*filtros de texto*/
let colorText = document.getElementById("color-text");

colorText.addEventListener('blur', (event) =>{
  let colorText = event.target.value;
  topText.style.color = colorText;
});

colorText.addEventListener('blur', (event) =>{
  let colorText = event.target.value;
  bottomText.style.color = colorText;
});

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

/* filtros de imagen*/

let brightnessImg = document.getElementById("brightness-slider");
let opacityImg = document.getElementById("opacity-slider");
/*let contrastImg = document.getElementById("contrast-slider");
let blurImg = document.getElementById("blur-slider");
let grayscaleImg = document.getElementById("grayscale-slider");
let sepiaImg = document.getElementById("sepia-slider");
let hueRotateImg = document.getElementById("hue-rotate-slider");
let saturateImg = document.getElementById("saturate-slider");
let invertImg = document.getElementById("invert-slider");*/

const actualizarFiltros = () => {
  imageContainer.style.filter = `brightness(${brightnessImg.value}) opacity(${opacityImg.value})`;
};

brightnessImg.addEventListener("change", actualizarFiltros);
opacityImg.addEventListener("change", actualizarFiltros);
/*contrastImg.addEventListener("change", actualizarFiltros);
blurImg.addEventListener("change", actualizarFiltros);
grayscaleImg.addEventListener("change", actualizarFiltros);
sepiaImg.addEventListener("change", actualizarFiltros);
hueRotateImg.addEventListener("change", actualizarFiltros);
saturateImg.addEventListener("change", actualizarFiltros);
invertImg.addEventListener("change", actualizarFiltros);*/


let resertFilter = document.getElementById("reset-filter");

const resetarFiltros = () => {
  brightnessImg.value = 100;
  opacityImg.value = 100;

  actualizarFiltros();
};

resertFilter.addEventListener('click', resetarFiltros);


/* fondo transparente, no funciona*/
let transparentBox = document.getElementById('transparent-box')
const transparentBackground = () => {
  let transparent = `${(imageContainer.style.backgroundColor = "#ffffff00")}`
  if (transparentBox.checked){
    topTextContainer.style.backgroundColor = transparent;
    bottomTextContainer.style.backgroundColor = transparent;
  } else {
  
  }
}