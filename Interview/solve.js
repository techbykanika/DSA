function priceCheck(products, productPrices, productSold, soldPrice) {
    let productPriceMap= new Map();
    let error=0
    for (let i=0;i<products.length ;i++)
    {
        productPriceMap.set(products[i],productPrices[i]);
        
    }
 
    for(let i=0;i<productSold.length;i++){
        let diff=productPriceMap.get(productSold[i])-soldPrice[i]
        if(diff==0.00){
            error=error+1
        }
    }
    return error;
    // Write your code here

}
console.log(priceCheck(['rice', 'sugar', 'wheat', 'cheese'],[16.89, 56.92, 20.89, 345.99],['rice', 'cheese'],[18.99, 400.89]));