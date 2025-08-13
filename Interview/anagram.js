function findAnagram(str1,str2){
    var chCount={}
    for(let ch of str1){
        if(chCount[ch]){
            chCount[ch]= chCount[ch]+1

        }
       else {
           chCount[ch]=0;
       }

    }
    for(let ch of str2){
        if(!chCount[ch]){
            return false
        } 
        chCount[ch]= chCount[ch]-1
    }
    return true;
}
ans=findAnagram("abc","cba");
console.log(ans);
// diff sort bubble sort insetion sort and selections ort 
//merge sort nlogn
// [1,10,15,20,19]
// logn 
// nlogn
