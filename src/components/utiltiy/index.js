
// get all product from local storage

import toast from "react-hot-toast";

const getAllProduct =() =>{
    const allProducts =localStorage.getItem('cartProduct');
    console.log(allProducts)
    if(allProducts){
        const cartProduct =JSON.parse(allProducts);
        console.log(cartProduct)
        return cartProduct;
       
    }
    else{
        console.log([])
        return [];
    }
    // console.log(cartProduct)
}
// add a product local storage

const addCartProduct = product => {
    // get all previous product data
    // console.log(product)
 const cartProduct =getAllProduct();
 const isExist=cartProduct.find(item => item.product_id ==product.product_id);
 if(isExist){
    return toast.error('Product already exist!');
 }
//  console.log(cartProduct)
 cartProduct.push(product);
 localStorage.setItem('cartProduct', JSON.stringify(cartProduct));
 toast.success(' Product Successfully added!');
}


// remove a product local storage
const removeCartProduct = (product_id) =>{
    const cartProduct =getAllProduct();
    const remainingProduct =cartProduct.filter(product => product.product_id !=product_id);
    localStorage.setItem('cartProduct', JSON.stringify(remainingProduct));
    toast.success(' Product Successfully removed!');
}

export {addCartProduct, getAllProduct, removeCartProduct}