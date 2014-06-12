//Calls an iterator on each possible permutation
//of the passed-in values array
var eachPermutation = function(values, iterator) {

  var innerPermute = function(permutation, remainingValues) {
    if (remainingValues.length === 0) {
      iterator(permutation);
    } else {
      for (var i=0; i<remainingValues.length; i++) {
        //Create copy of remainingValues
        var newRemaining = remainingValues.slice();

        //Remove and save the ith entry in the new remaining values array
        var toPush = newRemaining.splice(i,1)[0];

        //Creates a copy of the permutation list so far
        var newPermutation = permutation.slice();

        //Adds the new value to the new permutation list
        newPermutation.push(toPush);

        //Recursively calls this function with the new lists
        innerPermute(newPermutation, newRemaining);
      }
    }
  };
  innerPermute([], values);
};