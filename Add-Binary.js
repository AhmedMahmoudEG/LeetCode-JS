1/**
2 * @param {string} a
3 * @param {string} b
4 * @return {string}
5 */
6var addBinary = function(a, b) {
7    if(a.length>52 || b.length>52){
8        return (BigInt('0b'+a) + BigInt('0b'+b)).toString(2)
9    }else{
10        return (parseInt(a,2)+parseInt(b,2)).toString(2)
11    }
12};