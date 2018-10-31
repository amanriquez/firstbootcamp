/////////////////CONTROL FLOW ////////////////////////

/*
-Achieved in javascript through conditional statements
- make decisions in code asking true or false questions,
  based on answer we decided what code runs if true and 
  what code runs if false 
 - If, Else If, else, and Switch
*/

//////If, Else If, and Else

/*
1.- Begin with If
2.- Chain together any number of Else if...
3.- End with an Else (To run if condition is false)
4.- Each part of chain includes: 
	a) (a test condition)
	b) {BODY executed if condition is true}
*/

// ex )

var condition = 'pink';

if (condition === 'yellow'){
	console.log('this is yellow!');
} else if ( condition === 'pink') {
	console.log ('This is pink!');
} else {
	console.log('Did not recognize color');
}

//// Switch

/*
- We use switch to write cleaner code when there are a lot 
  of options
- Switch statement evaluates an input expression, matching the
  expressions value to a case clause, and executes statements 
  associated with that case. break statement should end the case
  and a default statement end all of them. You can run one block
  of code for several different cases. 

*/

var guitar = "Selmer";

switch (guitar) {
	case 'Macaferri':
	case "Selmer":
		console.log('Django!');
		break;
	case 'Fender':
	case 'Ibanez':
		console.log('Rock n roll!');
		break;
		default:
		console.log('Get a guitar!');
}

/*
Keep Trutthy and Falsey In mind. 
*/