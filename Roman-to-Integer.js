/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
    let map = {"I":1,"V":5,"X":10,"L":50,"C":100,"D":500,"M":1000};
    let res =0;
    for(let i=0;i<s.length;i++){
        let current = map[s[i]]
        let next = map[s[i+1]]
        if(next&& current <next){
            res += next - current
            i++
        }else{
            res +=current
        }
    }
    /*
    for(let i=0;i<s.length;i++){
        if(s[i]=="I"&& s[i+1]=="V") {
        res+=4 
        i++;
        }else if(s[i]=="I"&&s[i+1]=="X"){
             res+=9   
             i++;
        }else if(s[i]=="X"&&s[i+1]=="L"){
             res+=40
             i++;
        }else if(s[i]=="X"&&s[i+1]=="C"){
             res+=90
             i++;   
        }else if(s[i]=="C"&&s[i+1]=="D"){
             res+=400
             i++;
        }else if(s[i]=="C"&&s[i+1]=="M"){
             res+=900
             i++;   
        }else{
            res +=map[s[i]]
        }
    }
    */
    
    return res;
};