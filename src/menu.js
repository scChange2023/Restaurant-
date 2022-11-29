function createMenu() {

    let secondContainer = document.createElement("div")
    secondContainer.classList.add("second")
    
    secondContainer.appendChild(createMenuItem("/src/menuPics/pizza1.jpg", "Cheese", "Tomato sauce, Mozarella,\
     Tomato, Homemade sausage, Garlic, Basil"))

    secondContainer.appendChild(createMenuItem("/src/menuPics/pizza2.png", "Ham", "White cheese, Ham,\
     Red pepper, olives"))

    secondContainer.appendChild(createMenuItem("/src/menuPics/pizza3.png", "Tomato", "Banana Pepper, Tomato, Mushrooms, Spinach"))

    secondContainer.appendChild(createMenuItem("/src/menuPics/pizza4.png", "Pepperoni", "Jalapeneos, Pepperoni"))

    secondContainer.appendChild(createMenuItem("/src/menuPics/pizza5.png", "White", "Olives, Spinach, Medium Crust"))

    secondContainer.appendChild(createMenuItem("/src/menuPics/pizza7.png", "Basil", "White, Tomato"))

    return secondContainer
}


function createMenuItem(imageSource, name, description) {

    let menuItem = document.createElement("div")
    let itemPic = document.createElement("img")
    let itemName = document.createElement("h2")
    let itemDescription = document.createElement("p")

    itemPic.src = imageSource
    itemName.textContent = name
    itemDescription.textContent = description

    menuItem.classList.add("menuItem")
    itemPic.classList.add("menuPic")

    menuItem.appendChild(itemPic)
    menuItem.appendChild(itemName)
    menuItem.appendChild(itemDescription)

    return menuItem

}

function loadMenu() {
    const main = document.getElementById("main");
    main.innerHTML = ""
    main.appendChild(createMenu());
}



export default loadMenu