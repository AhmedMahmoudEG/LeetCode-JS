/**
 * @param {number[]} temperatures
 * @return {number[]}
 */
var dailyTemperatures = function(temp) {
    let stack =[]
    let res = new Array(temp.length).fill(0)
    for(let i=0;i<temp.length;i++){
        //while stack!empty && last element in the stack smaller than entered element
        while(stack.length!==0&&temp[i]>temp[stack[stack.length-1]]){
            //get the index of that element which is the last element 
            let prevIndex = stack.pop();
            //set the value of res[previndex[] to i-previndex
            res[prevIndex]=i-prevIndex
        }
        //push the index to the stack
        stack.push(i)
    }
    return res
};