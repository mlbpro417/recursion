// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

var objectStringify = function(obj) {

  var  strings = [];

  _.each(obj, function(val, key){
    if (_.isUndefined(val) || _.isFunction(val)) {
      return;
    }
    strings.push( stringifyJSON(key) + ":" + stringifyJSON(val) );
  });

  return '{' + strings.join(',') + '}';
};

var arrayStringify = function(arr) {
  return "[" + _.map(arr, stringifyJSON).join(",") + "]";
};

var stringifyJSON = function(obj) {
  // your code goes here
  
  // objects stringify
  if ({}.toString.call(obj) === "[object Object]") {
    return objectStringify(obj);

  // arrays
  } else if (Array.isArray(obj)) {
    return arrayStringify(obj);
  // strings
  } else if (typeof obj === "string"){
    return '"' + obj + '"';
  // undefined things
  } else if (typeof obj === "function" || obj === undefined) {
    return;
  // null
  } else if (obj === null) {
    return 'null';
  // numbers, booleans
  } else {
    return obj.toString();
  }
};