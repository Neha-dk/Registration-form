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

