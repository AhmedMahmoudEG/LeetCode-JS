/**
 * @param {string} s
 * @return {string}
 */
var reverseVowels = function(s) {
    let vowel = ['a','e','i','o','u']
    let arr = s.split('')
    let l = 0
    let r = s.length-1;
    while(l<r){
       if(!vowel.includes(arr[l].toLowerCase())) l++
       else if(!vowel.includes(arr[r].toLowerCase())) r--
       else{
        [arr[l],arr[r]] =[arr[r],arr[l]]
        l++;
        r--
       }
    }
    return arr.join('')
};