/**
 * @param {number} num
 * @return {number}
 */
var maximum69Number  = function(num) {
    /*
    let str = num.toString();
    console.log(str)
    for(let i=0;i<str.length;i++){
        console.log(str[i])
        if(str[i]=='6'){
           str= str.slice(0, i) + "9" + str.slice(i + 1);
            break;
        } 

    }
    return Number(str)
    */
    return Number(num.toString().replace('6','9'))
};