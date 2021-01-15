// Code goes here
/* Example:
     findDuplicates('hey') // returns []; (empty array)
     findDuplicates('mississippi') // returns ['i', 's', 'p'];
*/

var findDuplicates = function (string) {
  
  // we declare an array to return the values into it
  var result = [];
  //we declare an object to loop into it and check the values repeated
  var obj = {};
  //we'll loop into our input
  for (var i = 0; i < string.length; i++) {
    //we will consider every character in the string as a key in the object "obj"
    // if that key doesn't exist we will assign it to 1
    if (!obj[string[i]]) {
      obj[string[i]] = 1;
    } else {
      // and if the key exist we will increment its value
      obj[string[i]] = obj[string[i]] + 1;
    }
     }
     //finally we will iterate over the object and if the value of a key is higher than 1
     //(that means it's repeated) we will just push the key into our "result" array
  for (var key in obj) {
    if (obj[key] > 1) {
      result.push(key);
    }
     }
     //return our final "result" -_-  
  return result;
};

//Write the complexity of your solution here in a comment

//The time complexity of our solution is O(n) because our 2 for loops are successive not nested 
