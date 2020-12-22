/********** LOOPS *********/

/*** FOR ***/
for (let i = 0; i < 5; i++) {
    //console.log('Hola')  
}

const array = ['I','L','O','V','E','Y','O','U'];
for (let i = 0; i < array.length; i++) {
    //console.log(array[i]);
}

//*** FOR OF ***/
const array_dos = ['I','L','O','V','E','Y','O','U'];
for (let val of array_dos) {
   // console.log(val);
}


/*** FOR IN ***/
let fruits = {a:'apple', b: 'watermelon', c: 'kiwi'};
for(const prop in fruits){
    //console.log('fruits.' + prop + ' = ' + fruits[prop]);
    /*
    Outputs: 
    fruits.a = apple
    fruits.b = watermelon
    fruits.c = kiwi
    */
}

/*** WHILE ***/
let num = 5;
while (num <= 150) {
    //console.log(num);
    num = num * 5;
    /*
    Outputs: 
    5
    25
    125
    */
}

/*** ARRAY FOREACH ***/
const cars = ['Ferrari 250 GT Berlinetta.', 'Tesla S', 'Génesis G90', 'Porsche Boxster'];
    cars.forEach(element => console.log(element));
/* 
output Ferrari 250 GT Berlinetta
output Tesla S
output Génesis G90
output Porsche Boxster
*/


/*** ARRAY FIND ***/

const coches = ['Ferrari 250 GT Berlinetta.', 'Tesla S', 'Génesis G90', 'Porsche Boxster'];
    let car = coches.find(element=> element === 'Tesla S');
    //console.log(car); 
    //output "Tesla S"

const numbers = [1, 2, 3, 4 , 5];
    let number = numbers.find(element=> element < 3);
    //console.log(number); 
    //output 1



/*** ARRAY MAP ***/

//Ejemplo 1
const numeros = [1, 2, 3, 4 , 5];
    let doubled = numeros.map((num, index) => num * 2);

//console.log(doubled); // output [2, 4, 6, 8 , 10]
//console.log(numeros);// output [1, 2, 3, 4 , 5]


//Ejemplo 2
let list = [1,2,3,4,5,6,7,8,9,10];

const multiplication = (x, y) => {
  return x * y;
}

let multiplicationByTwo = list.map(v => multiplication(2, v));
let multiplicationByThree = list.map(v => multiplication(3, v));

//console.log(multiplicationByTwo); //output [2, 4, 6, 8, 10, 12, 14, 16, 18, 20]
//console.log(multiplicationByThree); //output [3, 6, 9, 12, 15, 18, 21, 24, 27, 30]


/***** ARRAY FILTER *****/

//Ejemplo 1
const numeros_filter = [1, 2, 3, 4 , 5];
    let filterNumbers = numeros_filter.filter(num => num > 3);

//console.log(filterNumbers); // output [4 , 5]
//console.log(numeros_filter); // output [1, 2, 3, 4 , 5]

//Ejemplo 2
const movies = [
    { title: 'Inception', genres: 'Action, Adventure, Sci-Fi', director: 'Christopher Nolan', year: 2010 },
    { title: 'Fight Club', genres: 'Drama', director: 'David Fincher', year: 1999 },
    { title: 'Pulp Fiction', genres: 'Crime, Drama', director: 'Quentin Tarantino', year: 1994 }
  ];
  
  const reformattedArray = movies.filter(obj => obj.genres.includes('Drama'));
  console.log(reformattedArray);
  
  /* output
  [{title: "Fight Club", genres: "Drama", director: "David Fincher", year: 1999},
  {title: "Pulp Fiction", genres: "Crime, Drama", director: "Quentin Tarantino", year: 1994}]
  */


/***** ARRAY REDUCE *****/

const numeros_reduce = [1, 2, 3, 4, 5, 6];
    let sum = numeros_reduce.reduce((accumulator, currentValue) => accumulator + currentValue, 0);

console.log(sum); //output 21

console.log("Comentario nuevo");