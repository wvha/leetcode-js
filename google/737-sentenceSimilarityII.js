/**
 * @param {string[]} words1
 * @param {string[]} words2
 * @param {string[][]} pairs
 * @return {boolean}
 */


// input: two lists of words, and a list of similar word pairs
// if word in word1 = word2, OR both words are part of the pair
  // theyre similar

// if all words are similar, then return true
// must loop through pairs to store in hash map



var areSentencesSimilarTwo = function(words1, words2, pairs) {
  if (words1.length !== words2.length) {
    return false;
  }

  let map = {};
  for (let p = 0; p < pairs.length; p++) {
    let current = pairs[p][0];
    map[current] = pairs[p][1];
  }

  for (let i = 0; i < words1.length; i++) {
    if (words1[i] === words2[i] || map[words1[i]] === words2[i] || map[words2[i]] === words1[i]) {
      break;
    }
    return false;
  }

  return true;
};


// second attempt
// better solution


var search = function(map, child) {
  if (!map[child]) {
    map.set(child, child);
  }
  if (child !== map.get(child)) {
    return search(map, map.get(child));
  }
  return child;
}


var areSentencesSimilarTwo = function(words1, words2, pairs) {
  if (words1.length !== words2.length) {
    return false;
  }

  var map = new Map();
  for (let i = 0; i < pairs.length; i++) {
    let parent1 = find(map, pairs[i][0]);
    let parent2 = find(map, pairs[i][1]);
    if (parent1 !== parent2) {
      map.set(parent1, parent2);
    }
  }
  for (let i = 0; i < words1.length; i++) {
    let w1 = words1[i];
    let w2 = words2[i];
    if (w1 === w2) {
      continue;
    }
    if (search(map, w1) === search(map, w2)) {
      continue;
    }
    return false;
  }
  return true;
}


