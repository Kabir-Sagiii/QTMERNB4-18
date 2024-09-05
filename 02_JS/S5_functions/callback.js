function f1() {
  console.log("f1 is called");
}

function fn(f) {
  console.log("fn is called");
  f();
  console.log("-------------------------");
}

fn(f1);

fn(function f3() {
  console.log("f3 is called");
});

fn(function () {
  console.log("Anonymous is called");
});

fn(() => {
  console.log("Arrow function");
});
