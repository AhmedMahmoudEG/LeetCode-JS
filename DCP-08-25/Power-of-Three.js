/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfThree = function(n) {
    /*
    if(n<=0 ) return false
    while(n>1){
        console.log(n)
       // if(n%3 !=0) return false
        n = n / 3
    }
    if (n == 1){ 
    
     return true
    }else return false
    */
    return n > 0 && 1162261467 % n === 0;


};