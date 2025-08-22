/**
 * @param {string[]} operations
 * @return {number}
 */
var calPoints = function(operations) {
    let res =[];
    for(let i=0;i<operations.length;i++){
        if(operations[i]=='C'){
            res.pop()
        }else if(operations[i]=='D'){
            res.push(res[res.length-1]*2)
        }else if(operations[i]=='+'){
            res.push(res[res.length-1]+res[res.length-2])
        }else{
            res.push(parseInt(operations[i]))
        }
    }
    return res.reduce((a,b)=>a+b,0)
};