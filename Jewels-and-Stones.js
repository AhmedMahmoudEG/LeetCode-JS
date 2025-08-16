/**
 * @param {string} jewels
 * @param {string} stones
 * @return {number}
 */
var numJewelsInStones = function(jewels, stones) {
    let count =0;
    for(let i of stones){
        if(jewels.includes(i)){
            count +=1;
        }
    }
    return count
};