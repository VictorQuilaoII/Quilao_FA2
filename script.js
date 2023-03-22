function myFunction(operator) {
    var x = parseFloat(document.getElementById("myText1").value);
    var y = parseFloat(document.getElementById("myText2").value);
    
    var z;
    if (operator === 'add') {
        z = x + y;
        document.getElementById("answer").innerHTML = "The sum of " + x + " and " + y + " is " + z;
    }
    else if (operator === 'subtract') {
        z = x - y;
        document.getElementById("answer").innerHTML = "The difference between " + x + " and " + y + " is " + z;
    }
    else if (operator === 'multiply') {
        z = x * y;
        document.getElementById("answer").innerHTML = "The product of " + x + " and " + y + " is " + z;
    }
    else if (operator === 'divide') {
        z = x / y;
        document.getElementById("answer").innerHTML = "The quotient of " + x + " and " + y + " is " + z;
    }
    else if (operator === 'modulo') {
        z = x % y;
        document.getElementById("answer").innerHTML = "The remainder of " + x + " and " + y + " is " + z;
    }
}