/**
 * @param {number[]} cost
 * @return {number}
 */
var minCostClimbingStairs = function(cost) {
    //another dynamic solution using bottom up but in backwards
    let step1=0;
    let step2=0;
    for(let i =cost.length-1;i>=0;i--){
        let currentStep = cost[i]+ Math.min(step1,step2)
        step1=step2;
        step2 = currentStep
    }
    return Math.min(step1,step2)
    /*
    // Bottom-up dynamic programming (modifies the original cost array)
    // At each step, accumulate the minimum cost to reach that step from the    previous two
    for(let i =2;i<=cost.length-1;i++){
        cost[i] +=Math.min(cost[i-1],cost[i-2])
    }
    return Math.min(cost[cost.length-1],cost[cost.length-2])
    */
};