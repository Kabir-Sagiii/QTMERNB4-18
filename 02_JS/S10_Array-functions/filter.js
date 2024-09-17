var arr = [10, 20, 30, 40, 50, 60, 70];

var filteredArray = arr.filter(function (element, index) {
  return element < 50; // 30 > 10 [20,30]
});

console.log(filteredArray);
