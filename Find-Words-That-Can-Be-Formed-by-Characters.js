/**
 * @param {string[]} words
 * @param {string} chars
 * @return {number}
 */
var countCharacters = function(words, chars) {
    let map = new Map()
    let current = 0;
    for(let i =0;i<chars.length;i++){
        
        map.set(chars[i], (map.get(chars[i]) || 0) + 1);
    }
    for (let word of words) {
        let temp = new Map(map); // Make a copy to not mutate the original
        let valid = true;

        for (let ch of word) {
            if (!temp.has(ch) || temp.get(ch) === 0) {
                valid = false;
                break;
            }
            temp.set(ch, temp.get(ch) - 1); // use the character
        }

        if (valid) current += word.length;
    }

    return current;
};