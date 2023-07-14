const refs = {
nameOutputSpan :document.querySelector("#name-output"),
textInput : document.querySelector("#name-input")
}

refs.textInput.addEventListener( "input", onInput);

function onInput (event){

//! Виконав як ти показав та через тернарник

// event.currentTarget.value ?
// refs.nameOutputSpan.textContent = event.currentTarget.value 
// :refs.nameOutputSpan.textContent = "Anonymous";
    
refs.nameOutputSpan.textContent = event.currentTarget.value || "Anonymous";
}

