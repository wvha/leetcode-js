/*
n*2 solution .. two for loops
second loop starting from the current spot only
have a counter to see how many days until a hotter temp

hmm..had it too complicated.
all i needed was to check if (temperatures[j] > temperatures[i])


*/

var dailyTemperatures = function(temperatures) {
  let days = new Array(temperatures.length).fill(0);

  for (let i = 0; i < temperatures.length; i++) {
    for (let j = i+1; j < temperatures.length;j++) {
      if (temperatures[j] > temperatures[i]) {
        days[i] = j-i;
        break;
      }
    }
  }
  return days;
};
