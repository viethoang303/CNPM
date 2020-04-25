const view = {}

view.showComponents = async function(name){
    await controller.downloadProduct()
    switch(name) {
        case paths.home:{
            controller.syncUrl(paths.home)
            let app = document.getElementById('app')
            app.innerHTML = components.header+components.body+components.footer
            interface.navBarHandler()
            break
        }
        case paths.racket:{
            controller.syncUrl(paths.racket)
            let app = document.getElementById('app')
            app.innerHTML = components.header
            interface.navBarHandler()
            break
        }
        case paths.shoes:{
            controller.syncUrl(paths.shoes)
            let app = document.getElementById('app')
            app.innerHTML = components.header+components.body
            interface.navBarHandler()              
            
            break
        }
        case paths.shirt:{
            controller.syncUrl(paths.shirt)

            let app = document.getElementById('app')
            app.innerHTML = components.header
            interface.navBarHandler()
            break
        }
        case paths.accessories:{
            controller.syncUrl(paths.accessories)
            let app = document.getElementById('app')
            app.innerHTML = components.header
            interface.navBarHandler()
            break
        }
    }
}

// view.showListProduct = function(){
//     app.innerHTML+=components.listProduct
// }
// view .offListProduct = function(app){
//     app.innerHTML-=components.listProduct
// }