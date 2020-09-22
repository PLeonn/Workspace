function printHello() {
    console.log("Hello there!");
}

function addition(a, b) {
    return a + b;
}

function listLoop(userList) {
    for (var i = 0; i < userList.length; i++) {
        console.log(userList[i]);        
    }
}

function doubleAddition(c, d) {
    var total = addition(c, d) * 2;
    return total;
}

printHello();

var tea = ["caravan", "earl grey", "oolong"];
listLoop(tea);

console.log(doubleAddition(3, 4));

var longDecimal = 112.34534454;
var roundedDecimal = Math.floor(longDecimal);
console.log(roundedDecimal);