const refs = {
inputToChanged : document.querySelector("#font-size-control"),
spanToChanged: document.querySelector("#text")
}

refs.inputToChanged.addEventListener("input", changeSize)

function changeSize (event) {
const size = event.currentTarget.value;

refs.spanToChanged.style.fontSize = `${size}px`;


}