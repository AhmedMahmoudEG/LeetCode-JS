/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    if((s.length!=t.length) ) return false
    let map = new Map();
    for(let i=0;i<s.length;i++){
        map.set(s[i], (map.get(s[i]) || 0) + 1);    }
    //console.log(map)
    //console.log(map.get(t[0]))
    for (let char of t) {
        if (!map.has(char) || map.get(char) === 0) {
            return false;
        }
        map.set(char, map.get(char) - 1);
    }
    return true
};