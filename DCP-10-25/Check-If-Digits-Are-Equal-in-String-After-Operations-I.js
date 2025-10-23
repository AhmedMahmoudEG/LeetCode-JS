/**
 * @param {string} s
 * @return {boolean}
 */
var hasSameDigits = function(s) {
  let newS = s;
  let res = "";

  while (newS.length > 2) {
    for (let i = 0; i < newS.length - 1; i++) {
      res += String((parseInt(newS[i]) + parseInt(newS[i + 1])) % 10);
    }
    newS = res;
    res = "";
  }

  // now check last two digits
  return newS[newS.length - 1] === newS[newS.length - 2];

};