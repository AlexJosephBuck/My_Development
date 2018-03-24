////////////////CREATING An Array///////////////

//Creat an empty array and a full array

var emptyBox = [];
var carrotBox = ['Carrot','Carrot','Carrot'];

//declaration of an array with a new operator
var beetBox= new Array('Beet','Beet','Beet')

//console.log the three arrays at different values
console.log(emptyBox[0]);
console.log(carrotBox[2]);
console.log(beetBox[2]);


/////////////PUSH, POPPING, SPLICING/////////////

// Use push() function to add a new element to end of array

beetBox.push('Apple');
var carrotBeetBox = beetBox.push("Carrot");

console.log(beetBox);
console.log(carrotBeetBox);

//fill the emptyBox array by referencing the index
emptyBox[0] = "Lemon";
emptyBox[1] = "Limes";

console.log(emptyBox);

// save the last index of the array emptyBox to a new variable 
// using the pop() method

var removedFruit = emptyBox.pop();

console.log(removedFruit);
//outputs "Limes"

console.log(emptyBox);
//outputs "Lemons"


//Fill the Array emptyBox With "Apple" between index 0 - 2

emptyBox.splice(0,2, "Apple","Apple", "Apple");

console.log(emptyBox);
// ouputs "Apple", "Apple", "Apple"

//use slice() to remove all defined items from the index of emptyBox[]
// save the defined items from the index to a new variable named appleBox

var appleBox = emptyBox.splice(0,3);

console.log(emptyBox);
//outputs [];

console.log(appleBox);
//outputs "Apple", "Apple", "Apple"






