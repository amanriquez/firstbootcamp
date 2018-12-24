//////////////////////////////////////////////////////////////////////
// Function 1 - Object Values ////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function objectValues(object) {

    //return Object.values(object);
    
    var valArray = [];
    
    for (var key in object){
        valArray.push(object[key]);
    }
    console.log(valArray)
    return valArray;
} 

//////////////////////////////////////////////////////////////////////
// Function 2 - Keys to String ///////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function keysToString(object) {

// take an object and return all keys in a string separated with a space

return Object.keys(object).join(' ');

}

//////////////////////////////////////////////////////////////////////
// Function 3 - Values to String /////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function valuesToString(object) {
    
    var objArray = [];
    var str;
    
    for (var key in object){
        if (typeof(object[key]) === 'string'){
                objArray.push(object[key]);
        }
    }
    
    str = objArray.join(' ');
    console.log(str);
    
    return str;
    
}

// var objArr = Object.values(object);
// var strArr = [];
// var str = ''

// for (var i = 0; i < objArr.length; i++) {
//     if (typeof(objArr[i]) === 'string'){
//         strArr.push(objArr[i]);
//     }
// }

// str = strArr.join(' ');

// return str;
    


//////////////////////////////////////////////////////////////////////
// Function 4 - Array or Object //////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function arrayOrObject(collection) {
    
    if (Array.isArray(collection)){
        return 'array';
    } else if (typeof(collection) === 'object') {
        return 'object';
    }
    
}

//////////////////////////////////////////////////////////////////////
// Function 5 - Capitalize Word //////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function capitalizeWord(string) {
 

return string.replace(string[0], string[0].toUpperCase()); 

}

//////////////////////////////////////////////////////////////////////
// Function 6 - Capitalize All Words /////////////////////////////////
//////////////////////////////////////////////////////////////////////

function capitalizeAllWords(string) {
    
    let res = string.split(' ');
    for (var i = 0; i < res.length; i++){
        res[i] = res[i].replace(res[i][0], res[i][0].toUpperCase());
    }
    return res.join(' ');
    
}

//////////////////////////////////////////////////////////////////////
// Function 7 - Welcome Message //////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function welcomeMessage(object) {
    
var nameCap = object['name'].replace(object['name'][0], object['name'][0].toUpperCase());     
    
let str = 'Welcome ' + nameCap + '!';
console.log(str);
return str;

}

//////////////////////////////////////////////////////////////////////
// Function 8 - Profile Info /////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function profileInfo(object) {

var nameCap = object['name'].replace(object['name'][0], object['name'][0].toUpperCase());     
var speciesCap = object['species'].replace(object['species'][0], object['species'][0].toLocaleUpperCase());

return nameCap + ' is a ' + speciesCap;


}

//////////////////////////////////////////////////////////////////////
// Function 9 - Maybe Noises /////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function maybeNoises(object) {
 for (var key in object){
        if (key === 'noises' && object['noises'].length > 0){
            return object.noises.join(' ');
        } 
        
    }
    return 'there are no noises';
}


//////////////////////////////////////////////////////////////////////
// Function 10 - Has Words ///////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function hasWord(string, word) {

var strong;

if (string.search(word) > -1){
    strong = true;
} else {
    strong = false;
}

return strong;

}

//////////////////////////////////////////////////////////////////////
// Function 11 - Add Friend //////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function addFriend (name, object) {
object['friends'].push(name);
return object;
}

//////////////////////////////////////////////////////////////////////
// Function 12 - Is Friend ///////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function isFriend(name, object) {
 
var check1 = object.hasOwnProperty('friends');

if (check1 === true) {
    if (object['friends'].indexOf(name) > -1){
        return true;
        } else {
        return false;
    }
} else {
    return false;
}

}

//////////////////////////////////////////////////////////////////////
// Function 13 - Non-Friends /////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function nonFriends(name, array) {
    var friendList = [];
    var desconocidos = [];
    var current;
//loop through array to find out which person/object we're talking about - establish object
    for(var i=0; i<array.length; i++){
        if(array[i].name === name){
            current = array[i];
            console.log(current)
// Then make a list of everyone else that is not that person (dos pajaros de un tiro)
        } else {
            friendList.push(array[i].name);
        }
    }

// Go through list of everyone not that person, and if a name is not in the
// person's friend list, push it to a list of desconocidos
    for(var i=0; i<friendList.length; i++){
        if(current.friends.indexOf(friendList[i]) === -1){
            desconocidos.push(friendList[i]);
        }
    }

    return desconocidos;
}

//////////////////////////////////////////////////////////////////////
// Function 14 - Update Object ///////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function updateObject(object, key, value) {

if (object.hasOwnProperty(key)){
    object[key] = value;
} else {
    object[key] = value;
}

return object;
}

//////////////////////////////////////////////////////////////////////
// Function 15 - Remove Properties ///////////////////////////////////
//////////////////////////////////////////////////////////////////////

function removeProperties(object, array) {
for (let i = 0; i < array.length; i++){
    if (object.hasOwnProperty(array[i])){
        delete object[array[i]];
    }
}
return object;
}

//////////////////////////////////////////////////////////////////////
// Function 16 - Dedup ///////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function dedup(array) {
var uniqueItems = Array.from(new Set(array));
return uniqueItems;
}

//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

if((typeof process !== 'undefined') &&
   (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports.objectValues = objectValues;
    module.exports.keysToString = keysToString;
    module.exports.valuesToString = valuesToString;
    module.exports.arrayOrObject = arrayOrObject;
    module.exports.capitalizeWord = capitalizeWord;
    module.exports.capitalizeAllWords = capitalizeAllWords;
    module.exports.welcomeMessage = welcomeMessage;
    module.exports.profileInfo = profileInfo;
    module.exports.maybeNoises = maybeNoises;
    module.exports.hasWord = hasWord;
    module.exports.addFriend = addFriend;
    module.exports.isFriend = isFriend;
    module.exports.nonFriends = nonFriends;
    module.exports.updateObject = updateObject;
    module.exports.removeProperties = removeProperties;
    module.exports.dedup = dedup;
}