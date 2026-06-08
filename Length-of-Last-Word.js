1/**
2 * @param {string} s
3 * @return {number}
4 */
5var lengthOfLastWord = function(s) {
6    let arr = s.trim().split(" ").filter(word=>word.length>0);
7        if(s.length==0)return 0
8        console.log(arr[arr.length-1])
9        return arr[arr.length-1].length;
10};