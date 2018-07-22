var repeatedStringMatch = function(A, B) {

  for (let i = 1; i <= 10000/A.length; i++) {
    let repeated = A.repeat(i);
    if (repeated.lastIndexOf(B) >= 0) {
      return i;
    }
  }
  return -1;
}


var repeatedStringMatch = (A, B) => {
  const count = Math.ceil(B.length / A.length)
  const string = A.repeat(count)
  return string.includes(B) ? count : (string + A).includes(B) ? count + 1 : -1
};