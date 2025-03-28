
// get all product from local storage

import toast from "react-hot-toast";

const getAllWishListProduct =() =>{
    const allWishListProducts =localStorage.getItem('wishListProduct');
    console.log(allWishListProducts)
    if(allWishListProducts){
        const wishListProduct =JSON.parse(allWishListProducts);
        console.log(wishListProduct)
        return wishListProduct;
       
    }
    else{
        console.log([])
        return [];
    }
    // console.log(cartProduct)
}
// add a product local storage

const addWishListProduct = product => {
    // get all previous product data
    // console.log(product)
 const wishListProduct =getAllWishListProduct();
 const isExist=wishListProduct.find(item => item.product_id ==product.product_id);
 if(isExist){
    return toast.error('Product already exist!');
 }
//  console.log(cartProduct)
 wishListProduct.push(product);
 localStorage.setItem('wishListProduct', JSON.stringify(wishListProduct));
 toast.success(' Product Successfully added!');
}


// remove a product local storage
const removeWishListProduct = (product_id) =>{
    const wishListProduct =getAllWishListProduct();
    const remainingProduct =wishListProduct.filter(product => product.product_id !=product_id);
    localStorage.setItem('wishListProduct', JSON.stringify(remainingProduct));
    toast.success(' Product Successfully removed!');
}

export {addWishListProduct, getAllWishListProduct, removeWishListProduct}