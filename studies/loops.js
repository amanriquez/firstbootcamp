/////////////////////LOOPS /////////////////////////////

/*
-Built in constructs that allow us to execute a block of code 
as many times as needed. 
- iterate over collections of data
-pull out the values of a collection to work with them one by one
- i = index
*/

/// The For Loop

/*
1.- Initialize an index
2.- Stop condition for loop
3.- Incrementation
*/

// ex 1) Looping over Array, counting forwards to whichever limit you want

var myArray = [];

for (var i = 0; i < myArray.length-1; i++){
console.log(myArray[i]);
}

// ex 2) backwards

for (var i = myArray.length - 1; i > -1; i--) {
	console.log(myArray[i]);
}


////// The For-in Loop

/*
- Pulls out all the keys of an object, one by one!
-Allows you to use key to get value in object
- keys are essentially strings. Below variable 'key'
  is populated, one by one, with the keys of the person 
  Object. We use keys to get values.
- Array-syntax with objects. Using brackets, pass a string
  you know to be a key of object. this resolves into value
  of that key. 
  -WARNING: don't use dot-syntax! Always use Array syntax 
    when dynamically accessing elements in the object.
*/

// ex 1) 

var object = {
    name: 'scandal',
    color: 'red',
    smell: 'wild',
}

for (var key in object){
    console.log(object[key]); // logs scandal, red, wild
    console.log(object.key) // logs undefined,undefined, undefined
    console.log(key) // logs name, color, smell
}

/// The while loop

/*
-Keyword while, then (condition that while true will
					  continue to execute block of code in BODY {})
- you usually set up a counter!
*/

var count = 1;
while (count < 15) {
	console.log(count);
	count ++;
}

