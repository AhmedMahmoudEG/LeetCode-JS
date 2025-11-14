/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
    if(strs.length==0) return ""
    let s = strs[0];
    for(let i=1;i<strs.length;i++){
        while(strs[i].indexOf(s)!==0){
            s = s.slice(0,-1)
            if(s=="") return "";
        }
    }
    return s
};
