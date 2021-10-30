function validaNombre() {
    let nombre = document.forms["registro"]["nombre"].value;
    const patron = /[a-zA-Z'*]+ [a-zA-Z'* *]+/gm;
    //esta expresion regular selecciona cualquier cadena de letras de la a a la z (minusculas o mayusculas), de cualquier longitud, separada por 1 espacio, y de al menos una letra antes y despues del espacio). Porque se supone que nombre y apellidos solo tienen letras y se escriben separados por un espacio. Tambien permite apostrofes.
    //la g (global) es para que tome todas las coincidencias, no devolverla despues de la primera. La m es para que distinga entre lineas.
    const patronNumeros = /[0-9]+/gm;

    if (nombre == "") {
        document.getElementById("nombreMal").innerHTML = "Error. El nombre es obligatorio";
    
    //el metodo test da true si la variable coincide con la expresion regular
    } else if (!patron.test(String(nombre))) {
        if (patronNumeros.test(String(nombre))) {
            document.getElementById("nombreMal").innerHTML = "Error. No introduzcas numeros";
        } else {
            document.getElementById("nombreMal").innerHTML = "Error. Introduce al menos 1 apellido, separado por un espacio.";
        }
          
    } else {
          document.getElementById("nombreMal").innerHTML = "";
    }
}

function validaFecha() {
    let fecha_nac = document.forms["registro"]["fecha_nac"].value;

    if (fecha_nac == "") {
        document.getElementById("fechaMal").innerHTML = "La fecha es obligatoria";
 
    } else {
        document.getElementById("fechaMal").innerHTML = "";
    }
}

function validaTelefono() {

    let telefono = document.forms["registro"]["telefono"].value;

    let elTele = "El teléfono ";

    if (telefono == "") {
        document.getElementById("telefonoMal").innerHTML = elTele+"es obligatorio";
 
    } else if (telefono.length != 9) {
        document.getElementById("telefonoMal").innerHTML = elTele+"debe ser de 9 dígitos";
 
    } else {
        document.getElementById("telefonoMal").innerHTML ="";
    }
}

function validaEmail() {
    let email = document.forms["registro"]["email"].value;
    const patron = /^[a-zA-Z0-9\-_]+[a-zA-Z0-9\-_\.]{0,252}[a-zA-Z0-9\-_]+@[a-zA-Z0-9][a-zA-Z0-9\-]{0,61}[a-zA-Z0-9]\.[a-z]{2,}(\.[a-z]{2,})?/gm;
                                                            //^ para dom de 2º nivel
    //const sinArroba = /[a-zA-Z0-9\-]+\.+[a-z]+/gm;
    //const sinPunto = /[a-zA-Z]+@[a-zA-Z0-9\-]+/gm;

    if (email == "") {
        document.getElementById("emailMal").innerHTML = "El email es obligatorio";
 
    /* } else if (sinArroba.test(String(email))){
        document.getElementById("emailMal").innerHTML = "Le falta la arroba";

    } else if (sinPunto.test(String(email))){
        document.getElementById("emailMal").innerHTML = "Le falta el punto al dominio";
 */
    } else if (!patron.test(String(email))){
        document.getElementById("emailMal").innerHTML = "Error. El correo no tiene el formato permitido.";

    } else {
        document.getElementById("emailMal").innerHTML = "";
    }
}

function validaPassword() {
    let password = document.forms["registro"]["password"].value;

    if (password == "") {
        document.getElementById("contraseñaMal").innerHTML = "La contraseña es obligatoria";
 
    } else if (password.length > 16 || password.length < 8) {
        document.getElementById("contraseñaMal").innerHTML = "La contraseña debe ser de entre 8 y 16 caracteres";

    } else {
        document.getElementById("contraseñaMal").innerHTML = "";
    }

}

function validaPassword2() {
    let password = document.forms["registro"]["password"].value;
    let password2 = document.forms["registro"]["password2"].value;
    let enviar = true;

    if (password2 == "") {
        document.getElementById("contraseña2Mal").innerHTML = "Escriba de nuevo la contraseña";
        enviar = false;
    
    } else if (!(password.valueOf() === password2.valueOf())) {
        document.getElementById("contraseñaMal").innerHTML = "";
        document.getElementById("contraseña2Mal").innerHTML = "Las contraseñas no coinciden";
        enviar = false;
 
    } else {
        document.getElementById("contraseñaMal").innerHTML = "";
        document.getElementById("contraseña2Mal").innerHTML = "";
        enviar = false;
    }

    return enviar;
}

function validarTodo() {
    return validaPassword2();
}

function submitForm(event){
    event.preventDefault();
    window.history.back();
  }