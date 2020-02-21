function Display(value)
{
    message+=value;
}
message = " ";
var employee_name = prompt("Enter your name");
to_be_alerted = ["Welcome ",employee_name," To the Resgistration Form"];
to_be_alerted.forEach(Display);
//debugger;
alert(message);
obj = new Date();   
document.getElementById("date_day").innerHTML = obj.getFullYear();