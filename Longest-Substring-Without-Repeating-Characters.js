/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    let longest = new Map();
    //space O(m)
    //time O(n)
        let maxLength = 0
        let start = 0
        for(let i =0;i<s.length;i++){
            //لو الحرف اتكرر حرك البداية خطوة لقدام
            if(longest.has(s[i])){
                start = Math.max(start, longest.get(s[i]) + 1)
            }
            //لو مشفتهوش سجله وحطه الفاليو بتاعته الاندكس 
                longest.set(s[i],i)
                //قارن المسافة الحالية ب المسافة الجديد من حيث الاكبر 
                maxLength = Math.max(maxLength, i - start + 1)
            
        }
        return maxLength;
};