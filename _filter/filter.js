var users = [
  { 'user': 'barney', 'age': 36, 'active': true },
  { 'user': 'fred',   'age': 40, 'active': false }
];

function filter(collection, object) {
  var res = [];
  var hasIt = true;
  if (typeof object === 'function') {
    for (var i = 0; i < collection.length; i++) {
      hasIt = true;
      if (!object(collection[i])) {
        hasIt = false;
      }
      if(hasIt) res.push(collection[i]);
    }
  }
  else if (Array.isArray(object)) {
    for (var i = 0; i < collection.length; i++) {
      hasIt = true;
      if (!!object[1] !== !!collection[i][object[0]]) {
        hasIt = false;
      }
      if (hasIt) res.push(collection[i]);
    }
  }
  else if (typeof object === 'object') {
    for (var i = 0; i < collection.length; i++) {
      hasIt = true;
      for(var prop in object) {
        if (collection[i][prop] !== object[prop]) {
          hasIt = false;
        }
      }
      if (hasIt) res.push(collection[i]);
    }
  }
  else {
    for (var i = 0; i < collection.length; i++) {
      hasIt = true;
        if (!collection[i][object.toString()]) {
          hasIt = false;
        }
      if (hasIt) res.push(collection[i]);
    }
  }
  return res;
}

console.log(filter(users, function(o) { return !o.active; }));
console.log(filter(users, { 'age': 36, 'active': true }));
console.log(filter(users, ['active', false]));
console.log(filter(users, 'active'));
