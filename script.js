//Comments:
//is the id direction correct?


//create button using DOM
let btn = document.createElement("button")
let btnText = document.createTextNode("Add Square")
btn.appendChild(btnText)
document.body.appendChild(btn)

let container = document.createElement("div")
container.className = "boxes"
document.body.appendChild(container)

let idCount = 0

function getRandomColor() {
    let colorArray = ["blue", "teal", "orange", "black", "violet"];
    let randomIndex = Math.floor(Math.random() * colorArray.length);
    return colorArray[randomIndex];
}

//when a button is clicked a new div should be added to page.
btn.addEventListener("click", function () {
    let innerDiv = document.createElement("div")
    innerDiv.className = "innerDiv"
    container.appendChild(innerDiv)

    //number shows when mouseover
    innerDiv.addEventListener("mouseover", function () {
        let innerDivText = document.createTextNode(idCount)
        idCount++;
        innerDiv.appendChild(innerDivText)
        //could not figure out mouseout

        innerDiv.addEventListener("click", function () {
            innerDiv.style.backgroundColor = getRandomColor();
        })
        innerDiv.addEventListener("dblclick", function () {
            if (idCount % 2 === 0) {
                container.removeChild(innerDiv.nextSibling);
            } else {
                alert("Quit Fucking Double-Clicking!!!")
            }
            if (idCount % 2 !== 0) {
                container.removeChild(innerDiv.previousSibling)
            } else {
                alert("If you dont stop double-clicking....")
            }
        })
    })
})

