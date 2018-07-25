/*
given rows x cols and list of words, find how many times given sentence
fits on the screen

total words in sentence < 100
length of each word > 0 and < 10

input: rows = 3, cols = 6, sentence = ['a', 'bcd', 'e']
output: 2

xxxxxx
xxxxxx
xxxxxx

a-bcd-
e-a---
bcd-e-
*/


/*
thoughts: keep track of current spot on map
counter to see how many spaces left, if it works
if not, then go to next line
if no more lines, then end

*/

var wordsTyping = function(sentence, rows, cols) {
  let count = 0;
  let c = cols;
  let index = 0; // of word in sentence
  let r = 0;

  while (r < rows) {
    while(index < sentence.length && c >= sentence[index].length) {
      if (c === sentence[index].length) {
        index++;
        break;
      } else {
        c -= sentence[index].length + 1;
        index++;
      }
      if (index === sentence.length) {
        index = 0;
        count++;
      }
    }

    if (index === sentence.length) {
      index = 0;
      count++;
    }
    c = cols;
    r++;
  }
  return count;

}


// faster way lols
var wordsTyping = function(sentence, rows, cols) {
  let all = '';
  for (let i = 0; i < sentence.length; i++) {
    all = all.concat(sentence[i], ' ');
  }

  let start = 0;
  let len = all.length;
  for (let i = 0; i < rows; i++) {
    start += cols;
    if (all[start%len] === ' ') {
      start ++;
    } else {
      while(start > 0 && all[(start -1)%len] !== ' ') {
        start --;
      }
    }
  }
  return parseInt(start/len);
}




/* whats going on?
concat all words to empty string
rather than fit the sentence into the rows/col
  fit the rows/cols into the sentence






*/