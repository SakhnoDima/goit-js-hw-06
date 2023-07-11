let valueToShow = 0;
const linkForValueToShow = document.querySelector("#value")

const decrementButton = document.querySelector('button[data-action="decrement"]');

function onDecrementButtonClick(event){
linkForValueToShow.textContent = valueToShow -=1};

decrementButton.addEventListener("click", onDecrementButtonClick);    


const incrementButton = document.querySelector('button[data-action="increment"]');

function onIncrementButtonClick(event){
linkForValueToShow.textContent = valueToShow +=1};


incrementButton.addEventListener("click", onIncrementButtonClick);

