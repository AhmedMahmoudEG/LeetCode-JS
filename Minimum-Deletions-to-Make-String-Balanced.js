1/**
2 * @param {string} s
3 * @return {number}
4 */
5var minimumDeletions = function(s) {
6    let countB= 0
7    let del = 0
8    for(let ch of s){
9        if(ch =='b'){
10            countB++;
11        }else{
12            del = Math.min(countB ,del + 1)
13        }
14    }
15    return del
16};