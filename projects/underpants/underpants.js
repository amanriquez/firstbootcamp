// This makes the arguments variable behave the way we want it to and a few
// other things. For more info:
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Strict_mode
'use strict';

var _ = {};



/**
* START OF OUR LIBRARY!
* Implement each function below it's instructions
*/

/** _.identity()
* Arguments:
*   1) Anything
* Objectives:
*   1) Returns <anything> unchanged
* Examples:
*   _.identity(5) === 5
*   _.identity({a: "b"}) === {a: "b"}
*/

_.identity = function(anything){
    return anything;
}


/** _.typeOf()
* Arguments:
*   1) Anything
* Objectives:
*   1) Return the type of <anything> as a string
*       Types are one of:
*          - "string"
*          - "array"
*          - "object"
*          - "undefined"
*          - "number"
*          - "boolean"
*          - "null"
*          - "function"
* Examples:
* _.typeOf(134) -> "number"
* _.typeOf("javascript") -> "string"
* _.typeOf([1,2,3]) -> "array"
*/

_.typeOf = function(anything){
    let result = '';
    
    // if (typeof anything === 'number'){
    //     result = 'number';
    // } else if (typeof anything === 'function'){
    //     result = 'function';
    // } else if (typeof anything === 'string'){
    //     result = 'string';
    // } else if (typeof anything === 'boolean'){
    //     result = 'boolean';
    // } else if (typeof anything === 'undefined'){
    //     result = 'undefined';
    
    if (Array.isArray(anything)){
        result = 'array';
    } else if (anything instanceof Date){
        result = 'date'
    } else if (anything === null){
            result = 'null'
    } else {
        result = typeof anything;
    }
    
    return result;
}

/** _.first()
* Arguments:
*   1) An array
*   2) A number
* Objectives:
*   1) If <array> is not an array, return []
*   2) If <number> is not given or not a number, return just the first element in <array>.
*   3) Otherwise, return the first <number> items of <array>
* Gotchas:
*   1) What if <number> is negative?
*   2) What if <number> is greater than <array>.length?
* Examples:
*   _.first("ponies", 1) -> []
*   _.first(["a", "b", "c"], "ponies") -> "a"
*   _.first(["a", "b", "c"], 1) -> "a"
*   _.first(["a", "b", "c"], 2) -> ["a", "b"]
*/

_.first = function(array, number){
   
    let newArr= [];
   
    if (!Array.isArray(array)){
        return newArr;
    }
    
    if (number === undefined || isNaN(number)){
        return array[0];
    }
    
    if (number > array.length){
        number = array.length;
    }
    
    for (var i = 0; i < number; i++){
        newArr.push(array[i]);
    }
    return newArr;
}

//OR

_.first = function(array, number){
   
    let newArr= [];
   
    if (!Array.isArray(array) || number < 0){
        return newArr;
    }
    
    if (number === undefined || isNaN(number)){
        return array[0];
    }
    
    if (number > array.length){
        number = array.length;
    }
    
 let arri = [];
    
_.each(array, e => {
        
        if (_.indexOf(array, e) < number){
            arri.push(e);

        }

});

return arri;

}



/** _.last()
* Arguments:
*   1) An array
*   2) A number
* Objectives:
*   1) If <array> is not an array, return []
*   2) If <number> is not given or not a number, return just the last element in <array>.
*   3) Otherwise, return the last <number> items of <array>
* Gotchas:
*   1) What if <number> is negative?
*   2) What if <number> is greater than <array>.length?
* Examples:
*   _.last("ponies", 2) -> []
*   _.last(["a", "b", "c"], "ponies") -> "c"
*   _.last(["a", "b", "c"], 1) -> "c"
*   _.last(["a", "b", "c"], 2) -> ["b", "c"]
*/

// _.last = function(array, number){
    
//     let newArr = [];
    
//     if (!Array.isArray(array)){
//         return newArr;
//     } 
    
//     if (number === undefined || isNaN(number)){
//         return array[array.length - 1];
//     }
    
//      if (number > array.length){
//         return array;
//     }
    
//     if (number < 0){
//         return newArr;
//     }
    
    
//     for (let i = array.length -1; i >= array.length - number; i--){
//         newArr.push(array[i]);
//         newArr.reverse();
//     }
    
//     return newArr;
// }

//OR LAST with HOF

_.last = function(array, number){
    
    let newArr = [];
    
    if (!Array.isArray(array)){
        return newArr;
    } 
    
    if (number === undefined || isNaN(number)){
        return array[array.length - 1];
    }
    
     if (number > array.length){
        return array;
    }
    
    if (number < 0){
        return newArr;
    }
    
    _.each(array, e => {
        
    if (_.indexOf(array, e) >= array.length - number){
            newArr.push(e);

    }

});

return newArr;
    
    
}


