/**
 * Definition for isBadVersion()
 * 
 * @param {integer} version number
 * @return {boolean} whether the version is bad
 * isBadVersion = function(version) {
 *     ...
 * };
 */

/**
 * @param {function} isBadVersion()
 * @return {function}
 */
var solution = function(isBadVersion) {
    /**
     * @param {integer} n Total versions
     * @return {integer} The first bad version
     */
    return function(n) {
      //  if(n==1) return 1
        let low =0;
        let high= n;
        while (low <high){
            let mid = Math.floor((low+high)/2);
            if(isBadVersion(mid)==true){
                //mid might be the first bad version
                high =  mid
            }else {
                //if mid is not bad then the next should be
                low = mid + 1
            }
        }
        return low
    };
};