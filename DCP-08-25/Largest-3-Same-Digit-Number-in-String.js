/**
 * @param {string} num
 * @return {string}
 */
var largestGoodInteger = function(num) {
    let max =""
    for(let i=0;i<num.length;i++){
        if(num[i]==num[i+1]&&num[i]===num[i+2]){
            const subString = num[i].repeat(3);
            if (subString > max) {
                max = subString;
            }
        }
    }
    return max

    /*
    //sliding window
    //"6777133339"
    let max =""
let result =""
    for (let i = 0; i <= num.length - 3; i++) {
    let window = num.slice(i, i + 3);
    
    // Check if all chars in window are the same
    if (window.split('').every(ch => ch === window[0])) {
      if (window > max) {
        max = window;
      }
    }
  }
  
  return max;
  */
}
