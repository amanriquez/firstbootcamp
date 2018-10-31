////////////////////// OPERATORS//////////////////////////

// 1) Assignment Operators

/*
-We produce statements by assigning variables to values.
- work's different than math's equal (=) sign. In javascript
  this means we assign the value in the right to the variable 
  in the left.
*/

var myName = 'Arnulfo';

let myAme = 'Arnulfo';

const myLast = "Manriquez";



// 2) Arithmetic Operators 

/*
	- take two number values and produce a new number from them
	- when multiple operators, rules of precedence. when multiple o
	  operators with same precedence, apply from left to right.

*/

// Addition

45 + 47;

// Substraction

45 - 23;

// Multiplication

34*23;

// Division

23/23;

// Modulo, gives you the remainder of a division.

10%3;

// 3) Comparison Operators - return Boolean values. 

console.log( 3 > 2 ); // true
console.log( 3 < 2 ); // false 
console.log (3 <= 2); // false
console.log (3 >= 2); // true
console.log( "mama" != 'papa'); // true
console.log('opa' == 'oma'); // false

//console.log( NaN == NaN); // returns false, because NaN denotes result of nonsensical computation, as
//such, it isn't equal to the result of any other nonsensical computation.

// Strict comparison operators also check for the type.

console.log ( 3 === '3'); // returns false
console.log( 3 !== 3); // returns false


// 4) Logical Operators


/*
-Operations that can be applied to boolean values themselves
- And ( && ), or ( || ) and not (!), used to reason about booleans.
*/

console.log(true && false); // returns false. && operator is binary operator where result is true if both values are true

console.log(true && true); // return true

console.log(true || false); // returns true, if either of the values is true it's true.

/* the OR || operator also has functionality to fall back on default value
if you suspect value to be empty, a value that can be converted
to false, such as 0, NaN, empty string, while others true so:
the && operator does the opposite (When value to its left is
something that converts to false, it returns that value,
otherwise it returns the value on its right)
*/

var user;

console.log(0 || -1); // returns -1
console.log('' || '1?'); // returns '!?'
console.log(null || user); // returns 'user'



// NOT or (!) is a unary operator that flips the value given to it

!true == false;

!false == true;

1 + 1 == 2 && 10 * 10 > 50


// Condotional or Ternary operator. 

console.log(true ? 1 : 2); // 1
console.log(false ? 1 : 2); // 2


// 5) Unary Operators (!, typeOf, -)

/*
Not all operators are symbols. some are just one word.
Also Unary operators only needs one operand. the minus operator
can be both binary and unary. 
*/

//ex 1)

console.log(typeof 3); // logs number
console.log(true); // logs boolean


// 6) Ternary Operators (a )  

console.log(true ? 1 : 2); // 1
console.log(false ? 1 : 2); // 2



/*
The value on the left of the question mark "picks" which of the
other two values will come out. When it is true, it chooses the 
middle value, and when it is false, it chooses the value on the rifght. 
*/

