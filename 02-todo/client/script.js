todoForm.title.addEventListener("input", (e) => validateField(e.target));
todoForm.title.addEventListener("blur", (e) => validateField(e.target));
todoForm.description.addEventListener("input", (e) => validateField(e.target));
todoForm.description.addEventListener("blur", (e) => validateField(e.target));
todoForm.dueDate.addEventListener("input", (e) => validateField(e.target));
todoForm.dueDate.addEventListener("blur", (e) => validateField(e.target));

todoForm.addEventListener("submit", onSubmit);

let titleValid = true;
let description = true;
let dueDate = true;

function validateField(field) {
    const {name, value} = field;

    let validationMessage = "";
    switch(name) {
        case "title": {
            if(value.length < 2) {
                titleValid = false;
                validationMessage= "Fältet 'Titel' måste innehålla minst 2 tecken."
                console.log(validationMessage)
            }else if (value.length > 100) {
                titleValid = false;
                validationMessage= "Fältet 'Titel' får inte innehålla mer än 100 tecken tecken."
            }
            break;
        }
        case "description": {
            if (value.length > 500) {
                descriptionValid = false;
                validationMessage= "Fältet 'Titel' får inte innehålla mer än 500 tecken tecken."
            }
            break;
        }
        case "dueDate": {
            if (value.length == 0) {
                descriptionValid = false;
                validationMessage= "Fältet 'Slutförd senast' är obligatoriskt."
            }
            break;
        }
    }
    field.previousElementSibling.innerText = validationMessage;
    field.previousElementSibling.classList.remove("hidden");

}

function onSubmit(e){
    e.preventDefault();
    console.log(e);
}