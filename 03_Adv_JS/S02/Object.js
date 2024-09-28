var obj = {
  username: "Raj",

  fn: function f1() {
    console.log("f1 is called");
  },

  display: function () {
    console.log("display is called");
  },

  print: () => {
    console.log("print is called");
  },
};

var name = obj.username;
console.log(name);

obj.fn();
obj.display();
obj.print();
