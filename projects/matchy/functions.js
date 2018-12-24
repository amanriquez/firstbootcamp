/**
 * Part 2
 *
 * In this file, we're going to create some
 * Functions to work with our data created in
 * data.js.
 *
 * See the README for detailed instructions,
 * and read every instruction carefully.
 */

//////////////////////////////////////////////////////////////////////
// Step 1 - Search ///////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////


function search(animals, name) {
    

    for (var i = 0; i < animals.length; i++) {
        if (animals[i].name.toLowerCase() === name.toLowerCase()){
            return animals[i];
       }
    }
    return null;
}



//////////////////////////////////////////////////////////////////////
// Step 2 - Replace //////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function replace(animals, name, replacement){
     for (var i = 0; i < animals.length; i++) {
        if (animals[i].name === name) {
            return animals.splice(i, i, replacement);
            } 
        }
}

//////////////////////////////////////////////////////////////////////
// Step 3 - Remove ///////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function remove(animals, name) {
    for (var i = 0; i < animals.length; i++) {
        if (animals[i].name === name) {
            return animals.splice(i, 1);
    }
}
}

//////////////////////////////////////////////////////////////////////
// Step 4 - Create ///////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

    
function add(animals, animal) {

    var bool = true;
    for (var i = 0; i < animals.length; i++) {

        if (animal.name === animals[i].name) { bool = false; }
        if (animal.name.length === 0) { bool = false };
        if (animal.species.length === 0) { bool = false; }
    }

    if (bool === true) {

    animals.push(animal);

    }

}
    

// 1./*- Checks that the animal Object has a name property with a length > 0.

// var checkNameLength = animal.hasOwnProperty(animal.name.length > 0);

// // 2.- Checks that the animal Object has a species property with a length > 0.

// var checkSpeciesLength = animal.hasOwnProperty(animal.species.length > 0);

// // 3.- Has a unique name, meaning no other animals have that name.
// //var checkUniqueName = animal.hasOwnProperty(animal.name.toLowerCase() !== animals[i].name.toLowerCase());

//  for (var i = 0; i < animals.length; i++) {
       
       
//         if (animals[i].name.toLowerCase() !== animal.name.toLowerCase()){
//             var checkUniqueName = true;
//         }
//       }


// // 4.- Adds this new Object to the animals Array, only if all the other conditions pass.
    
//     if (checkNameLength && checkSpeciesLength && checkUniqueName) {
//         return animals.push(animal);
//     }

/**
 * You did it! You're all done with Matchy!
 */



//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
var search, replace, remove, add;
if((typeof process !== 'undefined') &&
   (typeof process.versions.node !== 'undefined')) {
    module.exports.search = search || null;
    module.exports.replace = replace || null;
    module.exports.remove = remove || null;
    module.exports.add = add || null;
}
