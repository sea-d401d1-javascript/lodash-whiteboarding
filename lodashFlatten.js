var _flattenRecurse = function(arr) {
  var collected = [];
  arr.forEach((elem) => {
    if(Array.isArray(elem) {
      collected = collected.concat(_flattenRecurse(elem));
      } else {
      collected.push(elem);
      }
  }};
      return collected;
      }
