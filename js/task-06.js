const refs = {
input : document.querySelector("#validation-input")
}
const colors = {
    validColor : "#4caf50",
    invalidColor : "#f44336"
}

refs.input.addEventListener("blur", inputOnBlur )

function inputOnBlur (event) {
    const dataLength = event.currentTarget.dataset.length;
    const lengthToCheck = event.currentTarget.value.length;

if (dataLength <= lengthToCheck) {
    event.currentTarget.style.borderColor = colors.validColor;
 } else event.currentTarget.style.borderColor = colors.invalidColor;
}