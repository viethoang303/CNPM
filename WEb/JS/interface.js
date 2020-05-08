const interface = {}
interface.navBarHandler = function(){
    let signup = document.getElementById('sign-up-btn')
    signup.onclick = function(){
        view.showComponents('signUp')
    }
    let logo = document.getElementById('logo')
    logo.onclick = function(){
        view.showComponents('home')
    }
    let cart = document.getElementById('cart')
    cart.onclick = function(){
        
    }
}