const nameOutputSpan = document.querySelector("#name-output")

const textInput = document.querySelector("#name-input");

textInput.addEventListener( "input", (event) => {
nameOutputSpan.textContent = event.currentTarget.value;
});

