//## 1. Verbal questions

//Write answers to the following questions as comments. 

//1. What is the difference between a **parameter** and an **argument**?
    //
//2. Within a function, what is the difference between **return** and **console.log**?
    // a return statement 1 will end the operation of a function and is the result of the operation, 
    //the console.log merely displays what is asked of it in the terminal
//3. What are the implications of the ability of a function to return a value?
    //not sure I am answering this correctly but the return values implies that the function will conduct and operation and that it will give back a specific datatype and
    //its arguments must be a specfic data type.
// ## 2. Calculate the Cube
//     Write a function `calculateCube` that takes a single number and prints the volume of a cube made from that number.
    
// declaration  
// function calculateCube(math.pow(number){
//       console.log(number * number * number);
//   }
//const calculateCube = function calculateCube (number){
//   console.log(number * number * number);
//}
// arrow 
//I need to get math.pow() to work here
const calculateCube = number =>{//doesnt need braces if its one 
    return(number*number*number);// if we are returning 1 thing it doesnt need braces down here?
}

    console.log(calculateCube(5));
    console.log(calculateCube(3));
//     ## 3. Is a Vowel?
// ## 3. Is a Vowel?
// Write a function `isAVowel` that takes a character (i.e. a string of length 1) and returns true if it is a vowel, false otherwise. 
// The vowel could be upper or lower case.


function isAVowel(letter) {
    return ['a', 'e', 'i', 'o', 'u','y','A', 'E', 'E', 'O', 'U','Y' ].indexOf(letter) !== -1// -1 if trying to prove element is present in array 1 said all true 
}
console.log(isAVowel("a"));
console.log(isAVowel("b"));
console.log(isAVowel("A"));
// I was stuck on this for days tried cycling through an array wrote everything out with a||e||o etc, if statements 
//found this on the web i understand it but didnt think of it.

// ## 4. Get Two Lengths

// Write a function `getTwoLengths` that accepts two parameters (strings). 
//The function should return an _array_ of numbers where each number is the length of the corresponding string.

// ```javascript
//using .length 
const getTwoLengths = (string1, string2) => {
    console.log(string1.length, string2.length) 
}
console.log(getTwoLengths("Hank", "Hippopopalous"));

// ## 5. Sum Array
// Write a function `sumArray` that takes an **array** as an argument.
// The array should contain numbers. The function should return the sum of the numbers in the array. **Do not use `.reduce()`**.
let sum = 0 ;
function sumArray (array) {
     // first index
        for (let i = 0; i < array.length ; i++) {// iteration
           sum += array[i]; 
            } //addition, stats at 0 so is always 1 behind i, 
         return sum;    
    }

   
console.log(sumArray([1, 2, 3, 4, 5, 6]));

// ## 6. Prime Numbers
// A Prime number is a number that is not evenly divisible by another number except 1 and itself. If you want to read more deeply about it, [go here](https://en.wikipedia.org/wiki/Prime_number).
// To test whether a number is Prime, you only need to test as far as the **square root** of that number. This is advisable for optimization and testing large numbers.

// ### Step One
// Write a function called `checkPrime` that will test whether a number is Prime. The function will return true (Boolean) if Prime, false if not.
// _Hint:_ Check every number up to the square root. To do this, try a _for loop_.

// ### Step Two
// Write another function called `printPrimes` that will print (console log) all the Primes up to an arbitrary limit. For example, if you invoke your function with `printPrimes(97)`, it will print all the Prime numbers up to and including 97.
// This function can **call on** the previous `checkPrime` function.
// </details>





