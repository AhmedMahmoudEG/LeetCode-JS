/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function(nums, k) {
    //another solution 
    let n = nums.length
    k = k%n;
    reverse(nums,0,n-1);
    reverse(nums,0,k-1);
    reverse(nums,k,n-1)
    function reverse(arr,start,end){
        let tmp;
        while(start<end){
            temp=nums[start];
            nums[start]=nums[end]
            nums[end] = temp;
            start ++;
            end --;
        }
    }
    /*
    //brute force solution O(n*b)
   while(k>0){
    let tmp=nums[nums.length-1]
    for(let i=nums.length-1;i>0;i--){
        nums[i]=nums[i-1];
    }
    nums[0]=tmp;
    k--
   }
   */
   //time O(n)
   //space O(n)
   /*
   let n = nums.length;
    k = k%n
   let temp = new Array(n);
   for(let i =0;i<n;i++){
    //calculate where element should  be in the array after moving to right
    temp[(i+k)%n]=nums[i]
   }
   for(let i =0;i<n;i++){
    nums[i]=temp[i]
   }
   */
   //with one loop
   /*
   let n = nums.length;
   k = k%n;
   let original = [...nums];
   for(let i=0;i<n;i++){
    //replace each element of nums with the calculated new index after moving it to left
    nums[i]=original[(i-k+n)%n];
   }
   return nums;
  */
};