/***** ARRAYS *****/

/*
Insertar: push (al final) y unshift (al principio)
Eliminar: pop (al final) y shift (al principio)
Alterar: reverse, sort
*/


/*** PUSH & UNSHIFT ***/
let  arreglo = [1,2,3,4,5];

arreglo.push(6);
console.log("Con push añado al array en la última posición: " + arreglo); //output (6) [1, 2, 3, 4, 5, 6]

arreglo.push(70, 80);
console.log(arreglo); //output (8) [1, 2, 3, 4, 5, 6, 70, 80]

console.log(arreglo.push(99)); // output 9 => el tamaño de nuestro arreglo;
console.log(arreglo); //output (9) [1, 2, 3, 4, 5, 6, 70, 80, 99]

arreglo.unshift(0);
console.log("Con unshift añado al array en la primera posición: " + arreglo);


/*** POP & SHIFT ***/
let quitar = [1,2,3,4,5];

quitar.pop();
console.log("Con pop quito del array en la última posición: " + quitar); //output (4) [1, 2, 3, 4]

quitar.shift();
console.log("Con shift quito del array en la primera posición: " + quitar); //output (4) [2, 3, 4]

/*** REVERSE ***/
let revertir = [1,2,3,4,5];
    revertir.reverse();

    console.log(revertir); // output [5, 4, 3, 2, 1]



    /*** SORT ***/
let  ordenar = [1,2,3,4,5,10,'a','b',100,200];
    ordenar.sort();

    console.log(ordenar); // output [1, 10, 100, 2, 200, 3, 4, 5, "a", "b"]



/*** CONCAT ***/
const list1 = [1, 2, 3];
const list2 = [4, 5, 6];
let completeList = list1.concat(list2);

console.log(completeList); //output [1, 2, 3, 4, 5, 6]

//Podemos observar que no muta ningún arreglo original
console.log(list1); // output [1, 2, 3] 
console.log(list2); // output [4, 5, 6] 



/*** JOIN ***/
const list = [55,14,86,34,98];

const phone = list.join('-');
const phone2 = list.join('.');
const phone3 = list.join('');

console.log(phone); //output "55-14-86-34-98"
console.log(phone2); //output "55.14.86.34.98"
console.log(phone3); //output "5514863498"



/*** INDEX OF ***/

const listarIndice = [1,2,3,4];

console.log(listarIndice.indexOf(3)); //output 2
console.log(listarIndice.indexOf(5)); //output -1



/*** INCLUDES ***/

const pets = ['cat', 'dog', 'bat'];

console.log(pets.includes('cat')); // expected output: true
console.log(pets.includes('at')); // output: false