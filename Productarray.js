const ProductArray=[
    {
        id:1,
        title:"Coffee",
        price:"$4.99"
    },
    {
        id:2,
        title:"Sunglasses",
        price:"$19.99"
    },
    {
        id:3,
        title:"Camera",
        price:"$29.99"
    },
]
function getProductData(id){

 let productData=ProductArray.find(product=>product.id==id);
 if(productData==undefined){
    console.log("Product data does not exist for id "+id);
    return undefined
 }
 return productData;

}
export {ProductArray,getProductData};