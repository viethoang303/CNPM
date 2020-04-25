const controller = {
    syncUrl(name) {
        if(utils.getParamPath() != name) {
          window.location.replace(window.location.origin + window.location.pathname + utils.genParamPath(name))
        }
    },
    init() {
        let currentPath = utils.getParamPath()
        if(utils.isValidPath(currentPath)) {
          view.showComponents(currentPath)
        } else {
          view.showComponents(paths.home)
        }
    }
}

controller.downloadProduct = async function(){
    let result = await firebase.firestore().collection('Badminton packet').get()
    if(model.products.length==0){
        let products = result.docs.map(function(doc){
            let product = doc.data()
            product.id = doc.id
            return product
        })
        model.saveProduct(products)
    }
}
