////////////////////////STRING MANIPULATION /////////////

/*  "In Javascript, methods and properties are also available to
	  to primitve values, because Javascript treats primitive values
	  as objects when executing methods and properties" -W3schols
*/

// Operators 


/*
You can concatenate strings with +
*/


//String Methods.

// length property returns length of string.

let stringie = "hello"

let length = stringie.length;

// indexOf() method returns the index of the first occurence of specified text in string

var str = "where is this word?"
var pos = str.indexOf('word');

console.log(pos); // 14

// lastindexOf() returns index of the last occurence of specified text in string

var str = "where is this word, word?"
var pos = str.lastIndexOf('word');

console.log(pos); // 20

/*
- both indexOf() and lastIndexOf() return -1 if text is not found
- both methods accept a second parameter as starting position for search
*/

// search() searches for a specified value and returns position of match
var str = "do locate where 'locate' occurs!";
var pos = str.search("locate");

console.log(pos); // 7

/*
Differences between indexOf() and search():
	a) search() does not accept second parameter
	b) indexOf cannot take powerful search values (regular expressions).
*/

// slice() extracts a part of a string and returns exctracted part in a new string
// (startinx index, ending index positions)

var str = "Madagascar, Timbuktu, Babylon";

var doo = str.slice(12, 20);

console.log(doo); // Timbuktu

/*
-If parameter is negative, the position is counted from 
right to left
- If you omit second parameter, slice() will slice out rest of string
- Negative positions don't work in IE8
-substring() is same thing but won't take negative indexes,
 AND second parameter specifies length of extracted part
*/

//// splice()



//replace() replaces a specified value with another value in a string
// it doesn't change string it's called on, it returns a new string.
//case sensitive

var str3456 = 'everybody wants somebody to love';
var nuevo = str3456.replace('love', 'hate');
console.log(nuevo); // 'everybody wants somebody to hate'

/*
regular expressions!
- to replace case insensitive do /LOVE/i
-to replace all matches, use /love/g (just one match in this case)
*/

// toUpperCase() and toLowerCase() -- useful to compare stuff!

var texto = "Hello";
var texTo = texto.toUpperCase();
console.log(texto); // HELLO

//string.trim() removes whitespace from both sides of a string!

// charAt() method returns character at a specified index (position) in a string
//charCodeAt() returns the unicode of that character

//you can acess string properties just like in 'arrays[0]'' = a!
