/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

document.getElementById("buttons").addEventListener("click", function(event) {
        document.getElementById("display").innerHTML += event.target.innerHTML;
});

document.getElementById("calculate").addEventListener("click", function(event) {
        event.stopPropagation();
        calculate();
});

function calculate() {
    var types = ["+","-","*","/"];
    var calculation = document.getElementById("display").innerHTML;
    var theType;
    types.forEach(function(type) { if(calculation.indexOf(type) >= 0)
                                        theType = type;
                                });
    var numbers = calculation.split(theType);
    switch(theType) {
        case "+": document.getElementById("display").innerHTML = Number(numbers[0]) + Number(numbers[1]);
            break;
        case "-": document.getElementById("display").innerHTML = Number(numbers[0]) - Number(numbers[1]);
            break;
        case "*": document.getElementById("display").innerHTML = Number(numbers[0]) * Number(numbers[1]);
            break;
        case "/": document.getElementById("display").innerHTML = Number(numbers[0]) / Number(numbers[1]);
            break;
    }
};


