
    /*
    * VARIABLES:
    *
    * 0. To hold things in memory during the life-cycle of a program, we can use variables.  Variables
    * are named identifiers that can point to values of a particular type, like a Number, String,
    * Boolean, Array, Object or another data-type.  Variables are called so because once created, we
    * can CHANGE the value (and type of value) to which they point.
    *
    * 1. To create a variable we use the keyword, var, followed by a name (id or alias) for our
    * variable.
    *
    * 2. There are 2 phases of using variables: declaration and initialization (or assignment).
    */

    // 1. declaration //
    var myName;

    /*
    * At the declaration phase, the variable myName is undefined because we have NOT initialized
    * it to anything
    */
    console.log(myName); // prints => undefined

    // 2. initialization or assignment //
    myName = 'john';
    console.log(myName); // prints => john

    // 3. re-assignment //
    myName = 'bob';
    console.log(myName); // prints => bob

    // NOTE: We can assign and re-assign anything to a variable - we cannot do this with constants //
    var myVariable = 1;
    var myVariable = true;
    myVariable = "someString";

    /*
- same as binding
*/

// Variable Scope

/*
- the scope of a variable is controlled by the location 
  of the variable declaration, and defines the part of the
  program where a particular variable is accessible. 
- global and local
-any variable outside of a function belongs to global scope, accesible from anywhere.
- each function has own scope, only available there and nested functions
- local scope = function scope.
- ECMA6 supports block level scope (as in for loops) with let, 
-variables with same name can be specified at multiple layers
 of nested scope. in such cases local variables gain priority over global variables

*/

// ex)

var test = "I'm global";

function testScope() {
  test = "I'm local";

  console.log(test);     
}

console.log(test);  //  I'm global

testScope();  // I'm local

console.log(test);  //  I'm local (the global variable is reassigned)

// Hoisting

/*
Javascript's default behavior of moving declarations to the top
at run time.

1.- Variable Declarations and Function Declarations
2.- Taken to the top of their scope
3.- Different Types hoisted differently
	a) variables: 
		-only name
		-can be declared anywhere
		-available anywhere in scope -  before or after declaration
		-no value until assigned
	b)functions: 
		-name AND body
		-can be declared anywhere
		-available anywhere in scope - before or after declarations
		-assigned value at all times

*/

/// var, let, const

/*
var
	a) you can reassign
	b) has global scope(except if you declare variable inside of function)
let
	a) you can reassign
	b) block scope
const
	a) you CANNOT reassign
	b)block scope

*/