const interface = {}
interface.navBarHandler = function(){
    let home = document.getElementById('home')
    home.onclick = function(){
        view.showComponents('home')
    }
    let logo = document.getElementById('logo')
    logo.onclick = function(){
        view.showComponents('home')
    }
    let racket = document.getElementById('racket')
    racket.onclick = function(){
        view.showComponents('racket')
    }
    // let introduction = document.getElementById('introduction')
    // introduction.onclick = function(){
    //     view.showComponents('introduction')
    // }
    let shoes = document.getElementById('shoes')
    shoes.onclick = function(){
        view.showComponents('shoes')
    }
    // let pant = document.getElementById('pant')
    // pant.onclick = function(){
    //     view.showComponents('pant')
    // }
    let shirt = document.getElementById('shirt')
    shirt.onclick = function(){
        view.showComponents('shirt')
    }
}
// interface.viewMenu = function(app){
//     let home = document.getElementById('home')
//     home.onclick = function(){
//         view.showComponents('home')
//     }
//     let logo = document.getElementById('logo')
//     logo.onclick = function(){
//         view.showComponents('home')
//     }
//     let item = document.getElementById('menu')
//     item.onmouseover = async function(){
//         await view.showListProduct()
    
//         let racket = document.getElementById('racket')
//         racket.onclick = function(){
//             view.showComponents('racket')
//         }
//         let introduction = document.getElementById('introduction')
//         introduction.onclick = function(){
//             view.showComponents('introduction')
//         }
//         let shoes = document.getElementById('shoes')
//         shoes.onclick = function(){
//             view.showComponents('shoes')
//         }
//         let pant = document.getElementById('pant')
//         pant.onclick = function(){
//             view.showComponents('pant')
//         }
//         let shirt = document.getElementById('shirt')
//         shirt.onclick = function(){
//             view.showComponents('shirt')
//         }
        
//     }
    
// }