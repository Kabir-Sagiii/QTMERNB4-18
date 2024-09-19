var x = 10;

var y = 20;

var result = x++ + ++y + y++ + ++x;
10 + 21 + 21 + 12;

console.log(result); //64//
console.log(x, y); //(12,22) (12,23)
