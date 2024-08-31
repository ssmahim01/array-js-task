// Checking Variables if those are array

var place = ["mirpur", "gazipur", "sherpur"];
var divisions = ("dhaka", "sylhet");

var check1 = (Array.isArray(place));
console.log(check1);
var check2 = (Array.isArray(divisions));
console.log(check2);

var check = Array.isArray(check1, check2);
console.log(check);