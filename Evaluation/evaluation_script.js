function ev()
{
    var eq = document.getElementById("equation").value;
    document.getElementById("equation").value = eval(eq);
}