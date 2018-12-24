// /////////////////////////////////////////////////////////////////////////////
// flatten /////////////////////////////////////////////////////////////////////
// /////////////////////////////////////////////////////////////////////////////

function flatten(array) {

let action = function(total, amount){
    return total.concat(amount)
}

return array.reduce(action, []);


}

// const data = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];
// const flat = data.reduce((total, amount) => {
//   return total.concat(amount);
// }, []);
// flat // [ 1, 2, 3, 4, 5, 6, 7, 8, 9 ]

// /////////////////////////////////////////////////////////////////////////////
// loop ////////////////////////////////////////////////////////////////////////
// /////////////////////////////////////////////////////////////////////////////

function loop(value, testFunction, updateFunction, bodyFunction) {

  for (value; testFunction(value); value = updateFunction(value)){
      bodyFunction(value);
 }
 
 
}

// Write a higher-order function loop that provides something like a for loop statement.
// It takes a value, a test function, an update function, and a body function. 
// Each iteration, it first runs the test function on the current loop value and stops if that returns false. 
// Then it calls the body function, giving it the current value. Finally, it calls the update function
// to create a new value and starts from the beginning.
// When defining the function, you can use a regular loop to do the actual looping

// /////////////////////////////////////////////////////////////////////////////
// every ///////////////////////////////////////////////////////////////////////
// /////////////////////////////////////////////////////////////////////////////

function every(array, action) {
  
  for (let value of array){
      if (!action(value)){
          return false;
      }
  }
  return true;
}



// /////////////////////////////////////////////////////////////////////////////
// dominantDirection ///////////////////////////////////////////////////////////
// /////////////////////////////////////////////////////////////////////////////

function dominantDirection(string) {
    

    //debugger;
    //split string into array
    let charArr = string.split('');
 //charArr.forEach((char) => {
       //loop all characters of the array
      let scripts = countBy(string, char => {
     
        let script = characterScript(char.codePointAt(0));
        return script ? script.direction: 'none';
   });
   
   scripts.sort((a, b) => {
    // console.log(script);
    return a.count - b.count;
   });
   console.log(scripts);
   
   return scripts[scripts.length -1].name;
}
  //       //console.log(scripts);
  //   //console.log(textScripts(string)
  //   //countBy(scripts, characterScript) // this didn't work
       // textScripts(string).replace(/\W/, '').split(' ')

  //charArr.forEach((char) => { // for each element in  do this
    // console.log(char);
    // console.log(characterScript(char.codePointAt(0)));
    // console.log(countBy(charArr, characterScript));
   
   // let scripts = charArr.map((char) => {
      //return characterScript(char.codePointAt(0)); // didnt work
      // console.log(textScripts(char)); // this gives percentage of the entire text
  //return script char belongs to
  
  ////////////////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

if ((typeof process !== 'undefined') &&
  (typeof process.versions.node !== 'undefined')) {
  module.exports = {
    flatten,
    loop,
    every,
    dominantDirection,
  };
};
