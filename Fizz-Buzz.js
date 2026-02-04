1/**
2 * @param {number} n
3 * @return {string[]}
4 */
5var fizzBuzz = function(n) {
6    let res = [];
7    for( let i =1;i<=n;i++){
8        if(i %3 ==0&& i%5==0){
9            res.push('FizzBuzz')
10        }else if (i % 3 ==0){
11            res.push('Fizz')
12        }else if ( i%5 ==0){
13            res.push('Buzz')
14        }else{
15            res.push(String(i))
16        }
17    }
18    return res
19};