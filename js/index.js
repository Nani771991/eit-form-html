
const disableSubmitButton = () => {
  const tycElem = document.getElementById("tyc")
  const btnElem = document.getElementById("submit-button")
  if (!tycElem.checked) {
    btnElem.disabled = false
  } else {
    btnElem.disabled = true
  }
}

document.getElementById("tyc").addEventListener("change", disableSubmitButton)

const validateStgLength = (string) => string.length >= 2

const validateEmail = (email) => {
    const regexp = new RegExp(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/)
    return regexp.test(email); 
}

const validateInt = (number) => number && parseInt(number) > 0;

const ValidatePassword = (pass) => {
  const regexp = new RegExp(/^(?=(?:.*\d))(?=.*[A-Z])(?=.*[a-z]){8,64}/)
  return regexp.test(pass); 
}

const CleanError = (id) => {
  document.getElementById(id).className = null
  document.getElementById(`${id}-error`).className = "helper"
  document.getElementById(`${id}-error`).innerText = ""
}

const setError = (id, helpertext) => {
  document.getElementById(id).className = "input-error"
  document.getElementById(`${id}-error`).className = "helper-error"
  document.getElementById(`${id}-error`).innerText = helpertext
}


const handleSubmit = (event) => {
    event.preventDefault()
    const values = {};
    let isValid = true;

    const names = document.getElementById("names").value;
    const lastnames = document.getElementById("lastnames").value;
    const birthdate = document.getElementById("birthdate").value;
    const email = document.getElementById("email").value;
    const child = document.getElementById("child").value;
    const pass = document.getElementById("pass").value;
    const tyc = document.getElementById("tyc").checked;
    
    if (validateStgLength(names)) {
      values.names = names;
      CleanError("names")
    }  else {
        isValid = false
      setError("names", "El nombre debe estar al menos 2 caracteres.")
    }
    if (validateStgLength(lastnames)) {
        values.lastnames = lastnames;
        CleanError("lastnames")
      }  else {
          isValid = false
          setError("lastnames", "El Apellido debe estar al menos 2 caracteres.")
        }
      if (birthdate) {
        values.birthdate = birthdate;
        CleanError("birthdate")
      }  else {
          isValid = false
          setError("birthdate", "La fecha de nacimiento es obligatoria.")
      }
      if (validateEmail(email)) {
        values.email = email;
        CleanError("email")
      }  else {
          isValid = false
          setError("email", "No es el formato correcto.")
      }
      if (validateInt(child)) {
        values.child = child;
        CleanError("child")
      }  else {
          isValid = false
          setError("child", "El campo es obligatorio.")
      }

      if (ValidatePassword(pass)) {
        values.pass = pass;
        CleanError("pass")
      }  else {
          isValid = false
          setError("pass", "La contraseña debe contener al menos 8 caracteres, al menos una mayuscula, una minuscula y un número.")
      }

    if (isValid && tyc) {
        values.tyc = tyc;
        console.log(values)
    }
}



