
// what does Strict mode offer
/*  Makes debugging easier.
    Prevents accidental globals
    Eliminates this coercion.
    Disallows duplicate property names or parameter values.
    Makes eval() safer.
    Throws error on invalid usage of delete.
*/


// Discuss possible ways to write a function isInteger(x) that determines if x is an integer.
function isInteger(x) { return (typeof x === 'number') && (x % 1 === 0); }


// write a pailindrome  i.e. level
function isPalindrome(str) { return str.split('').reverse().join('') === str; }



// floating point numbers
console.log(0.1 + 0.2 == 0.3); = 0.30000000000000004 // as all Numbers in JavaScript are all treated with floating point precision



console.log(1 +  "2" + "2"); // 122
console.log(1 +  +"2" + "2"); // 32
console.log(1 +  -"1" + "2"); // 02
console.log(+"1" +  "1" + "2"); // 112
console.log( "A" - "B" + "2"); // NaN2
console.log( "A" - "B" + 2); // NaN

+"2" * 3 = 6 // as the + (unary) before the 2 converts it to a number


// What is a potential pitfall with using typeof bar === "object" to determine if bar is an object?
// Although typeof bar === "object" is a reliable way of checking if bar is an object, the surprising gotcha in JavaScript is that null is also considered an object!



// whats the output of the following...
(function(){
    var a = b = 3;
})();

console.log("a undefined? " + (typeof a === 'undefined'));
console.log("b undefined? " + (typeof b === 'undefined'));

b = 3;
var a = b;
Therefore, b ends up being a global variable


// currying
function sum(x) {
    if (arguments.length == 2) {
        return arguments[0] + arguments[1];
    } else {
        return function(y) { return x + y; };
    }
}


