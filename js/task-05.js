const refs = {
nameOutputSpan :document.querySelector("#name-output"),
textInput : document.querySelector("#name-input")
}

refs.textInput.addEventListener( "input", onInput);

function onInput (event){
refs.nameOutputSpan.textContent = event.currentTarget.value;
    
}

