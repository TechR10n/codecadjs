/**
 * Created by ryan on 7/6/15.
 */
console.log("Hello");
console.log("Ryan".length);
//confirm("I feel awesome")
//prompt("What is Ubuntu?")
console.log("thisstrssssssing".length > 10)

if("RyanHammang".length >= 7)
{
    console.log("You have a long name")
}
else
{
    console.log("You have a short name")
}

console.log("Batman".substring(0,3));

console.log("January".substring(0,3));
console.log("Melbourne is great".substring(0,12));
console.log("Hamburgers".substring(3,10));


// Parameter is a number, and we do math with that parameter
var timesTwo = function(number) {
    return number * 2;
};

// Call timesTwo here!
var newNumber = timesTwo(3)
console.log(newNumber);

var quarter = function(number) {
    return number / 4;
}



if (quarter(24) % 3 === 0 ) {
    console.log("The statement is true");
} else {
    console.log("The statement is false");
}

var perimeterBox = function(length, width) {
    return length + length + width + width;
}

console.log(perimeterBox(2,3));