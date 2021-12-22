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
const calculateCube = (number) =>{
    console.log(number*number*number);
}
    console.log(calculateCube(5));
    console.log(calculateCube(3));
//     ## 3. Is a Vowel?
// Write a function `isAVowel` that takes a character (i.e. a string of length 1) and returns true if it is a vowel, false otherwise. 
//The vowel could be upper or lower case.
// make an array of vowels and have iterate through it with a boolean, make special explanation for why?
const vowelArray = ["a","e","i","o","u","y","A","E","I","O","U","Y"];
const isAVowel = (letter) => { 
    for (let letter = 0; letter == vowelArray[0]; letter++) {
      if (letter === vowelArray) {
          isAVowel = (true);
      } else (false);
}
}
console.log(isAVowel("a"));
// not mine got stuck using as reference!!!
//function isVowel(char) {
//     if (char.length == 1) {
//       var vowels = new Array("a", "e", "i", "o", "u");
//       var isVowel = false;
  
//       for (e in vowels) {
//         if (vowels[e] == char) {
//           isVowel = true;
//         }
//       }
  
//       return isVowel;
//     }
//   }