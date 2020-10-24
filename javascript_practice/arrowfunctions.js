// regular JS function
var add = function (x, y) {
  return x + y;
};

// arrow function syntax
var add = (x, y) => x + y;
// above, the return keyword can be ommited since it's a single-line expression in the body of the function

// concise body syntax, implied 'return' keyword:
var func = (x) => x * x;

// block-body 'return' keyword must be explicit
var func = (x, y) => {
  return x + y;
};

// to convert a traditional function to an arrow function we the following:
// remove the keyword 'function'
// place the fat arrow => between the argument (the parens) and the opening body curly bracket
// remove the curly brackets and the 'return' keyword ('return' is implied and doesn't need to be visible)
// remove the parens around the argument (this step only works for single-argument functions! 0 or more than 1 argument means you need your parens)
// for certain FAFs functions the parens, curly brackets, and 'return' may be still be required. For example:
// if you have more than one argument or 0 arguments, you still need to use the parens
// if your function body has more than a single line of code or has anything proceeding what would-be the implied 'return', then you need to explicitly write the 'return' keyword in the body AND bring back your {} to enclose the body

// for named functions (aka non-anonymous functions) we treat arrow expressions like variables. e.g.:
// traditional function bob
function bob(a) {
  return a + 100;
}
// arrow function bob below
let bob = (a) => a + 100;
