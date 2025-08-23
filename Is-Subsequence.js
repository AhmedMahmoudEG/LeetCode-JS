/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isSubsequence = function(s, t) {
    if(s=='') return true
    if(s.length>t.length) return false
    let r =0;
    let l =0
 
    while(r<s.length && l<t.length){
        if(s[r]==t[l]){
            r++
            l++
        }else{
            l++
        }
     //   if(l>=s.length-1) return false
    }
    return r==s.length

};