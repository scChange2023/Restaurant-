
import {initWebsite} from './load'
import loadHome from './homePage'
import loadMenu from './menu'
import loadContact from './contact'


//Initialzie Website - Home
initWebsite()


let homeButton = document.querySelector("#coverHome")
let menuButton = document.querySelector("#coverMenu")
let contactButton = document.querySelector("#coverContact")


//Make Home Button Active

homeButton.classList.add("active")


//EventListener to header button select



homeButton.addEventListener("click", function() {
    loadHome()
    homeButton.classList.add("active")
    menuButton.classList.remove("active")
    contactButton.classList.remove("active")
})

menuButton.addEventListener("click", () => {
    
    loadMenu()
    menuButton.classList.add("active")
    homeButton.classList.remove("active")
    contactButton.classList.remove("active")

})

contactButton.addEventListener("click", () => {
    loadContact()
    contactButton.classList.add("active")
    menuButton.classList.remove("active")
    homeButton.classList.remove("active")
    
})