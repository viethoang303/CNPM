const model = {
    authUser: JSON.parse(localStorage.getItem('activeUser'))||null ,

    products:[],
    activeItem: localStorage.getItem('activeItem') || [{
        name:null,
        price: null
    }],
    cart: JSON.parse(localStorage.getItem('carts')) || []

}

model.authen = function(user){
    model.authUser = user
    localStorage.setItem('activeUser', JSON.stringify(user))
}

model.saveProduct = function(products){
    for( let product of products){
        model.products.push(product)
    }
}
model.addToCart = function(){
    let cartbtn = document.getElementById('cart-container')
    cartbtn.onclick = function(){
        let product = model.products[model.activeItem]
        model.cart.push(product)
        localStorage.setItem('carts',JSON.stringify(model.cart))
        // localStorage.removeItem('carts')
    }
}