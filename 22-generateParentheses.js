/*
In this problem:
generate all possible permutations of parentheses.

a is number of parens left to open
b is number of parens left to close
in first case, when a===0, all parens are opened,




*/

var generateParenthesis = function(n) {
  let result = [];
  function generate(str, a, b) {
    if (a === 0) {
      result.push(str + ")".repeat(b));
      return;
    }

    if (a > 0) {
      generate(str + "(", a-1, b);
    }

    if (a < b) {
      generate(str + ")", a, b-1);
    }
  }

  generate ("", n, n);
  return result;
}


console.log(generateParentheses(4));