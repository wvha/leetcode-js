/*
Given a column title as appearring in an Excel sheet
return its corresponding column number

ex:
A / 1
AB / 28
ZY / 701

must go through each letter
convert each letter to correct char code value

*/

var titleToNumber = function(s) {
  let n = 0;

  for (let c of s) {
    n = n * 26 + (c.charCodeAt(0) - 'A'.charCodeAt(0) + 1);
  }
  return n;
};

console.log(titleToNumber("AB")); // 28
console.log(titleToNumber("ZY")); // 701