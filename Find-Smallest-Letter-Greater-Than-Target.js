1/**
2 * @param {character[]} letters
3 * @param {character} target
4 * @return {character}
5 */
6var nextGreatestLetter = function(letters, target) {
7    let left =0;
8    let right= letters.length
9    while(left<right){
10        let mid = Math.floor((left + right) / 2 )
11        if(letters[mid]>target){
12            right = mid
13        }else{
14            left = mid +1
15        }
16    }
17    return left ===letters.length? letters[0] : letters[left]
18    /*
19    let res = new Array()
20    for(let l of letters){
21        if(l>target){
22            res.push(l)
23        }
24    }
25    return res[0]||letters[0]
26    */
27};