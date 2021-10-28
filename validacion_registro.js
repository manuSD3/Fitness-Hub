function validarFormulario() {
    let nombre = document.forms["registro"]["nombre"].value;
    let fecha_nac = document.forms["registro"]["fecha_nac"].value;
    let telefono = document.forms["registro"]["telefono"].value;
    let email = document.forms["registro"]["email"].value;
    let password = document.forms["registro"]["password"].value;
    let password2 = document.forms["registro"]["password2"].value;

    let enviar = true;

    if (nombre == "") {
      document.getElementById("nombreMal").innerHTML = "^ El nombre es obligatorio ^";
      enviar = false;
    } else if (!nombre.includes(" ")) {
        document.getElementById("nombreMal").innerHTML = "Introduce al menos 1 apellido";
        enviar = false;
    } else {
        document.getElementById("nombreMal").innerHTML = "";
        //enviar = true;
    }

    if (fecha_nac == "") {
        document.getElementById("fechaMal").innerHTML = "^ La fecha es obligatoria ^";
        enviar = false;
    }
    //verificar que es mayor de 16 para poder usar la sala fitness

    let elTele = "El teléfono ";

    if (telefono == "") {
        document.getElementById("telefonoMal").innerHTML = elTele+"es obligatorio ";
        enviar = false;
    } else if (telefono.length != 9) {
        document.getElementById("telefonoMal").innerHTML = elTele+"debe ser de 9 dígitos";
        enviar = false;
    }

    if (email == "") {
        document.getElementById("emailMal").innerHTML = "^ El email es obligatorio ^";
        enviar = false;
    }

    if (password == "") {
        document.getElementById("contraseñaMal").innerHTML = "^ La contraseña es obligatoria ^";
        enviar = false;
    }

    if (password2 == "") {
        document.getElementById("contraseña2Mal").innerHTML = "^ Escriba de nuevo la contraseña ^";
        enviar = false;
    } else if (!contrasenha1.equals(contrasenha2)) {
        document.getElementById("contraseña2Mal").innerHTML = "Las contraseñas no coinciden";
        enviar = false;
    }

    

    return enviar;

  }