/** _.each()
* Arguments:
*   1) A collection
*   2) A function
* Objectives:
*   1) if <collection> is an array, call <function> once for each element
*      with the arguments:
*         the element, it's index, <collection>
*   2) if <collection> is an object, call <function> once for each property
*      with the arguments:
*         the property's value, it's key, <collection>
* Examples:
*   _.each(["a","b","c"], function(e,i,a){ console.log(e)});
*      -> should log "a" "b" "c" to the console
*/

_.each = function(collec, func) {
    
    if (Array.isArray(collec)){
        for (var i = 0; i < collec.length; i++){
            func(collec[i], i, collec);
        }
    } else if (_.typeOf(collec) === 'object'){
        for (var key in collec){
            func(collec[key], key, collec);
        }
    }
    
    
}



/** _.indexOf()
* Arguments:
*   1) An array
*   2) A value
* Objectives:
*   1) Return the index of <array> that is the first occurrance of <value>
*   2) Return -1 if <value> is not in <array>
*   3) Do not use [].indexOf()!
* Gotchas:
*   1) What if <array> has multiple occurances of val?
*   2) What if <val> isn't in <array>?
* Examples:
*   _.indexOf(["a","b","c"], "c") -> 2
*   _.indexOf(["a","b","c"], "d") -> -1
*/

_.indexOf = function(array, value) {
    
    for (var i = 0; i <array.length; i++){
        if (array[i] === value){
            return i;
        } 
    }
    return -1;
}

// OR indexOf with HOF

//  _.indexOf = function(array, value){
    
//     let newArr = [];
    
    
// _.each(array, function(e, i, a){
    
    
//     if (e === value){
//         newArr.push(i);
//     }
    
// })    
   
//  if (newArr.length) return newArr[0];
//  else return -1;
    

// }




/** _.filter()
* Arguments:
*   1) An array
*   2) A function
* Objectives:
*   1) call <function> for each element in <array> passing the arguments:
*      the element, it's index, <array>
*   2) return a new array of elements for which calling <function> returned true
* Gotchas:
*   1) What if <function> returns something other than true or false?
* Examples:
*   _.filter([1,2,3,4,5], function(x){return x%2 === 0}) -> [2,4]
* Extra Credit:
*   use _.each in your implementation
*/

_.filter = function(array, func){
    
    let newArr = [];
    
    
    for (var i = 0; i < array.length; i++){
        //func(array[i], i, array);
            if (func(array[i], i, array) === true){
                newArr.push(array[i]);
            }
    }
    
    return newArr;
}

/** _.reject()
* Arguments:
*   1) An array
*   2) A function
* Objectives:
*   1) call <function> for each element in <array> passing the arguments:
*      the element, it's index, <array>
*   2) return a new array of elements for which calling <function> returned false
*   3) This is the logical inverse if _.filter(), you must use _.filter() in your implementation
* Examples:
*   _.reject([1,2,3,4,5], function(e){return e%2 === 0}) -> [1,3,5]
*/


// _.reject =  function(array, func){
    
// let arrayNot = _.filter(array, func);
// let arrayYes = [];

// for (var i = 0; i < array.length; i++){
//     if (arrayNot.indexOf(array[i]) === -1){
//         arrayYes.push(array[i]);
//     }
// }

// return arrayYes;

// }

//OR

_.reject = function(array, action){
    
    let arri = [];
    
    _.each(array, function(e, i, a){
    
    if (!action(e, i, a)){
        arri.push(e);
        }

    });

return arri;

}





/** _.partition()
* Arguments:
*   1) An array
*   2) A function
* Objectives:
*   1) Call <function> for each element in <array> passing it the arguments:
*       element, key, <array>
*   2) Return an array that is made up of 2 sub arrays:
*       0) An array that contains all the values for which <function> returned something truthy
*       1) An array that contains all the values for which <function> returned something falsy
* Gotchas:
*   1) This is going to return an array of arrays.
* Examples:
*   _.partition([1,2,3,4,5], function(element,index,arr){
*     return element % 2 === 0;
*   }); -> [[2,4],[1,3,5]]
}
*/

_.partition = function(array, func){
    
    let arrayTotal = [];
    let arrayTruthy = [];
    let arrayFalsey = [];
    let key;
    
    for (var i = 0; i <array.length; i++){
        if (func(array[i], key, array) === true){
            arrayTruthy.push(array[i]);
        } else {
            arrayFalsey.push(array[i]);
        }
     
     
    }
    //console.log(arrayTruthy);
    arrayTotal.push(arrayTruthy);
    arrayTotal.push(arrayFalsey);
    return arrayTotal;

}

// OR PARTITION with HOF





