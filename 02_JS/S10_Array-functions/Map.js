var arr = [10, 20, 30];

var newArray = arr.map(function (element, index) {
  var result = element * 10; //300
  return result; // [100,200,300]
});

console.log(newArray);
