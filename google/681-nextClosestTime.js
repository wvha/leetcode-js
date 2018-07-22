/**
 * @param {string} time
 * @return {string}
 */


/*
Input: "19:34"
Output: "19:39"

Input: "23:59"
Output: "22:22"

split by :
take first half and set as the hour ..
  make a combination for minutes using any 4 digits
  if not possible, then


*/

var nextClosestTime = function(time) {
  let min;
  let hour;
  let minArray = [];
  let hourArray = [];

  let splitTime = time.split(':');
  let digits = time.split('');
  digits.splice(2, 1);

  // make list of all possible minute times
  for (let i = 0; i < digits.length; i++) {
    for (let j = 0; j < digits.length; j++) {
      let temp = digits[i] + digits[j];
      minArray.push(temp);
      continue;
    }
  }

  minArray.sort();

  // if valid minute between current minute and end of hour exists..
  // use the same hour
  for (let i = 0; i < minArray.length; i++) {
    if (minArray[i] > splitTime[1] && minArray[i] < 60) {
      hour = splitTime[0];
      min = minArray[i];
      return [hour, min].join(':');
    }
  }


  // else, make list of all possible hour times
  for (let i = 0; i < digits.length; i++) {
    if (digits[i] >= 0 && digits[i] <= 2) {  // valid hour digits only
      for (let j = 0; j < digits.length; j++) {
        let temp = digits[i] + digits[j];
        hourArray.push(temp);
        continue;
      }
    }
  }

  hourArray.sort();

  // check if valid num exists between current hour and 24
  // else, return smallest hour and min

  let hourIndex = hourArray.indexOf(splitTime[0]);

  for (let i = hourIndex + 1; i < hourArray.length; i++) {
    if (hourArray[i] > splitTime[0] && hourArray[i] < 24) {
      hour = hourArray[i];
      min = minArray[0];
      return [hour, min].join(':');
    }
  }

  hour = hourArray[0];
  min = minArray[0];
  return [hour, min].join(':');

}

console.log(nextClosestTime('21:05')); // 21:10
console.log(nextClosestTime('11:05')); // 11:10
console.log(nextClosestTime('04:42')); // 04:44
console.log(nextClosestTime('23:59')); // 22:22
