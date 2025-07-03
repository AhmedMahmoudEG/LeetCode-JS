/**
 * @param {string} word
 * @param {character} ch
 * @return {string}
 */
var reversePrefix = function(word, ch) {
   
    
    if (!word.includes(ch)) return word;

    const index = word.indexOf(ch);
    const prefix = [...word.slice(0, index + 1)].reverse().join('');
    const rest = word.slice(index + 1);

    return prefix + rest;
    
};