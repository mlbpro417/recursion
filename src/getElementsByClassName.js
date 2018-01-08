// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:

  var getElementsByClassName = function (className, that) {
  if(!that) that = document;
  that = that.childNodes
  var elements = [];
  // loop over all child nodes
  if(that.length > 0){
  // if that node has className, add it to elements
    for(var i = 0; i < that.length; i++){
      var classes = that[i].classList;
      for(key in classes){
        if(classes[key] == className) {
          elements.push(that[i]);
          break;
        }
      }
  // now repeat for each node nested in current child node
      var nestedElements = getElementsByClassName(className,that[i]);
  // and add non-undefined elements one at a time to elements
      for(var j = 0; j < nestedElements.length; j++) if(nestedElements[j]) elements.push(nestedElements[j]);
    }
  }
  return elements

};
