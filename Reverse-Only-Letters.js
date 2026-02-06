1/**
2 * @param {string} s
3 * @return {string}
4 */
5var reverseOnlyLetters = function(s) {
6    let str = s.split('')
7    let l = 0;
8    let r = str.length-1;
9    while(l<r){
10        if(!/[a-zA-Z]/.test(str[l])){
11            l++
12        }else if(!/[a-zA-Z]/.test(str[r])){
13            r--
14        }else {
15            let tmp = str[l]
16            str[l] = str[r]
17            str[r] = tmp
18            l++;
19            r--
20        }
21    }
22    return str.join('')
23};