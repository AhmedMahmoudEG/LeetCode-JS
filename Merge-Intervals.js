/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function(intervals) {
    //first we need to sort the intervals 
    //If we don’t sort makes no sense — we can’t guarantee overlaps.
    //space O(1)
    //time O(nlogn)
    intervals = intervals.sort((a,b)=>a[0]-b[0]);
    let start =0 ;
    let end = 1;
    let previous = intervals[0]
    let res = [previous]
    //draw it to figure out the overlap and the conditions 
    //if prev[end]>=current[start] // means overlapping 
    //else push to reslut and update the previous
    for(let current of intervals){
        if(previous[end]>=current[start]){
            previous[end] = Math.max(previous[end],current[end])
        }else{
            res.push(current);
            previous= current
        }
    }
    return res;
};