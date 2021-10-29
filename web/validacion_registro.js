function validaNombre() {
    let nombre = document.forms["registro"]["nombre"].value;

    if (nombre == "") {
        document.getElementById("nombreMal").innerHTML = "El nombre es obligatorio";
        
      } else if (!nombre.includes(" ")) {
          document.getElementById("nombreMal").innerHTML = "Introduce al menos 1 apellido";
         
      } else {
          document.getElementById("nombreMal").innerHTML = "";
          //enviar = true;
      }
}

function validaFecha() {
    let fecha_nac = document.forms["registro"]["fecha_nac"].value;

    if (fecha_nac == "") {
        document.getElementById("fechaMal").innerHTML = "La fecha es obligatoria";
        enviar = false;
    } else {
        document.getElementById("fechaMal").innerHTML = "";
    }
}

function validarFormulario() {
    
    let telefono = document.forms["registro"]["telefono"].value;
    let email = document.forms["registro"]["email"].value;
    let password = document.forms["registro"]["password"].value;
    let password2 = document.forms["registro"]["password2"].value;

    if (fecha_nac == "") {
        document.getElementById("fechaMal").innerHTML = "La fecha es obligatoria";
        enviar = false;
    } else {
        document.getElementById("fechaMal").innerHTML = "";
    }
    //verificar que es mayor de 16 para poder usar la sala fitness


    let elTele = "El teléfono ";

    if (telefono == "") {
        document.getElementById("telefonoMal").innerHTML = elTele+"es obligatorio";
        enviar = false;
    } else if (telefono.length != 9) {
        document.getElementById("telefonoMal").innerHTML = elTele+"debe ser de 9 dígitos";
        enviar = false;
    } else {
        document.getElementById("telefonoMal").innerHTML ="";
    }

    if (email == "") {
        document.getElementById("emailMal").innerHTML = "El email es obligatorio";
        enviar = false;
    } else if (email != /[abc]/i){
        document.getElementById("emailMal").innerHTML = "no tiene arroba";
        enviar = false;
    } else {
        document.getElementById("emailMal").innerHTML = "";
    }

    if (password == "") {
        document.getElementById("contraseñaMal").innerHTML = "La contraseña es obligatoria";
        enviar = false;

    } else if (password2 == "") {
        document.getElementById("contraseña2Mal").innerHTML = "Escriba de nuevo la contraseña";
        enviar = false;
    
     } else if (!(password.valueOf() === password2.valueOf())) {
        document.getElementById("contraseñaMal").innerHTML = "";
        document.getElementById("contraseña2Mal").innerHTML = "Las contraseñas no coinciden";
        enviar = false;
    } else {
        document.getElementById("contraseñaMal").innerHTML = "";
        document.getElementById("contraseña2Mal").innerHTML = "";
    }

    
    return enviar;

  }