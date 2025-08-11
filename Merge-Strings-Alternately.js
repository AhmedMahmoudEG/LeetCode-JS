/**
 * @param {string} word1
 * @param {string} word2
 * @return {string}
 */
var mergeAlternately = function(word1, word2) {
    /*
    //time o(n+m)
    //space O(n+m)
    let merged =[]
    let p1=0;
    let p2=0
    while(p1<word1.length && p2 < word2.length){
        merged.push(word1[p1])
        merged.push(word2[p2])
        p1++
        p2++
    }
    console.log(merged)
    //adding the reminig 
    while(p1<word1.length){
        merged.push(word1[p1])
        p1++
    }
    while(p2<word2.length){
        merged.push(word2[p2])
        p2++
    }
    
    return merged.join('')
    */
    /*
    //space O(1)
    //time O(n+m)
    
    let result =''
    let p1=0,p2 =0;
    while(p1 < word1.length && p2 < word2.length){
        result +=word1[p1]
        result +=word2[p2]
        p1++
        p2++
    }
     // Append remaining characters
    if (p1 < word1.length) result += word1.slice(p1);
    if (p2 < word2.length) result += word2.slice(p2);
    return result
    */
    
    const maxLength = Math.max(word1.length, word2.length);
    let result = "";

    for (let i = 0; i < maxLength; i++) {
        result += word1.charAt(i) + word2.charAt(i);
    }

    return result;
    
};