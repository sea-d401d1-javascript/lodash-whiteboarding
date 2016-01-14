/*
UNION FUNCTION 
BY NATALIE CHOW, AARON FILSON, SABRINA TEE
WHITEBOARD CODING OF LODASH UNION (https://lodash.com/docs#union)
*/

// union() returns an array of unique values, which are
// generated from all the arrays given as parameters
function union() {
  var temp = [];
  for (var i = 0; i < arguments.length; i++) {
    temp = temp.concat(arguments[i]);
  }
  return temp.filter(function(el, index, arr) {
    return arr.indexOf(el) === index;
  });
}
