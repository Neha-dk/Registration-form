function objects()
{
    console.log("Three types of object creation");
    // countries1 = {"Ïndia": ["ÄP","TN","Delhi"], "America":["NA","Mexico"] };
    // Country2  = Object.create(countries1);
    // //Why?
    // console.log(countries1, Country2);
    // countries1 ["Ïndia"]= countries1.Ïndia.concat("Mumbai");
    // console.log(countries1, Country2.Ïndia);
    //Why narasinga??  ANS: Because it is creating a protoyped object
    obj1 = {"Q":1,"w":2,"e":3};
    obj2 = Object.create(obj1);
    obj2.w=4
    console.log(obj1,obj2._p, obj1===obj2, obj2.Q );    

}
function buttonSubmission(Expression)
{
    alert(Expression);
}

function headingEvent()
{
    var date = new Date();
    let days = {0:"Sunday", 1:"Monday", 2:"Tuesday",3:"Wednesday",4:"Thursday",5:"Friday",6:"Saturday"};
    document.getElementById("date_day").innerHTML =days[date.getDay()];
    //console.log(days[0]);

}

function event_key_down()
{
    alert("To be filled by the admin");
    // document.getElementById("Events").reset();

}
function blur_event()
{
    var fn = document.getElementById("FName");
    var ln = document.getElementById("LName")
    alert("Hi!!...!!!"+fn.value+" "+ln.value);
}

function prototyped_example()
{
    function Person(first, last, age, eye) {
        this.firstName = first;
        this.lastName = last;
        this.age = age;
        this.eyeColor = eye;
      }

      var myFather = new Person("John", "Doe", 50, "blue");
      var myMother = new Person("Sally", "Rally", 48, "green");
      Person.prototype.Fullname = function() {return this.lastName+" "+this.firstName;}
      console.log(myFather,myMother, myMother.Fullname());
      
      
}
 function hobbies()
 {
     var output = document.getElementsByTagName("Hobbies").value;
     console.log(output);
 }
prototyped_example();