const controller = {
    syncUrl(name,additionParams) {
        if(utils.getParamPath() != name) {
          let url = window.location.origin + window.location.pathname + utils.genParamPath(name)
          if(additionParams instanceof Object && Object.keys(additionParams).length) {
            url += `&${Object.keys(additionParams).map(function(key) {
                return `${key}=${additionParams[key]}`
            }).join('&')}`
        }
        window.location.assign(url)
        }
    },
    
    init() {
        let currentPath = utils.getParamPath()
        if(utils.isValidPath(currentPath)) {
          view.showComponents(currentPath)
        } else {
          view.showComponents(path.home)
        }
    }
}
controller.register = async function(registerInfo){
  try{
    let result = await firebase.auth().createUserWithEmailAndPassword(registerInfo.email, registerInfo.password)
    await firebase.auth().currentUser.updateProfile({
      displayName: registerInfo.firstname + " " + registerInfo.lastname
    })
    console.log(result.user)
  } catch(error){
    console.log("lỗi")
  }
}

controller.logIn = async function(logInInfo){
  try{
    let result = await firebase.auth().signInWithEmailAndPassword(logInInfo.email,logInInfo.password)
    model.authen(result.user)
    view.showComponents('home')
  } catch(error){
    console.log("lỗi")
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