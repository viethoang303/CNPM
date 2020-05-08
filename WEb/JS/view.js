const view = {}
view.showComponents = async function(name){
    await controller.downloadProduct()
    switch(name){
        case path.home:{
            controller.syncUrl(path.home)
            let app = document.getElementById('app')
            app.innerHTML = components.navBarTop + components.navBar + components.categories+components.showProduct+components.footer
            view.showProduct()
            view.logIn()
            interface.navBarHandler()
            break
        } 
        case path.signUp:{
            controller.syncUrl(path.signUp)
            let app = document.getElementById('app')
            app.innerHTML = components.navBarTop + components.signUp+components.footer
            interface.navBarHandler()

            let form = document.getElementById('form-register')
            form.onsubmit = formSubmitHandler

            function formSubmitHandler(e){
                e.preventDefault()
                // lấy dữ liệu người dùng điền vào
                let registerInfo = {
                    email: form.email.value,
                    password: form.password.value,
                    firstname: form.firstname.value,
                    lastname: form.lastname.value
                }
                // 2. validate registerInfo
                if(registerInfo.email){
                    view.setText('email-error','')
                } else {
                    view.setText('email-error','Invalid email!')
                }
                 
                if(registerInfo.password){
                    view.setText('password-error','')
                } else {
                    view.setText('password-error','Invalid password!')
                }

                if(registerInfo.firstname){
                    view.setText('firstname-error','')
                } else {
                    view.setText('firstname-error','Invalid firstname!')
                }

                if(registerInfo.lastname){
                    view.setText('lastname-error','')
                } else {
                    view.setText('lastname-error','Invalid lastname!')
                }

                
                // Gửi thông tin người dùng lên server
                if(registerInfo.email
                    && registerInfo.password
                    && registerInfo.lastname
                    && registerInfo.firstname){
                        // console.log("1")
                        controller.register(registerInfo)
                    }
            }
            break
        }
        case path.info:{
            controller.syncUrl(path.info)
            let app = document.getElementById('app')
            app.innerHTML = components.navBarTop+components.info+components.footer
            view.showInfo(model.activeItem)
            view.logIn()
            model.addToCart()
            interface.navBarHandler()
            break
        }
    }
}

view.setText = function(id,text){
    document.getElementById(id).innerText = text
}

view.showProduct = function(){
    let show = document.getElementById('show-product')
    show.innerHTML = ""
    for(product of model.products){
        let html = `
            <div class="product product-show col-md-3 col-sm-4 filter trangphuccaulong" id = "${product.id}">
                <div class="each-item " >
                    <div class="product-top ">
                        <a><img src="${product.image}"></a>
                        <div class="overlay-right ">
                            <button type="button " class="btn btn-secondary " title="Quick Shop ">
                                <i class="fa fa-eye "></i>
                            </button>
                            <button type="button " class="btn btn-secondary " title="Add to Wishlist ">
                                <i class="fa fa-heart-o "></i>
                            </button>
                            <button type="button " class="btn btn-secondary " title="Add to Cart ">
                                <i class="fa fa-shopping-cart "></i>
                            </button>
                        </div>
                    </div>
                    <div class="product-bottom text-center ">
                        <i class="fa fa-star "></i>
                        <i class="fa fa-star "></i>
                        <i class="fa fa-star "></i>
                        <i class="fa fa-star "></i>
                        <i class="fa fa-star-half-o "></i>
                        <h3> ${product.name} </h3>
                        <h5>$ ${product.price}</h5>
                    </div>
                </div>
            </div>
        `
        show.innerHTML += html
    }
    for(let i=0; i<model.products.length; i++){
        let div = document.getElementById(model.products[i].id)
        div.onclick = function(){
            model.activeItems = product
            localStorage.setItem('activeItem', i)
            view.showComponents('info')
        }
    }
}

view.showInfo = function(i){
    let info = document.getElementById('info-of-product')
    info.innerHTML =""+ `
        <div class="container">
            <div class="row">
                <div class="col-md-5">
                    <div id="product-slider" class="carousel slide carousel-fade" data-ride="carousel">
                        <div class="carousel-inner">
                            <div class="carousel-item active">
                                <img src="${model.products[i].image}" class="d-block">
                            </div>
                            <div class="carousel-item">
                                <img src="images/pic-2.jpg" class="d-block">
                            </div>
                            <div class="carousel-item">
                                <img src="images/pic-3.jpg" class="d-block">
                            </div>
                            <a class="carousel-control-prev" href="#product-slider" role="button" data-slide="prev">
                                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                                <span class="sr-only">Previous</span>
                            </a>
                            <a class="carousel-control-next" href="#product-slider" role="button" data-slide="next">
                                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                                <span class="sr-only">Next</span>
                            </a>
                        </div>
                    </div>
                </div>

                <div class="col-md-7">
                    <p class="new-arrival text-center">NEW</p>
                    <h2>${model.products[i].name}</h2>
                    <p>Product Code: ${model.products[i].id}</p>
        
                    <i class="fa fa-star"></i>
                    <i class="fa fa-star"></i>
                    <i class="fa fa-star"></i>
                    <i class="fa fa-star"></i>
                    <i class="fa fa-star-half-o"></i>
        
                    <p class="price">USD $${model.products[i].price}</p>
                    <p><b>Availability:</b> In Stock</p>
                    <p><b>Condition:</b> New</p>
                    <p><b>Brand:</b> ${model.products[i].mark}</p>
                    <label>Quantity: </label>
                    <input type="text" value="1">
                    <button type="button" class="btn btn-primary" id = "cart-container">Add to Cart</button>
                </div>
            </div>
        </div>
    `
}

view.logIn = function(){
    if(model.authUser==null){
        let loginFormOn = document.getElementById('sign-up')
        loginFormOn.onclick = function(){
            document.getElementById('form-group').style.display = 'block'
        }
        let loginFormOff = document.getElementById('off')
        loginFormOff.onclick = function(){
            document.getElementById('form-group').style.display = 'none'
        }
    
        let formLogIn = document.getElementById('form-group')
        formLogIn.onsubmit = function(e){
            e.preventDefault()
            let logInInfo = {
                email: formLogIn.email.value,
                password: formLogIn.password.value
            }
            if(logInInfo.email && logInInfo.password){
                console.log("buoc 1")
                controller.logIn(logInInfo)
            }
        }
    }
}