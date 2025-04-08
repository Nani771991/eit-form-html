
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
      document.getElementById("names").style.border = null
    }  else {
        isValid = false
        document.getElementById("names").style.border = "1px solid red"
    }
    if (validateStgLength(lastnames)) {
        values.lastnames = lastnames;
        document.getElementById("lastnames").style.border = null
      }  else {
          isValid = false
          document.getElementById("lastnames").style.border = "1px solid red"
      }
      if (birthdate) {
        values.birthdate = birthdate;
        document.getElementById("birthdate").style.border = null
      }  else {
          isValid = false
          document.getElementById("birthdate").style.border = "1px solid red"
      }
      if (validateEmail(email)) {
        values.email = email;
        document.getElementById("email").style.border = null
      }  else {
          isValid = false
          document.getElementById("email").style.border = "1px solid red"
      }

    values.child = child;
    values.pass = pass;
    values.tyc = tyc;

    if (isValid) {
        console.log(values)
    }
}

const validateStgLength = (string) => string.length >= 2

const validateEmail = (email) => {
    const regexp = new RegExp(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/)
    return regexp.test(email); 
}