function sum1(v1,v2)
{
    return(v1+v2);
}
function sum(v1,v2,v3)
{
    return(v1+v2+v3);
}
wish=function(){
    console.log("Make a Wish");
}
arrowFunc=()=>{
    console.log("Hey !! I'm inside the arrow function !!");
}

arrowFun1=()=>"Hello Alexa..!!"; 
aF2=(a,b)=>(a+b);
console.log(sum1(10,20));
console.log(sum(10,20,30));
wish();
arrowFunc();
console.log(arrowFun1());
console.log(aF2());
