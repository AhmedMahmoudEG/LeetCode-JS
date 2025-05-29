/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
    //space O(1)
  let obj = {
    'I':1,
    'V':5,
    'X':10,
    'L':50,
    'C':100,
    'D':500,
    'M':1000
  }
  let res = 0;
  //time O(n)
  for(let i =0;i<s.length;i++){
    let current = obj[s[i]];
    let next = obj[s[i+1]]
    if(current < next){
        res += next - current;
        i++
    }else{
        res +=current;
    }
  }
  return res;
};