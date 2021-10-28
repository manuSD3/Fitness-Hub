function validarFormulario() {
    let nombre = document.forms["registro"]["nombre"].value;
    let fecha_nac = document.forms["registro"]["fecha_nac"].value;
    let telefono = document.forms["registro"]["telefono"].value;
    let email = document.forms["registro"]["email"].value;
    let password = document.forms["registro"]["password"].value;
    let password2 = document.forms["registro"]["password2"].value;

    let enviar = true;

    if (nombre == "") {
      //alert("Rellena el nombre");
      document.getElementById("nombreMal").innerHTML = "^ El nombre es obligatorio ^";
      enviar = false;
    }

    if (fecha_nac == "") {
        //alert("Rellena el nombre");
        document.getElementById("fechaMal").innerHTML = "^ La fecha es obligatoria ^";
        enviar = false;
    }

    let elTele = "El teléfono ";

    if (telefono == "") {
        //alert("Rellena el nombre");
        document.getElementById("telefonoMal").innerHTML = elTele+"es obligatorio ";
        enviar = false;
    } else if (telefono.length != 9) {
        document.getElementById("telefonoMal").innerHTML = elTele+"debe ser de 9 dígitos";
        enviar = false;
    }

    if (email == "") {
        //alert("Rellena el nombre");
        document.getElementById("emailMal").innerHTML = "^ El email es obligatorio ^";
        enviar = false;
    }

    if (password == "") {
        //alert("Rellena el nombre");
        document.getElementById("contraseñaMal").innerHTML = "^ La contraseña es obligatoria ^";
        enviar = false;
    }

    if (password2 == "") {
        //alert("Rellena el nombre");
        document.getElementById("contraseña2Mal").innerHTML = "^ Escriba de nuevo la contraseña ^";
        enviar = false;
    }

    return enviar;

  }