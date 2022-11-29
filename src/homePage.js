
// export {homeModule}


function createHome() {

    let firstContainer = document.createElement("div")
    firstContainer.classList.add("first")
    
    let p1 = document.createElement("p")
    p1.textContent = "Pizza fit for the king"

    let p2 = document.createElement("p")
    p2.textContent = "Family made since 1954"


    const img = document.createElement("img")
    img.src = "/src/menuPics/elvis_eating.jpeg"
    img.classList.add("elvis")

    let p3 = document.createElement("p")
    p3.textContent = "Order online or stop by today!"


    firstContainer.appendChild(p1)
    firstContainer.appendChild(p2)
    firstContainer.appendChild(img)
    firstContainer.appendChild(p3)


    return firstContainer

}

function loadHome () {
    const main = document.getElementById("main");
    main.innerHTML = ""
    main.appendChild(createHome());
}

export default loadHome;