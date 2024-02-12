/**
 * @param {number} n
 * @return {number[]}
 */
var countBits = function(n) {
    let lst=new Array(n+1).fill(0);
    for(let i=0;i<=n;i++){
        let count=0;
        let num=i;
        while(num>0){
            if(num&1){
                count++;
            }
            num>>=1;
        }
        lst[i]=count;
        count=0;
    }
    return lst;
};
