//FUNCTIONS
//1
function sum1(v1,v2)
{
    return(v1+v2);
}
//2
function sum(v1,v2,v3)
{
    return(v1+v2+v3);
}
console.log(sum1(10,20));
console.log(sum(10,20,30));
//3
wish=function(){
    console.log("Make a Wish");
}
//Arrow Functions
//4
arrowFunc=()=>{
    console.log("Hey !! I'm inside the arrow function !!");
}
//5
arrowFun1=()=>"Hello Alexa..!!"; 
//6
aF2=(a,b)=>(a+b);

wish();
arrowFunc();
console.log(arrowFun1());
console.log(aF2());
console.log(aF2(2,5));

//call()
// Should call() and apply() always have an object as first argument ??
var obj = {name:"Neha"};

var greeting = function(a,b,c){
    return(a+b+c+this.name);
};

console.log(greeting.call(obj," Newtown "," KOLKATA "," WB "));

//Doubt
var person = {
    firstName:"Ram",
    lastName: "Sita",
    fullName:  function() {
      return this.firstName + " " + this.lastName;
    },
    arrowFun1:()=>
    {
        firstName = "Sindhu";
        return this.firstName + " " + this.lastName;
    }
  }
  console.log(person.fullName());
  console.log(person.arrowFun1());
  
//apply()
var x=["Hi","Hello","Good morning"]
greeting = function(v1,v2,v3){
    console.log(v1,v2,v3);
}
greeting.apply(obj,x);

//Immediately Invoked Function Expression(IIFE)
//1 - no need to call this function. It is self-invoking.

(function () {
    var aName = "Hey.. I'm in IIFE-1";
    console.log(aName);
})();

//2
var result = (function () {
    var name = "Hey.. I'm in IIFE-2";  
    console.log(name); 
})();
console.log("hi");
result;// observation- need not mention this anywhere. It is called automatically only once.

//Scoping
//1
var hero = "Batman";
if(true) {
    var hero = "Superman";
}
console.log(hero);

//Hoisting

(function() {  //IIFE
    theHero(); 
    return;
    function theHero() {
        console.log("Arrow");
    }
 })();

// Prototyping
function Person(first, last) {
    this.firstName = first;
    this.lastName = last;
  }
  
  Person.nationality = "Indian"; // We cannot modify a prototype
  
  var s1 = new Person("Harry","Potter");
  var s2 = new Person("Perry","Park");
  console.log(s1.firstName)
  console.log(s2.lastName)
  console.log(s1.nationality)// Prints undefined
