////////////////////// FUNCTIONS//////////////////////////

/*
- Function is a subprogram designed to perform a particular task
-Functions are only executed when called or invoked
-Values can be passed, and functions must always return a value, either it's undefined. 
- Functions are function objects. Because in Javascript everything
  that is not a primitve type (undefined, null, boolean, number, string)
  is an object! 
 -Objects are versatile, we can pass a function as a parameter into another funtion!
 - When a function accepts another as a paremeter = Higher Order Function
 - ex (Array.prototype.map or Array.prototype.filter)
 -Function definitions are hoisted, expressions are not (scope)
*/


/*
Function Declaration = Function Definition = Function Statement

1.- The Name of the Function
2.- A list of parameters enclosed in parentheses and separated by commas
	these will be substituted by arguments which is our input
3.- Statemenents that define the function, enclosed in curly brackets {}
4.- Must have a return statement for an output. 

*/

// ex 1) Declaration 

/*function name(parameters) {
	statements
}*/



// ex 2) Calling the function

//name(parameters);

//////////Function Expressions 


let name2 = function(parameters){
//	statements
}

/*
	- Convenient when passing a function as an argument to another function
*/

//ex 1) Assign a function to a variable 

var square = function(num) {return num * num}

//ex 2) NAMED FUNCTION: name can be provided and used inside function to refer to itself, or in debugger to identify the function in stack traces


var factorial = function fac(n) {return n < 2 ? 1: n * fac(n-1);}


/// We also have Arrow Function Expressions
/* This is a shorter syntax for writing function expression.
-Arrow Functions do not create their own this value.
*/

/////Parameters vs. Arguments

/*
-Parameters are used when defining a function, they are names created in function definition, 
 they are separated by commas inside the parentheses)
- Arguments they are the values the function receives from 
  each parameter when the function is invoked. 
- So the parameters become arguments! 
*/

let name3 = (parameters) => {
	//statements;
}

////////////////// Function Scope 

/*
 Functions can see and modify variables in parent or global scope. the inverse is not true
 Functions hold its own block of code independent from global scope. 
-Expressions are not hoisted to a Global scope so whatrever is in the
	{BODY} will remain only there and undefined outside of it. 
*/


const song = 'jammin';


function addSong(title, artist) {
	var song = artist + ': ' + title;
    console.log(song); // Django: Dinette
    return song;
}

console.log(addSong('Dinette', 'Django')) // Django: Dinette

console.log(song); // jammin (we changed song inside addSong(), but outside of its scope song holds initial value)

/*
-Global scope: anything outside of a function
-Local scope: local to a function body
-functions enclose a scope and protect their variables from parent scopes and global scope - privacy
-functions can acces variables in parent scopes! But parent scope cannot acess variables in child scope
*/

let a = 10;
function doThis() {
	a = 1;
}

console.log(a); // 10
doThis();
console.log(a); //1 'a is accesible inside doThis() scope and can therefore modify it'

function doThat() {
	var x = 3;
	console.log(x);
}

//console.log(x); // ReferenceError: a is not defined

// Nested scopes - function defined within other function

function doEverything() {
	let b = 'one';
	function doMore(){
		b = 'bee'
	}
	doMore();
	console.log(b); // 'bee' 'b is accesible within child scope of doMore()'
}

/////////////////// Closures - Maintaining acces to values by enclosing them in function bodies.


/*
Closure- an inner function that has access to the outer (enclosing) 
  function's variables - scope chain. it has three
  		1.- acces to its own scope (variables defined between its curly brackets)
  		2.- Acces to outer function's variables 
  		3.- Acces to global variables

- inner function has access to outer function's variables AND parameters
- inner function cannot call the outer function's arguments, even though it can call parameters directly
-simply put you create a closure by adding a function inside another function.

1.- Closures have acces to outer function's variable even after outer function returns
2.- Closures store references to the outer function's variables, they do not store the actual value.
3.- functions form closures around the data they house. If an object returned from the Function and 
    is held in memory somewhere (referenced), that closure stays ALIVE, and data can continue 
    to exist in these closures! 
*/

