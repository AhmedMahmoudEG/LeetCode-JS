/**
 * @param {string} s
 * @return {number}
 */
var minimumMoves = function(s) {
    if(!s.includes("X")) return 0
    let i=0
    let res =0
    while(i<s.length){
        if(s[i]=="X"){
            res++;
            i+=3;
        }else{
            i++;
        }
    }
    return res;
};