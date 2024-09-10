//Object Literal Notation

var user = {
  username: "Rohan Jaiswal",
  city: "Delhi",
  id: 101,
};

// console.log(user);
var cityValue = user.city;
var idValue = user.id;

var anotherCity = user["city"];

console.log(cityValue, idValue);
console.log(anotherCity);
