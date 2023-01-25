x = 1;
var a = 5;
var b = 10;     
var c = function(a, b, c) {
  var x = 10;
  console.log(x); // 10
  console.log(a); // 8
  var f = function(a, b, c) {    
    b = a; // 5 --> 8 por que toma el parametro pasasdo a la function
    console.log(b); // 9 --> lo saca de la function c
    b = c; // function(){...}
    var x = 5;
   }
  f(a,b,c);  // 5
  console.log(b);  // 10 || function(){...}
}
c(8,9,10); // 10, 8, 5,
console.log(b); // 10
console.log(x); // 1

/*
 10
 8
 8
 9
 10
 1
*/


console.log(bar);
console.log(baz); // se rompe
foo();
function foo() { console.log('Hola!'); }
var bar = 1;
baz = 2;




var instructor = "Tony";
if(true) {
   var instructor = "Franco";
}
console.log(instructor); // Franco


var instructor = "Tony";
console.log(instructor); // Tony
(function() {
   if(true) {
      var instructor = "Franco";
      console.log(instructor); // Franco
   }
})();
console.log(instructor); // Tony


var instructor = "Tony";
let pm = "Franco";
if (true) {
    var instructor = "The Flash";
    let pm = "Reverse Flash";
    console.log(instructor); // The flash
    console.log(pm); // Reverse flash
}
console.log(instructor); //The flash
console.log(pm); //Franco

////////////////////////////////////////
6 / "3" //-> string to number
"2" * "3" // 6
4 + 5 + "px" //9px
"$" + 4 + 5  // '$45'
"4" - 2 // 2
"4px" - 2 // NaN
7 / 0 // infiniry
{}[0] // [0]
parseInt("09") // 9
5 && 2 
2 && 5
5 || 0
0 || 5
[3]+[3]-[10] // 33 lo pasa a str y lo hace un str y con el -10 lo pasa a int
3>2>1
[] == ![]

////////////////////////////////////
function test() {
    console.log(a); // undef
    console.log(foo()); // 2
 
    var a = 1;
    function foo() {
       return 2;
    }
 }




var snack = 'Meow Mix';
function getFood(food) {
    if (food) {
        var snack = 'Friskies';
        return snack;
    }
    return snack;
}

getFood(false);



var fullname = 'Juan Perez';
var obj = {
   fullname: 'Natalia Nerea',
   prop: {
      fullname: 'Aurelio De Rosa',
      getFullname: function() {
         return this.fullname;
      }
   }
};

console.log(obj.prop.getFullname());

var test = obj.prop.getFullname;
console.log(test());
///////////////////////////////////////



function printing() {
    console.log(1);
    setTimeout(function() { console.log(2); }, 1000);
    setTimeout(function() { console.log(3); }, 0);
    console.log(4);
 }
 
 printing();