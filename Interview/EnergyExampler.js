// input is a string => "kanika" first non repeating char index of first no repeating char
// crate a map=> fremap => k:2, a:2 n:1 i:1

function findFirstNoRepeatingChar(str){

    let len=str.length;
    let map = new Map();
    for(let i=0;i<len;i++ ){

        if(map.has(str[i])){
            // console.log(map.get(str[i])[1])
            map.get(str[i])[0]++;
        }
        else{
            // key:[freq,index] => only stroign the index first apperacce
            map.set(str[i],[1,i]);
        }


    }
    console.log(map)
    let ans;
    for(let [key,value] of map){
       if(value[0]==1){
        return value[1]
       }
    }
    return ans;

}

console.log(findFirstNoRepeatingChar("kaanika"));