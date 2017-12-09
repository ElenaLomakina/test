//var num = prompt("Enter number");
// var result = num == +num ? alert("yes") : alert("not a number");

//result = !isNaN(Number(num)) ? alert("yes") : alert("not a number");

var num, answer, result;
function enterNumber() {
    return prompt("Enter number");
}

result = function (value) {
    return !isNaN(Number(value)) ? "yes" : "not a number";
}
num = enterNumber();

alert(result (num) );

