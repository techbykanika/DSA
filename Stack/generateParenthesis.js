/**
 * @param {number} n
 * @return {string[]}
 */

var generateParenthesis = function(n) {
    // only add open parenthesis if open<n
    // only add a closing parathesis if closed < open 
    // valid IIF open=closed==n
    //res=[]
    const backtrack=(openN,closedN,str,res) =>{
        if(openN== n && closedN == n){
            res.push(str);
            return
        }
        if (openN<n){   
            backtrack(openN+1,closedN,`${str}(`,res);
        }
        if(closedN<openN){
            backtrack(openN,closedN+1,`${str})`,res);

        }
    }
    backtrack(0,0,'',[]);
    return res
};

generateParenthesis(3);