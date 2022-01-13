/**
 * You must return a date that comes in a predetermined number of seconds after 01.06.2020 00:00:002020
 * @param {number} seconds
 * @returns {Date}
 *
 * @example
 *      31536000 -> 01.06.2021
 *      0 -> 01.06.2020
 *      86400 -> 02.06.2020
 */


function secondsToDate(seconds) {
    let date = new Date(2020,5, 1, 0, 0, 002020);
    date.setSeconds(seconds);
    return date.toLocaleDateString("ru");
}

let a = secondsToDate(31536000);
let b = secondsToDate(0);
let c = secondsToDate(86400);
console.log('method should return 31536000 -> 01.06.2021, value:'+a);
console.log('method should return 31536000 -> 01.06.2021, value:'+b);
console.log('method should return 31536000 -> 01.06.2021, value:'+c);

/**
 * You must create a function that returns a base 2 (binary) representation of a base 10 (decimal) string number
 * ! Numbers will always be below 1024 (not including 1024)
 * ! You are not able to use parseInt
 * @param {number} decimal
 * @return {string}
 *
 * @example
 *      5 -> "101"
 *      10 -> "1010"
 */

function toBase2Converter(decimal) {
  if (decimal < 1024) {
    return Number(decimal).toString(2);
  }
  return "number should be less than 1024";
}

console.log('method should return 5 -> "101", value:'+ toBase2Converter(5));
console.log('method should return 10 -> "1010", value:'+ toBase2Converter(10));


/**
 * You must create a function that takes two strings as arguments and returns the number of times the first string
 * is found in the text.
 * @param {string} substring
 * @param {string} text
 * @return {number}
 *
 * @example
 *      'a', 'test it' -> 0
 *      't', 'test it' -> 2
 *      'T', 'test it' -> 2
 */
function substringOccurrencesCounter(substring, text) {
  let count = 0;
for (let i = 0; i < text.length; i++) {
  let indexOfSubstring = text
    .toLowerCase()
    .indexOf(substring.toLowerCase(), i);
  if (indexOfSubstring >= 0) {
    count++;
    i += indexOfSubstring;
  }
}
return count;
}

console.log('method should return \'a\', \'test it\' -> 0, value:'+ substringOccurrencesCounter('a','test it'));
console.log('method should return \'t\', \'test it\' -> 3, value:'+ substringOccurrencesCounter('t','test it'));
console.log('method should return \'T\', \'test it\' -> 3, value:'+ substringOccurrencesCounter('T','test it'));



/**
 * You must create a function that takes a string and returns a string in which each character is repeated once.
 *
 * @param {string} string
 * @return {string}
 *
 * @example
 *      "Hello" -> "HHeelloo"
 *      "Hello world" -> "HHeello  wworrldd" // o, l is repeated more then once. Space was also repeated
 */
function repeatingLitters(string) {
  let result = "";
  for (let i = 0; i < string.length; i++) {
    let symbol = string[i];
    result += symbol;
  if (string.indexOf(symbol) == string.lastIndexOf(symbol)) {
    result += symbol;
  }
 }
  return result;
}


console.log('method should return "Hello" -> "HHeelloo", value:'+repeatingLitters('Hello'));
console.log('method should return "Hello world" -> "HHeello  wworrldd", value:'+repeatingLitters('Hello world'));



/**
 * You must write a function redundant that takes in a string str and returns a function that returns str.
 * ! Your function should return a function, not a string.
 *
 * @param {string} str
 * @return {function}
 *
 * @example
 *      const f1 = redundant("apple")
 *      f1() ➞ "apple"
 *
 *      const f2 = redundant("pear")
 *      f2() ➞ "pear"
 *
 *      const f3 = redundant("")
 *      f3() ➞ ""
 */
function redundant(str) {
  return function (){
    return str;
  }
}

const f1 = redundant("apple")
const f2 = redundant("pear")
const f3 = redundant("")
console.log('method should return const f1 = redundant("apple") f1() ➞ "apple" , value:'+ f1());
console.log('method should return const f2 = redundant("pear") f2() ➞ "pear" , value:'+ f2());
console.log('method should return const f3 = redundant("") f3() ➞ "" , value:'+ f3());



/**
 * https://en.wikipedia.org/wiki/Tower_of_Hanoi
 *
 * @param {number} disks
 * @return {number}
 */
function towerHanoiRe(disks) {
  let count = 0;
 function stepsToSolve(disks) {
   if (disks >= 1) {
      stepsToSolve(disks - 1);
      stepsToSolve(disks - 1);
     count++;
   }
   return;
 }
 stepsToSolve(disks);
 return count;
}

function towerHanoiForm(disks) {
  let count = Math.pow(2,disks)-1;
 return count;
}


console.log(towerHanoiRe(6));
console.log(towerHanoiForm(6));


/**
 * You must create a function that multiplies two matricies (n x n each).
 *
 * @param {array} matrix1
 * @param {array} matrix2
 * @return {array}
 *
 */
function matrixMultiplication(matrix1, matrix2) {
  let rowsM1 = matrix1.length;
  let columnsM1 = matrix1[0].length;
  let rowsM2 = matrix2.length;
  let columnsM2 = matrix2[0].length;
  let matrixMultiplicated = [];
  if (rowsM1!=columnsM2){
    return "it's imposssible multiply this matrix"
  }

  for (let i = 0; i < rowsM1; i++) {
   matrixMultiplicated[i] = [];
 }

  for (let g=0; g<columnsM2; g++){
    for (let i=0; i<rowsM1; i++){
      let number = 0;
      for (let j=0; j<rowsM2; j++){
        number += matrix1[i][j] * matrix2[j][g];
      }
      matrixMultiplicated[i][g] = number;
    }
  }
  return matrixMultiplicated;
 }

matrix1 = [[1,3],[2,1]];
matrix2 = [[4,3],[2,1]];

matrix3 = matrixMultiplication(matrix1,matrix2);
console.log(matrix3);



/**
 * Create a gather function that accepts a string argument and returns another function.
 * The function calls should support continued chaining until order is called.
 * order should accept a number as an argument and return another function.
 * The function calls should support continued chaining until get is called.
 * get should return all of the arguments provided to the gather functions as a string in the order specified in the order functions.
 *
 * @param {string} str
 * @return {string}
 *
 * @example
 *      gather("a")("b")("c").order(0)(1)(2).get() ➞ "abc"
 *      gather("a")("b")("c").order(2)(1)(0).get() ➞ "cba"
 *      gather("e")("l")("o")("l")("!")("h").order(5)(0)(1)(3)(2)(4).get()  ➞ "hello"
 */
function gather(str) {
    let text = [str];
    let indexes = [];
    let add = function (char) {
      text.push(char);
      return add;
    };

    add.order = function (index) {
      indexes.push(index);
      return add.order;
    };

    add.order.get = function () {
      let result = [];
      indexes.forEach(element => {
        result.push(text[element]);
      });
      return result.join("");
    };
     return add;
}


  console.log(gather("a")("b")("c").order(0)(1)(2).get());
  console.log(gather("a")("b")("c").order(2)(1)(0).get());
  console.log(gather("e")("l")("o")("l")("!")("h").order(5)(0)(1)(3)(2)(4).get());
