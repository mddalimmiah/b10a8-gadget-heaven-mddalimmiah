const getStoredCartList = () => {
// cart list
const storedListStr = localStorage.getItem('cart-list');
if(storedListStr){
    const storedList =JSON.parse(storedListStr);
    return storedList;
}
else{
   return [];
}
}

const addToStoreCartList =(id) =>{
    const storedList =getStoredCartList();
    if(storedList.includes(id)){
        console.log(id, 'already Exists in the cart list');
    }
    else{
        storedList.push(id);
        const storedListStr =JSON.stringify(storedList);
        localStorage.setItem('cart-list',storedListStr);

    }
}
const getStoredWishList = () => {
// Wish list
const storedListStr = localStorage.getItem('wish-list');
if(storedListStr){
    const storedList =JSON.parse(storedListStr);
    return storedList;
}
else{
   return [];
}
}

const addToStoreWishList =(id) =>{
    const storedList =getStoredWishList();
    if(storedList.includes(id)){
        console.log(id, 'already Exists in the Wish list');
    }
    else{
        storedList.push(id);
        const storedListStr =JSON.stringify(storedList);
        localStorage.setItem('wish-list',storedListStr);

    }
}

export {addToStoreCartList, addToStoreWishList, getStoredCartList, getStoredWishList};

