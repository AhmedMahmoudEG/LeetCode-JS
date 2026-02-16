1/**
2 * @param {number} n
3 * @return {number}
4 */
5var reverseBits = function(n) {
6    //let bin = n.toString(2).padStart(32, '0').split('').reverse().join('')
7    //return parseInt(bin,2)
8    let result = 0
9    for(let i =0;i<32;i++){
10        result = (result <<1) | (n& 1)
11        n>>>=1
12    }
13    return result>>>0;
14};