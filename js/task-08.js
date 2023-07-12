const refs = {
loginForm : document.querySelector(".login-form")
}

refs.loginForm.addEventListener("submit", submittedForm )

function submittedForm (event){
event.preventDefault();

const {
    elements : { email, password }
} = event.currentTarget;

if ( email.value === "" || password.value === "") {
    return alert("Заповніть всі поля форми будь ласка =) ")}

const dataToShow = {
email : email.value,
password : password.value
}

console.log(dataToShow);

event.currentTarget.reset();
}

    

