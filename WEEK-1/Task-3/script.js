let a = parseInt(prompt("Enter your age: "))
document.getElementById("demo").innerText+="Age is "+a;
if(a<18)
    document.getElementById("demo").innerText+="\nYou are a minor."
else if(a>18 && a<65)
    document.getElementById("demo").innerText+="\nYou are an adult."
else
    document.getElementById("demo").innerText+="\nYou are a senior citizen."
