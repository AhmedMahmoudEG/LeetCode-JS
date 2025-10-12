/**
 * @param {number[]} g
 * @param {number[]} s
 * @return {number}
 */
var findContentChildren = function(g, s) {
    g= g.sort((a,b)=>a-b)
    s= s.sort((a,b)=>a-b)
    let l=0
    let r =0
    let res =0;
    while(l<g.length&&r<s.length){
        if(s[r]>=g[l]){
            res++
            l++
            r++
        }else r++
    }
    return res
};