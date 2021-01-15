/*
  Write your explanation here as a comment.
  For example, you might say...
    -This function has [insert time complexity], because [some line of code] means [something describing the nature of the implementation]
*/

// Problem 1: Retrieval of a value from a hash table using the following function with regard to the size of the hash table.

/*
 Complexity:
 */

// This function has [o(n)]as time complexity ,because it has [a for loop]

var retrieve = function (key) {
  var hash = 0;
  for (var i = 0; i < key.length; i++) {
    hash = (hash + Math.pow(i, hash)) % array.length;
  }
  return array[hash];
};

// Problem 2: sortedArrayContainsItem with regard to the length of the passed-in array

/*
 Complexity:
 */

//This function has [n log(n)]as time complexity : the recursion takes O(n) and the slicing every time 
//takes O(log(n))

var sortedArrayContainsItem = function (array, item) {
  var center = Math.floor(array.length / 2);
  if (array[center] === item) {
    return true;
  }
  var halfOfArray =
    item < array[center] ? array.slice(0, center) : array.slice(center);
  return sortedArrayContainsItem(halfOfArray, item);
};

// Problem 3: hasDuplicates with regard to the length of the passed in array

/*
 Complexity:
 */

//This function has [o(n²)] : the for loop takes O(n) and the indexOf and the slice takes O(n) 
//(the time complexity of each one of them is O(n) but when they're in the same line their time complexity 
//will be O(n) for both of them)

var hasDuplicates = function (array) {
  for (var i = 0; i < array.length; i++) {
    var item = array[i];
    if (array.slice(i + 1).indexOf(item) !== -1) {
      return true;
    }
  }
  return false;
};
