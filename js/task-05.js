const nameOutputSpan = document.querySelector("#name-output")

const textInput = document.querySelector("#name-input");

textInput.addEventListener( "input", onInput);

function onInput (event){
    nameOutputSpan.textContent = event.currentTarget.value;
}

