/**
 * @param {string[]} words
 * @return {number}
 */
var uniqueMorseRepresentations = function(words) {
    const morseCodes = [
        ".-","-...","-.-.","-..",".","..-.","--.","....","..",".---",
    "-.-",".-..","--","-.","---",".--.","--.-",".-.","...","-",
    "..-","...-",".--","-..-","-.--","--.."
    ];

    const seen = new Set();

    for (let word of words) {
        let code = "";
    for (const ch of word) code += morseCodes[ch.charCodeAt(0) - 97];
    seen.add(code);
    }

    return seen.size;
};
