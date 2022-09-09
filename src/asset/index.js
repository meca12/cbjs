//query selectorAll nos toma  todos los selectores
//

const h1 =  document.querySelector('h1'); 
const p = document.querySelector('p');
const parrafito = document.querySelector('.parrafito');
const pid = document.querySelector('#pid'); 
const input = document.querySelector('input');
const h5 = document.querySelector('h5');
//cambiamos el texto
h1.innerHTML="LOREM, LOREM EXTRA LOREM";
p.innerHTML="soy el párrafo de esta etiqueta";


//cambiamos estilo

parrafito.style.color ="red";
parrafito.style.fontSize="20";

//para dar clase a  un elemento
//modificar   un atributo
h5.getAttribute('words')//nos ayuda a aleer nuestros atributoss
//h1.setAttribute

console.log(h5.getAttribute('words'));

parrafito.setAttribute("class", "parrafote");

h1.classList.add('rojo'); 
h1.classList.remove('verde');

//input.value="Cuco es la onda";

//crear elementos desde cero

const img = document.createElement('img');

img.setAttribute('src','https://placekitten.com/200/300');

console.log("img");

//eliminar contenido de html
pid.innerHTML = "";

pid.append(img);