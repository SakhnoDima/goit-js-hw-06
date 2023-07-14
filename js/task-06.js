const refs = {
input : document.querySelector("#validation-input")
}


refs.input.addEventListener("blur", inputOnBlur )

function inputOnBlur (event) {
    const dataLength = parseInt(event.currentTarget.dataset.length);
    const lengthToCheck = event.currentTarget.value.length;


if (dataLength === lengthToCheck) {
    event.currentTarget.classList.add("valid")
    event.currentTarget.classList.remove("invalid")
   
 } else {event.currentTarget.classList.add("invalid")
         event.currentTarget.classList.remove("valid")}

}