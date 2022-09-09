let input1 = document.getElementById("calculo1");
let input2 = document.getElementById("calculo2");
const result = document.getElementById("result"); 
const button = document.getElementById("btnCalcular"); 
const formulario =  document.getElementById("formulario");

formulario.addEventListener("submit",btnOnclick);

function btnOnclick(event){
 //console.log({event});
 event.preventDefault();
  input1 = parseInt(input1.value);
  input2 = parseInt(input2.value);
  const sumaInputs = input1 + input2;
 result.innerHTML="Tu resultado es : "+sumaInputs;


}