/** _.unique()
* Arguments:
*   1) An array
* Objectives:
*   1) Return a new array of all elements from <array> with duplicates removed
*   2) Use _.indexOf() from above
* Examples:
*   _.unique([1,2,2,4,5,6,5,2]) -> [1,2,4,5,6]
*/

_.unique =  function(array){
    
    let newArr = [];
    
    for (var i = 0; i <array.length; i++){
        if (_.indexOf(newArr, array[i]) < 0){
            newArr.push(array[i]);
        }
        
    }
    return newArr;
}

//newArr.indexOf(array[i])

/** _.map()
* Arguments:
*   1) A collection
*   2) a function
* Objectives:
*   1) call <function> for each element in <collection> passing the arguments:
*        if <collection> is an array:
*            the element, it's index, <collection>
*        if <collection> is an object:
*            the value, it's key, <collection>
*   2) save the return value of each <function> call in a new array
*   3) return the new array
* Examples:
*   _.map([1,2,3,4], function(e){return e * 2}) -> [2,4,6,8]
*/


// _.map = function(coll, func) {
    
//     let newArr = [];
    
//     if (Array.isArray(coll)){
//         for (var i = 0; i <coll.length; i++){
//             newArr.push(func(coll[i], i, coll));
//         }
//     } else {
//         for (var key in coll){
//             newArr.push(func(coll[key], key, coll));
//         }
//     }
    
//   return newArr;
// }

// OR

_.map = function(collection, action){
    
    let arri = [];
    
    _.each(collection, function(e, i, a){
        
        arri.push(action(e, i, a));
        
    });
    
    return arri;
    
}



/** _.pluck()
* Arguments:
*   1) An array of objects
*   2) A property
* Objectives:
*   1) Return an array containing the value of <property> for every element in <array>
*   2) You must use _.map() in your implementation.
* Examples:
*   _.pluck([{a: "one"}, {a: "two"}], "a") -> ["one", "two"]
*/

_.pluck = function(array, key){
    
let values = [];    

let myFunc = function(element){
    values.push(element[key]);
}

_.map(array, myFunc);

return values

}

// function (element) {values.push(element[key]);
// (element) => values.push(element[key]) return 

/** _.contains()
* Arguments:
*   1) An array
*   2) A value
* Objectives:
*   1) Return true if <array> contains <value>
*   2) Return false otherwise
*   3) You must use the ternary operator in your implementation.
* Gotchas:
*   1) did you use === ?
*   2) what if no <value> is given?
* Examples:
*   _.contains([1,"two", 3.14], "two") -> true
*/



_.contains = function(array, value) {
    
    
     let truth = (array.indexOf(value) !== -1) ? true:false

    return truth;
    
}




/** _.every()
* Arguments:
*   1) A collection
*   2) A function
* Objectives:
*   1) Call <function> for every element of <collection> with the paramaters:
*      if <collection> is an array:
*          current element, it's index, <collection>
*      if <collection> is an object:
*          current value, current key, <collection>
*   2) If the return value of calling <function> for every element is true, return true
*   3) If even one of them returns false, return false
*   4) If <function> is not provided, return true if every element is truthy, otherwise return false
* Gotchas:
*   1) what if <function> doesn't return a boolean
*   2) What if <function> is not given?
* Examples:
*   _.every([2,4,6], function(e){return e % 2 === 0}) -> true
*   _.every([1,2,3], function(e){return e % 2 === 0}) -> false
*/

_.every = function(coll, func){
//     console.log("starting outer function with contents: " + JSON.stringify(coll) + " and " + func);
//     if(typeof(func) !== 'function') {func = x => x}
//     console.log("function is: " + func);
//     return recurse_every(coll, func);
    
//     function recurse_every(coll, func){
//         console.log("at top with: " + JSON.stringify(coll));
//         // base cases
//         if(coll.length === 1) {return func(coll[0]) === true}
//         // recursive case
//         else if(coll.length > 1){ return func(coll[0]) && recurse_every(coll.slice(1), func); }
//     }
// }


    
    let newArr = [];
    
    function isTrue(current){
        if (current){
            return true;
        } else {
            return false;
        }
    
    }
    
    if (typeof func !== 'function'){
        for (var i = 0; i < coll.length; i++ ) {
            if (coll[i] === false){
                return false;
            }
        }
        return true;
    }
    
    if (Array.isArray(coll)) {
        for (var i = 0; i < coll.length; i++) {
          if (func(coll[i], i, coll) === true) {
              newArr.push(coll[i]);
          }
        }
        if (newArr.length === coll.length){
            return true;
        } else {
            return false;
        }
           
    } 
    
    
    if (typeof coll === 'object') {
        for (var key in coll) {
          if (func(coll[key], key, coll) === false){
            return false;
        }
        
        }
      return true;
    }
 
 return false;
    
}




