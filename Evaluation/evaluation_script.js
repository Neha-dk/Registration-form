var XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;
var xhr = new XMLHttpRequest();
function ev()
{
    var eq = document.getElementById("equation").value;
    document.getElementById("equation").value = eval(eq);
}
// var xhttp = new XMLHttpRequest();
xhr.open("GET","table_data.json",true);
xhr.onload = function()
{
    console.log("Yayi loaded");
};
