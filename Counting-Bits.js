/**
 * @param {number} n
 * @return {number[]}
 */
var countBits = function(n) {
    //time n logn 
    /*
    let arr = []
    arr.push(0)
    for(let i=1;i<n+1;i++){
        let curBi = i.toString(2);
        arr.push((curBi.split('1').length - 1) )
    }
    return arr
    */
    let arr = Array(n+1).fill(0);
    for(let i =1;i<=n;i++){
        //i >> 1 → number of 1s in i/2.
        //(i & 1) → add 1 if last bit is 1.
        arr[i] = arr[i >> 1] + (i & 1);
    }
    return arr
};