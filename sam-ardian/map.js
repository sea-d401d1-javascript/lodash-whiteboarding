var map = function(collection, callback) {
  if (Array.isArray(collection)) {
    var toReturn = [];
    for (var i = 0; i < collection.length; i++) {
      var toPush = callback(collection[i], i, collection);
      toReturn.push(toPush);
    }
    return toReturn;
  } else if (typeof collection === "object") {
    toReturn = {};
    for (i in collection) {
      var toAdd = callback(collection[i], i, collection);
      toReturn[i] = toAdd;
    }
    return toReturn;
  } else {
    return 'That is not a collection';
  }
};