The 'eachPermutation' function accepts a list and a callback function.  It will pass each possible permutation of the list to the callback function.

Example:

eachPermutation([1,2,3], function(perm) {
  console.log(perm.join(","));
});

will output the following to the console:

"1,2,3"
"1,3,2"
"2,1,3"
"2,3,1"
"3,1,2"
"3,2,1"