let a = parseInt(prompt("Enter first number: "))+prompt("Enter the operator (+,-,*,/)")+parseInt(prompt("Enter second number : "))

document.getElementById("demo").innerText=`${a}=${eval(a)}`
