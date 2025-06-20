/**
 * @param {number[]} arr
 * @param {number} k
 * @return {number}
 */
var findKthPositive = function(arr, k) {
    // My initial approach works only for some test cases.
    // It fails when the k-th missing number is greater than the last element in the array.
    
    //let res = Array.from({ length: arr[arr.length-1] }, (_, i) => i + 1);
    /*
    // This creates an array from 1 to the last number in arr,
    // and checks which numbers are missing.
    let final =[]
    for(let i =0;i<res.length;i++){
        if(!arr.includes(res[i])){
            final.push(res[i])
        }
    }
    console.log(final)
    return final[k-1] 
    */

    // Correct approach:
    // Keep checking numbers starting from 1.
    // If a number is not in arr, add it to the final missing list.
    // Stop when we've found k missing numbers.
    let final =[];
    let i = 1;
    while(final.length<k){
        if(!arr.includes(i)){
            final.push(i);
        }
        i++
    }
    return final[k-1]
};