/** _.some()
* Arguments:
*   1) A collection
*   2) A function
* Objectives:
*   1) Call <function> for every element of <collection> with the paramaters:
*       if <collection> is an array:
*        current element, it's index, <collection>
*       if <collection> is an object:
*        current value, current key, <collection>
*   2) If the return value of calling <function> is true for at least one element, return true
*   3) If it is false for all elements, return false
*   4) If <function> is not provided return true if at least one element is truthy, otherwise return false
* Gotchas:
*   1) what if <function> doesn't return a boolean
*   2) What if <function> is not given?
* Examples:
*   _.some([1,3,5], function(e){return e % 2 === 0}) -> false
*   _.some([1,2,3], function(e){return e % 2 === 0}) -> true
*/

_.some = function(coll, func){
    let newArr = [];
    
    // function isTrue(current){
    //     if (current){
    //         return true;
    //     } else {
    //         return false;
    //     }
    
    // }
    
    if (typeof func !== 'function'){
        if (Array.isArray(coll)) {
        for (var i = 0; i < coll.length; i++) {
           if (coll[i] === true){
               return true;
           } 
        }
        return false;
    }
    }
    
    if (Array.isArray(coll)) {
        for (var i = 0; i < coll.length; i++) {
           if (func(coll[i], i, coll) === true){
               return true;
           } 
        }
        return false;

    }
           
     if (typeof coll === 'object') {
        for (var key in coll){
           if (func(coll[key], key, coll) === true){
               return true;
           }
        }
        return false;
    }
 
 return false;
    
}


/** _.reduce()
* Arguments:
*   1) An array
*   2) A function
*   3) A seed
* Objectives:
*   1) Call <function> for every element in <collection> passing the arguments:
*         previous result, element, index
*   2) Use the return value of <function> as the "previous result"
*      for the next iteration
*   3) On the very first iteration, use <seed> as the "previous result"
*   4) If no <seed> was given, use the first element/value of <collection> as <seed>
*   5) After the last iteration, return the return value of the final <function> call
* Gotchas:
*   1) What if <seed> is not given?
* Examples:
*   _.reduce([1,2,3], function(previousSum, currentValue, currentIndex){ return previousSum + currentValue }, 0) -> 6
*/

// _.reduce = function(array, action, seed){
    
    
//     //loop over the array
//     for (let i =0; i <array.length; i++){
//         if (seed === undefined){
//             seed = array[i];
//         } else {
//             seed = action(seed, array[i], i);
//         }
//     }
//     //call function for seed, current element, index
//     // set return of action to new seed
//     // on first iteration use seed as seed
//     //if no seed, set seed to first element of collection 
//     //return seed
//           return seed;

// }

//OR REDUCE with HOF

_.reduce = function(array, action, seed) {
   
    let noSeed = arguments.length < 3;

    _.each(array, (e, i, a) => {
        if (noSeed) {
            noSeed = false;
            seed = e;
        } else {
            seed = action(seed, e, i, a);
        }
    });

    return seed;
};


//check if the first iteration is undefined then set seed to first element in array  

/** _.extend()
* Arguments:
*   1) An Object
*   2) An Object
*   ...Possibly more objects
* Objectives:
*   1) Copy properties from <object 2> to <object 1>
*   2) If more objects are passed in, copy their properties to <object 1> as well, in the order they are passed in.
*   3) Return the update <object 1>
* Examples:
*   var data = {a:"one"};
*   _.extend(data, {b:"two"}); -> data now equals {a:"one",b:"two"}
*   _.extend(data, {a:"two"}); -> data now equals {a:"two"}
*/



// _.extend = function(object){
    
// let objects = Array.prototype.slice.call(arguments);

// for (var i = 0; i < objects.length; i++){
//     Object.assign(object, objects[i]);
// }

// return object;

// }
    
/*
EXTEND with HOF
*/

_.extend = function(object){
    
let objects = Array.prototype.slice.call(arguments);

_.reduce(objects, (a, b) => {
    
    if (a == null || a == undefined){
        a = object;
    }
    
    Object.assign(a, b);

});
    

return object;

}
    
    
    
    
    
    
//     Object.assign(object1, object2);
    
//     for (let i = 1; i <arguments.length; i++){
//         Object.assign(object1, arguments);
//     }
    
//     return object1;
    
// }


//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

if((typeof process !== 'undefined') &&
   (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports = _;
}


 // let result;
    
    // if (seed === undefined) {
    //     seed = func(result, array[i], i);
    // } 
    
    // for (var i = 0; i < array.length; i++){
    //     if (func(result, array[0], i) === undefined){
            
            
    //     } else {
    //     let result = seed;
    //     result  = func(result, array[i], i);
 
    //     }
    // } 
    // return result;