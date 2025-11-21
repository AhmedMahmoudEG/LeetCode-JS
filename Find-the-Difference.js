/**
 * @param {string} s
 * @param {string} t
 * @return {character}
 */
var findTheDifference = function(s, t) {
    let xor = 0;
    for (let ch of s) xor ^= ch.charCodeAt(0);
    for (let ch of t) xor ^= ch.charCodeAt(0);
    return String.fromCharCode(xor);
    /*
    //using hashmap O(n+m)
    if(s.length==0)return t
    if(t.length==0) return s
    let map = new Map();
    for(let i of t){
        map.set(i,(map.get(i)||0)+1);
    }
    for(let i of s){
        if(!map.has(i))
        {
        return i
        } else{
            map.set(i,(map.get(i)-1))
        }
    }
    for( let [key,value] of map.entries()){
        if(map.get(key)===1) return key
    }
    */
    //nlogn
    /*
    let str1 = s.split('').sort()
    let str2 = t.split('').sort()
    let p1=0,p2=0;
    while (p1 < str1.length && p2 < str2.length) {
    if (str1[p1] !== str2[p2]) return str2[p2];
    p1++;
    p2++;
}
    return str2[str2.length - 1];
    */
};