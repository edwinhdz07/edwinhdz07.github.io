//api document: también sirve para acceder a los elementos
//del arbol DOM
const boton = document.getElementById("btn");
console.log(boton);
const contenedor = document.getElementById("contenedor");
var contador = 0;

boton.addEventListener('click' , function (){
    contador++;
    template = `<div class = 'salida'>El total de clicks es 
                ${contador}
            </div>`
    contenedor.insertAdjacentHTML('beforeend' , template);
})