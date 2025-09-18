/**
 * @param {number} n
 * @return {boolean}
 */
var canWinNim = function(n) {
   if(n<=3) return true
   return n%4 !==0;
};