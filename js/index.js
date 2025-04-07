
const handleSubmit = (event) => {
    event.preventDefault()
    const values = {};

    values.names = document.getElementById("names").value;
    values.lastnames = document.getElementById("lastnames").value;
    values.birthdate = document.getElementById("birthdate").value;
    values.email = document.getElementById("email").value;
    values.child = document.getElementById("child").value;
    values.pass = document.getElementById("pass").value;
    values.tyc = document.getElementById("tyc").checked;
    
    console.log(values)
}