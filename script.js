console.log("JS cargado");

let edad; //declaración
edad=18; //asignación
let nombre = "Edwin"; //declaro y asigno
console.log("Mi nombre es "+ nombre)
nombre=50;
console.log(nombre);

var apellidoPaterno = "Hernández"
console.log("Mi apellido es " + apellidoPaterno)

var preferencia = "tacos"
if (true)
{
    let preferencia = "pizza";
    console.log(preferencia);
}
console.log(preferencia);

//var se utiliza para variables globales
//let se utiliza para variables locales
//es decir que su alcance es limitado solo a un bloque 
//de codigo

const sexo="F";
console.log(sexo)
//sexo = "M" //variables del tipo consntante no permiten
//la asignación de nuevos valores
//Uncaught TypeError: Assignment to constant variable.

let template = `Mi nombre es ${nombre} y
                mi apellido es ${apellidoPaterno}
                y mi edad es ${edad}`;
console.log(template)