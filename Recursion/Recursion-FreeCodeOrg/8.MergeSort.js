function mergeSort(arr,start,end){
    if(start<end){
        let mid=Math.floor((start+end)/2)
        mergeSort(arr,left,mid)
        mergeSort(arr,mid+1,end)
        merge(arr,start,end,mid)
    }
   
}
function merge(arr,start,end,mid){
    let temp = [];
    let i=start;// left sub array
    let j=mid+1;// right sun array
    let k=0;
    while(i<=mid && j<=end){
        if(arr[i]<arr[j]){
            temp[k]=arr[i]
            i++;
           
        }
        else{
            temp[k]=arr[j]
            j++
            
        }
        k++
    }
    while(i<=mid){
        temp[k++]=arr[i++]
    }
    while(j<=mid){
        temp[k++]=arr[j++]
    }
    for( i=start;i<end;i++){
        data[i]=temp[i-start]
    }
}