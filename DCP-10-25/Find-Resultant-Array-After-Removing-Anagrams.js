/**
 * @param {string[]} words
 * @return {string[]}
 */
var removeAnagrams = function(words) {
    const res =[];
    let prevSig ="";
    for(const w of words){
        const sig = w.split('').sort().join();
        if(sig !==prevSig){
            res.push(w);
            prevSig = sig
        }
    }
    return res
};