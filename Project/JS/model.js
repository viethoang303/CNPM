const model = {
    products:[],
    cart:[]
    
}

model.saveProduct = function(products){
    for(let product of products){
        model.products.push(product)
    }
}
