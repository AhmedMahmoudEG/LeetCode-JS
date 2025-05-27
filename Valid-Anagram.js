/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    if(s.length!=t.length){
        return false
    }
    let map = new Map();
    let map2 = new Map();
    //since the both strings has same length then time and space is O(n)
    //O(n)
    for(let i=0;i<s.length;i++){
        if(!map.has(s[i])){
            map.set(s[i],1);
        }else{
            map.set(s[i],map.get(s[i]) + 1 )
        }
    }
    ///o(n)
    for(let i=0;i<t.length;i++){
        if(!map2.has(t[i])){
            map2.set(t[i],1);
        }else{
            map2.set(t[i],map2.get(t[i]) + 1 )
        }
    }

    for (let [key, value1] of map) {
        if (!map2.has(key) || map2.get(key) !== value1) {
            return false;
        }
    }
    return true
};