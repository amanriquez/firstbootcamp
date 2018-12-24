// #!/usr/bin/env node

'use strict';

var customers = require('./data/customers.json');
var _ = require('lodown-amanriquez');

/**
 * 1. Import your lodown module using the require() method,
 *    using the string 'lodown-<my-username>', or whatever
 *    name with which you published your npm lodown project.
 *
 * 2. Solve all problems as outlined in the README.
 *
 * 3. We started the first one for you as an example! Make the rest in that style.
 *
 * 4. To test your work, run the following command in your terminal:
 *
 *    npm start --prefix ./projects/let-s-get-functional
 */

// maleCount()

var maleCount = function(array) {

let maleArray = [];

function isMale(object){
    if (object['gender'] === 'male')
    maleArray.push(object)
}

_.filter(array, isMale);

return maleArray.length;

};

//femaleCount()

var femaleCount = function(array){

let countFemale = function(previousSum, currentValue, currentIndex){
    if (currentValue.gender === 'female'){
        return previousSum + 1;
    } else {
        return previousSum;
    }
}

return _.reduce(array, countFemale, 0);

    
};

var oldestCustomer = function (array) {
    
    let largestNumber = function(previous, current){
        return previous.age > current.age ? previous : current;
    };
    
    return _.reduce(array, largestNumber).name;
    
};

var youngestCustomer = function(array){
    let largestNumber = function(previous, current){
        return previous.age < current.age ? previous : current;
    };
    
    return _.reduce(array, largestNumber).name;
};

var averageBalance = function(array){
    
    //Tip: Use the [^0-9] expression to find any character that is NOT a digit or a point.
    //  /[^0-9-.]/g --> anything that is not a number or a point
    // replace(above, '')
    
let balanceArray = [];
    
    for (var i = 0; i < array.length; i++){
        balanceArray.push(parseFloat(array[i].balance.replace(/[^0-9-.]/g, '')))
    }

let action = function(previousSum, currentValue, currentIndex){ 
    return previousSum + currentValue;
    }
    
let totalSum = _.reduce(balanceArray, action);

let avgBalance = totalSum / array.length;

return avgBalance;
    
    
};


var firstLetterCount = function(array, letter){
    
    let arre = [];
    
    for (var i = 0; i < array.length; i++){
        if (array[i].name[0].toUpperCase() === letter.toUpperCase()){
            arre.push(array[i].name);
        }

    }
    
    return arre.length;  
    
// function letterTest(count, name){
//     count = 0;
//      if (name[0].toUpperCase() === letter.toUpperCase()){
//          return count + 1;
//      }else{
//          return count;
//      }
//  }
//  return _.reduce(array, letterTest);

    
};

var friendFirstLetterCount = function(array, customer, letter){
    
    //get the object from the name given
    
    let friendsWithLetter = [];
    let person = {};
    
    for (var i = 0; i < array.length; i++){
        if (array[i].name == customer){
            person = array[i];
        }
    }
    
    let friends = person.friends;
    
    for (var i = 0; i < friends.length; i++){
        if (friends[i].name[0].toUpperCase() === letter.toUpperCase()){
            friendsWithLetter.push(friends[i]);
        }
    }
    
    return friendsWithLetter.length;
    
}

var friendsCount = function(array, name){
    
   // Find the customers' names that have a given customer's name in their friends list
function isFriendsWith(friendsList, customer, index){
    let friends = _.map(customer.friends, (f => f.name))
   // console.log(customer.name + "'s friends: " + friends);
    for (var i = 0; i < friends.length; i++) {
        //console.log(name + " :: " + friends[i]);
        if(friends[i] === name){
            friendsList.push(customer.name);
        }
    }
    return friendsList;
}
    //console.log("looking for: " + name);
    let foundFriends = _.reduce(array, isFriendsWith, []);
    //console.log(foundFriends);
    return foundFriends;
    
    
};

var topThreeTags = function(array){
    

    let arrayOfArrays = _.map(array, e => e.tags);
    let bigArray = [];
    
    for (var i = 0; i < arrayOfArrays.length; i++){
        for (var y = 0; y < arrayOfArrays[i].length; y++){
            bigArray.push(arrayOfArrays[i][y]);
        }
    }
    
    let count = _.reduce(bigArray, (tally, tag) => {
  tally[tag] = (tally[tag] || 0) + 1 ;
  return tally;
} , {});

let sortedArray = Object.keys(count).sort(function (a, b) {
    return count[a] > count[b];
});

console.log(sortedArray.reverse());

return _.first(sortedArray, 3);

    
} ;

// const data = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];
// const flat = data.reduce((total, amount) => {
//   return total.concat(amount);
// }, []);
// flat // [ 1, 2, 3, 4, 5, 6, 7, 8, 9 ]


var genderCount = function(array){

let countMale = function(previousSum, currentValue, currentIndex){
    if (currentValue.gender === 'male'){
        return previousSum + 1;
    } else {
        return previousSum;
    }
}

let countFemale = function(previousSum, currentValue, currentIndex){
    if (currentValue.gender === 'female'){
        return previousSum + 1;
    } else {
        return previousSum;
    }
}

let countTrans = function(previousSum, currentValue, currentIndex){
    if (currentValue.gender === 'transgender'){
        return previousSum + 1;
    } else {
        return previousSum;
    }
}

let numMale = _.reduce(array, countMale, 0)
let numFemale = _.reduce(array, countFemale, 0);
let numTrans = _.reduce(array, countTrans, 0);

return { male: numMale, female: numFemale, transgender: numTrans};
    
}

//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

// here, export any references you need for tests //
module.exports.maleCount = maleCount;
module.exports.femaleCount = femaleCount;
module.exports.oldestCustomer = oldestCustomer;
module.exports.youngestCustomer = youngestCustomer;
module.exports.averageBalance = averageBalance;
module.exports.firstLetterCount = firstLetterCount;
module.exports.friendFirstLetterCount = friendFirstLetterCount;
module.exports.friendsCount = friendsCount;
module.exports.topThreeTags = topThreeTags;
module.exports.genderCount = genderCount;
