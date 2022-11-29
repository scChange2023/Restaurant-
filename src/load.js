///Imports


import loadHome from './homePage'



function createHeader() {

    let headerContainer = document.createElement("div")
    let headerTitle = document.createElement("p")
    let topRow = document.createElement("nav")



    headerContainer.classList.add("headerContainer")

    headerTitle.classList.add("title")
    headerTitle.textContent = "Pepperonis"
    topRow.classList.add("topRow")

    let headerName = ["Home", "Menu", "Contact"]
    let headerID = ["coverHome", "coverMenu", "coverContact"]

    for (let i = 0; i < headerName.length; i++) {
        let header = document.createElement("button")
        header.classList.add("header")
        header.setAttribute("id",headerID[i])
        header.textContent = headerName[i]
        topRow.appendChild(header)
    }

    //APPNEDING DIVS
    headerContainer.appendChild(headerTitle)
    headerContainer.appendChild(topRow)
    
    return headerContainer
}


function createMain() {
    let main = document.createElement("div")
    main.classList.add("main")
    main.setAttribute("id", "main");

    return main

}
function createFooter() {

    let footer = document.createElement("div")
    footer.classList.add("footer")
    footer.setAttribute("id", "footer");
    footer.textContent ="Copyright © 2022 scChange2023"

    return footer
}

export function initWebsite() {
    let content = document.getElementById('content')
    content.appendChild(createHeader())
    content.appendChild(createMain());
    content.appendChild(createFooter());
    loadHome()
}






