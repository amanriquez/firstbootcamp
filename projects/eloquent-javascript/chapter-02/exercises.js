
////////////////////////////////////////////////////////////////////////////////
// triangles ///////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function triangles(num) {
  
  for (var i = '#'; i.length <= num; i += '#') console.log(i);
  
}
////////////////////////////////////////////////////////////////////////////////
// fizzBuzz ////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function fizzBuzz() {
  
    for (let i = 1; i <= 15; i++) {
        
        if (i % 3 === 0 && i % 5 === 0){
            console.log('fizzbuzz');
        } else if (i % 3 === 0){
            console.log('fizz')
        } else if( i % 5 === 0){
            console.log('buzz')
        } else {
            console.log(i);
        }

    }
    

}

////////////////////////////////////////////////////////////////////////////////
// drawChessboard //////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function drawChessboard(num) {

var str = '';

for (var l = 0; l < num; l++){
   for (var c = 0; c < num; c++){
        if ((l + c) % 2 === 0){
          str += ' ';
        } else {
          str += '#';
        }
   }
          str += '\n';
}

console.log(str);
return str;

}

////////////////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

if ((typeof process !== 'undefined') &&
  (typeof process.versions.node !== 'undefined')) {
  module.exports = {
    triangles,
    fizzBuzz,
    drawChessboard,
  };
}