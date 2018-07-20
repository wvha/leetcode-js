/**
 * @param {string} moves
 * @return {boolean}
 */


// moves must be considered in pairs, like opening and closing parens
// UD or LR
// iterate through string
// have an object hold counts
// if counts are equal, then good
// if not, then freturn false

var judgeCircle = function(moves) {
  let obj = {};
  for (let i = 0; i < moves.length; i++){
      if (!obj[moves[i]]) {
          obj[moves[i]] = 1;
      } else {
          obj[moves[i]]++;
      }
  }

  return (obj.U === obj.D) && (obj.R === obj.L);
};
