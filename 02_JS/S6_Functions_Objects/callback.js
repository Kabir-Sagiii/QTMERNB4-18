function f1(add) {
  console.log(add());
}

function f2(x, y) {
  console.log(x, y);
}

f1(function () {
  //this is HOF
  var x = 10;
  var y = 20;
  return x + y;
});

f2(100, 200); //this is not HOF
