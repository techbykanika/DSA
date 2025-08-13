// //1* (2+3*((6+7))
// //((2+3))
// function DetermineExtraBrackets(expression)
// {
//     let tokens= expression.split("");
//     let setOpeningBrackets= new Set(["(","{","["])
//     let setClosingBrackets= new Set([")","}","]"])
//     let stack=[];
//     for(let i=0;i<tokens.length;i++)
//     {
//         if(setOpeningBrackets.has(tokens[i]))
//         {
//             stack.push([tokens[i],false])
//         }
//         else if( setClosingBrackets.has(tokens[i]))
//         {
//             let[closeBracket,hasOperator]=stack.shift();
//            // if(!setOpeningBrackets.has(tokens[i-1])) 
//             if(hasOperator==false)return true
//         }
//         else{
//             if(stack.length!==0)
//             stack[stack.length-1][1]=true;


//         }
        

//     }
//     return false;

// }
// console.log(DetermineExtraBrackets("1*(2+3*(6+7)"));
console.log("a");
setTimeout(() => {
  console.log("b");
}, 0);
const promise = new Promise((resolve) => {
  console.log("e");
  resolve("c");
});
promise.then((result) => {
  console.log(result);
});
console.log("d");

let obj1 = {};
let obj2 = {};
console.log(obj1 == obj2);
console.log(obj1 === obj2);
// // one array
// const votes = ['a','a','b','b','a','b','c'];

// votes.sort((a,b)=>a-b);
// let map=new Map();
// function FindFreq(votes)
// {
//     for(let i=0;i<votes.length;i++)
//     {
//         if(map.has(arr[i]))
//         {
//             map.get(arr[i])++;
//         }
//         else{
//             map.set(a[i],1);
//         }
//     }
//     console.log(map.get(arr[0]));

// }
// FindFreq(votes);

// input string 
// freq for each char in the string

// palindrone ana
// level
//  l  r
// aaaa
//

public void palindrome(string s)
{
    if(s.Lenght==0)
    {
        console.WriteLine("this is wrong")
    }
    else 
    {
        int left=0;
        int right=s.length;
        bool flag=true
        //aaaa
        //left=0 right=3
        //left=1 right=2
        //left=2 right=3
        //level
        //left=0 right=4
        //
        while(left<right)
        {
            if(s[left]==s[right]){
                left++;
                right--
            }
            else
            {
             flag=false

                break
            }

        }
        if(flag)
        {
            console.WriteLine("this is not planidromic")
        }
        else 
        {
            console.WriteLine("this is palnidrome")
        }

}
// id parentId
// a   null
//b    a
//c    d   xyz
//d    c
//e    c
function x
{
    parent=function findparent()
    delAllFamily(parent)

    
}


function delAllFamily()
{
    delAllFamily(parent)
    for{
        delAllFamily(currentparenccchild);
        del

    }

}