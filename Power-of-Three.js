/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfThree = function(n) {
    /* 
    //iterative solution
    //O(log3n) divide by 3 
    if(n<1) return false
    while(n%3==0){
        n = n/3
    }
    return n ==1;
    */
    //recursive solution
    /*
    //2 base cases 
    //O(log3n) divide by 3 
    if(n==1) return true
    if(n<=0 || n%3 !=0) return false
    //recursive
    return isPowerOfThree(n/3)
    */
    //math solution by anding with the largest power of 3 3^19
    //O(1)
    return n>0 && 1162261467 % n ===0
    
};