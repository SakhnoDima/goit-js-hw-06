function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
const refs = {
inputNumber : document.querySelector("input"),
btnCreate : document.querySelector("button[data-create]"),
btnDestroy : document.querySelector("button[data-destroy]"),
boxForAdd : document.querySelector("#boxes")
}

function createBoxes(amount){
  const arrForAdd = []; 
  let size = 30;
  for ( let i = 0; i < amount; i+=1){
const newEl = document.createElement("div");
newEl.style.width = `${size}px`;
newEl.style.height = `${size}px`;
newEl.style.backgroundColor = `${getRandomHexColor()}`;
size +=10;
arrForAdd.push(newEl);
}
refs.boxForAdd.append(...arrForAdd);
}

// ?==================================================
const addBoxes = event => createBoxes(refs.inputNumber.value);

refs.btnCreate.addEventListener( "click", addBoxes)


// ?==================================================
const removeElements = event => refs.boxForAdd.innerHTML = "";

refs.btnDestroy.addEventListener("click", removeElements)

