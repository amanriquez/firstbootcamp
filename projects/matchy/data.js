/**
 * Part 1
 *
 * In this file, we're going to practice
 * creating and accessing data structues.
 *
 * See the README for detailed instructions,
 * and read every instruction carefully.
 */

//////////////////////////////////////////////////////////////////////
// Step 1 - Object Creation //////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

var animal = {};

animal.species = 'dog';
animal['name'] = 'Tito';
animal.noises = [];
//console.log(animal);



//////////////////////////////////////////////////////////////////////
// Step 2 - Array Creation ///////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

var noises = [];
noises[0] = 'bark';

noises.push('wail');
noises.unshift('zzzz');
noises[noises.length] = 'grrrr';

//console.log(noises.length);
//console.log(noises[noises.length-1]);
//console.log(noises);


//////////////////////////////////////////////////////////////////////
// Step 3 - Combining Step 1 and 2 ///////////////////////////////////
//////////////////////////////////////////////////////////////////////

animal['noises'] = noises;
animal['noises'].push('howl');
//console.log(animal);

/* *******************************************************************
 * Step 4 - Review
 *
 * 1. What are the different ways you can access properties on objects?
 *     You can use bracket or dot notation!
 * 2. What are the different ways of accessing elements on arrays?
 *      Using bracket notation!
 * *******************************************************************
 */

/* *******************************************************************
 * Step 5 - Take a Break!
 *
 * It's super important to give your brain and yourself
 * a rest when you can! Grab a drink and have a think!
 * For like 10 minutes, then, BACK TO WORK! :)
 * *******************************************************************
 */

//////////////////////////////////////////////////////////////////////
// Step 6 - A Collection of Animals //////////////////////////////////
//////////////////////////////////////////////////////////////////////

var animals = [];

animals.push(animal);


var duck =  { species: 'duck', name: 'Jerome', noises: ['quack', 'honk', 'sneeze', 'woosh'] };

animals.push(duck);

console.log(animals);

var cat = {species: 'cat', name: 'Tlali', noises: ['meow', 'scratch', 'hiss'] };

animals.push(cat);

var hedhehog = {species: 'hedhehog', name: 'Nigloo', noises: ['grrr', 'woo', 'lalala'] };

animals.push(hedhehog);

console.log(animals);

console.log(animals.length);
    

//////////////////////////////////////////////////////////////////////
// Step 7 - Making Friends ///////////////////////////////////////////
//////////////////////////////////////////////////////////////////////



// An array of objects should be best, because an array is itself an indexed list and each friend can be an object with their own properties.


var friends = [];

function getRandom(animals){
    return Math.floor(Math.random()*(animals.length));
}

friends[0] = animals[getRandom(animals)].name;

animals[0].friends = friends;




/**
 * Nice work! You're done Part 1. Pat yourself on the back and
 * move onto Part 2 in the file called "functions.js"
 */



//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
var animal, noises, animals, friends, getRandom;
if((typeof process !== 'undefined') &&
   (typeof process.versions.node !== 'undefined')) {
     module.exports.animal = animal || null;
     module.exports.noises = noises || null;
     module.exports.animals = animals || null;
     module.exports.friends = friends || null;
     module.exports.getRandom = getRandom || null;
}
