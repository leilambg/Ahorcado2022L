let guiones;

palabra.addEventListener("blur", crearGuiones, false);
 
function crearGuiones(){
 
  aciertos.value= "-".repeat(palabra.value.length); 
  
  
  guiones=aciertos.value
}


caracter.addEventListener("keyup",buscarCaracter,false);

function buscarCaracter(){
 
if (caracter.value == "") {
    return
}
;
var carcaterbuscar = caracter.value.toUpperCase();
var palabraA = (palabra.value).toUpperCase();

var posicion = palabraA.indexOf(carcaterbuscar);
var es_acierto = false;
while (posicion > -1) {

    guiones = guiones.substring(0, posicion) + carcaterbuscar + guiones.substr(posicion + 1, guiones.length);
 
   aciertos.value = guiones;
 
    posicion = palabraA.indexOf(carcaterbuscar, posicion + 1);
   
    es_acierto = true;
}
if (!es_acierto) {
   fallos.innerHTML = fallos.innerHTML + carcaterbuscar;
}
caracter.value = "";

}