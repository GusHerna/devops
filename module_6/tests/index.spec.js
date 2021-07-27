const plus = require("./index")
test (
  "Cuatro",
  () => {
    expect (plus(2,2)).toBe(4)
  }
);

const mult = require("./index")
test (
  "Seis",
  () => {
    expect (mult(2,3)).toBe(6)
  }
);
