

function createContact() {

    let thirdContainer = document.createElement("div")
    thirdContainer.classList.add("third")

    let addressHeader = document.createElement("h5")
    let address = document.createElement("p")

    let numberHeader = document.createElement("h5")
    let number = document.createElement("h5")

    let northPole = document.createElement("img")
    northPole.classList.add("northPole")

    addressHeader.textContent = "Address:"
    address.textContent = "The North Pole"
    numberHeader.textContent = "Number:"
    number.textContent = " 111-111-1111"
    northPole.src = "/src/menuPics/northPole.jpg"



    thirdContainer.appendChild(addressHeader)
    thirdContainer.appendChild(address)
    thirdContainer.appendChild(numberHeader)
    thirdContainer.appendChild(number)
    thirdContainer.appendChild(northPole)



    return thirdContainer
}

function loadContact() {
    const main = document.getElementById("main");
    main.innerHTML = ""
    main.appendChild(createContact());

}

export default loadContact