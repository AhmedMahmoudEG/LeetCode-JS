/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
var canConstruct = function(ransomNote, magazine) {
    //using hash map

    /*
    let map=new Map();
    for(let i=0;i<magazine.length;i++){
        map.set(magazine[i], (map.get(magazine[i]) || 0) + 1);

        //map a = 1 , b = 1
    }
    console.log(map)
    for(let char of ransomNote){
        console.log(map.get(char))
        if(!map.has(char)|| map.get(char) ===0) return false
        map.set(char, map.get(char) - 1);
    }
    return true
    */
    for(let char of ransomNote){
        let charMeter = magazine.indexOf(char)
        if(charMeter ==-1) return false
        magazine = magazine.replace(char,'*')
    }
    console.log(magazine)
    return true
};