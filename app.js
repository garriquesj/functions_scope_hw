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
