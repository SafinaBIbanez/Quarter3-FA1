//variable
var fname = prompt("First Name: ");
var lname = prompt("Last Name: " );
var birtyer = prompt ("Birth Year: ");


//acckcalculateage!!

var AGE = 2025 - parseInt(birtyer);

//elementid???

document.getElementById("print").innerHTML = "Hello " + fname + " " + lname + "! How does it feel to be " + AGE + " years old?";
