/**
 * @param {string} text
 * @return {number}
 */
var maxNumberOfBalloons = function(text) {
    /*
    let map = new Map()
    for(let i =0;i<text.length;i++){
        map.set(text[i],(map.get(text[i])||0)+1)
    }
    // required frequencies for "balloon"
    let req = { b: 1, a: 1, l: 2, o: 2, n: 1 };
    let maxNum = Infinity;
    for(let char in req){
    let available = map.get(char) || 0;
    maxNum = Math.min(maxNum , Math.floor(available / req[char]))
    }
    
     return maxNum === Infinity ? 0 : maxNum;
     */
      let b = 0, a = 0, l = 0, o = 0, n = 0;

    for (let char of text) {
        switch (char) {
            case 'b': b++; break;
            case 'a': a++; break;
            case 'l': l++; break;
            case 'o': o++; break;
            case 'n': n++; break;
        }
    }

    return Math.min(b, a, Math.floor(l / 2), Math.floor(o / 2), n);
};