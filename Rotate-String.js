/**
 * @param {string} s
 * @param {string} goal
 * @return {boolean}
 */
var rotateString = function(s, goal) {

    return s.length === goal.length && (s + s).includes(goal);

    /*
    if (s.length !== goal.length) return false;
    for (let i = 0; i < s.length; i++) {
        s = s.slice(1) + s[0]; // rotate left by 1
        if (s === goal) return true;
    }
    
    return false;
    */
    /*
    let i=1;
    let k = i%s.length;
    while(i<=s.length){
        s = s.slice(-k) + s.slice(0, -k);
        if(s==goal) return true
        i++
    }
    return false
    */
};