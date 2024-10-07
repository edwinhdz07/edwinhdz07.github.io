const boton = document.getElementById("btn");
console.log(boton);
var contador = 0;
var edad = document.getElementById;

boton.addEventListener('click' , function (){
    template = `<div class = 'salida'>La edad es 
                ${edad}
            </div>`
    edad.insertAdjacentHTML('beforeend' , template);
})

