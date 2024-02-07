/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
    s=s.replace(/[^a-zA-Z0-9]/g, '');
    let result=s.toLowerCase()
    let comp=result.split('').reverse().join('');
    if(comp===result){
        return true;
    }else{
        return false;
    }


};