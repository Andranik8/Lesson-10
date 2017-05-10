function myFunction(a,b) {
    return a *b;
}
myFunction(4,3);


//-----------------------
function calculateDogAge(age) {
    var dogYears = 7 *age;
    console.log(dogYears);
}
    calculateDogAge(1)
    calculateDogAge(2);

//--------------------------
function calculate(age) {
    var currentYear = 2017;
    var birthYear = currentYear - age;
    console.log(birthYear);
}
calculate(24);
//---------------------------
var cube = function(x) {
return x * x * x;
};


console.log(cube(5));
console.log(cube("test"));

var cube = function (x) {
    if (typeof(x) == "Sport") return true;
};
 cube("Sport");

 console.log(cube("Sport"));

 //---------------------------
 var w = 15;
 var volume = function (w,l,h) {
     return w * l * h;

 };
 volume(2,3,4);
 console.log(w);

 //-----------------------------

 var volume = function (w,l,h) {
     var area = w * l;
     console.log("inside the function,area is " + area);
     return area * h;
 };
 console.log("The volume is " + volume(2,3,4));
 console.log("Outside the function,area is " + area);