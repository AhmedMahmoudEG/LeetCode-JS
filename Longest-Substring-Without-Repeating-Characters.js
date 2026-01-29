1/**
2 * @param {string} s
3 * @return {number}
4 */
5var lengthOfLongestSubstring = function(s) {
6    let set = new Set();
7    let l =0;
8    let max = 0
9    for(let r=0;r<s.length;r++){
10        if(!set.has(s[r])){
11            set.add(s[r])
12        }else{
13            while(set.has(s[r])){
14            set.delete(s[l])
15            l++;
16            }
17            set.add(s[r])
18        }
19            max= Math.max(max,r-l+1)
20    }
21    return max
22};