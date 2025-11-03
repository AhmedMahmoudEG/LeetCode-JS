/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {
    /*
    let arr = s.trim().split(" ").filter(word=>word.length>0);
    if(s.length==0)return 0
    return arr[arr.length-1].length;
    */
    s = s.trim();
    let last = s.length-1;
    let str ="";
    while(last>=0&&s.charAt(last)!=" "){
        str += s.charAt(last);
        last--;
    }
    return str.length;
};