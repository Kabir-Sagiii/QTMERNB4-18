var products = {
  brand: "Samsung",
  model: "Galaxy ultra 24",
  rating: {
    rate: 4.3,
    count: {
      mens: 3456,
      womens: 4567,
    },
  },
};

// var countValue = products["rating"]["count"]["mens"];
var countValue = products.rating.count.womens;
console.log(countValue);
