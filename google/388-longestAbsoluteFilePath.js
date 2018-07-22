var lengthLongestPath = function(input) {
  if (input === null || input.length === 0) {
    return 0;
  }

  let tracker = [];
  let answer = 0;
  for (let path of input.split("\n")) {
    let level = path.lastIndexOf("\t") + 1;
    tracker[level] = path.length - level + (level > 0 ? tracker[level - 1] : 0);

    if (path.indexOf(".") !== -1) {
      answer = Math.max(answer, tracker[level] + level)
    }
  }

  return answer;
}


var lengthLongestPath = function(input) {
  input = input.split('\n');
  let stack = [0];
  let maxLength = 0;
  input.forEach(function(item) {
    var l = item.lastIndexOf('\t') + 1;
    var len = stack[l] + item.length - l + 1;
    stack[l + 1] = len;
    if (item.indexOf('.') >= 0) {
      maxLength = Math.max(maxLength, len - 1);
    }
  });
  return maxLength;
}