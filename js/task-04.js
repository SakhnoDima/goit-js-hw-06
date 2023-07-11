let valueToShow = 0;
const linkForValueToShow = document.querySelector("#value")


const decrementButton = document.querySelector('button[data-action="decrement"]');

decrementButton.addEventListener("click", () => 
linkForValueToShow.textContent = valueToShow -=1);



const incrementButton = document.querySelector('button[data-action="increment"]');

incrementButton.addEventListener("click", () => 
linkForValueToShow.textContent = valueToShow +=1);



