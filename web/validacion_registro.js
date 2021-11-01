function validaNombre() {
    let nombre = document.forms["registro"]["nombre"].value;
    const patron = /^([a-zA-Z']+ [a-zA-Z' ]+)$/gm;
    //esta expresion regular selecciona cualquier cadena de letras de la a a la z (minusculas o mayusculas), de cualquier longitud, separada por 1 espacio, y de al menos una letra antes y despues del espacio). Porque se supone que nombre y apellidos solo tienen letras y se escriben separados por un espacio. Tambien permite apostrofes.
    //la g (global) es para que tome todas las coincidencias, no devolverla despues de la primera. La m es para que distinga entre lineas.
    const patronNumeros = /[0-9]+/gm;
    const patronSoloLetras = /^([a-zA-Z' ]+)$/gm;
    let enviar = false;

    if (nombre == "") {

        document.getElementById("nombreMal").innerHTML = "Error. El nombre es obligatorio";

    //el metodo "test" da true si la variable coincide con la expresion regular
    } else if (patronNumeros.test(String(nombre))) {

        document.getElementById("nombreMal").innerHTML = "Error. No se permiten numeros.";
    
    } else if (!patronSoloLetras.test(String(nombre))) {
        
        document.getElementById("nombreMal").innerHTML = "Error. Solo se permiten letras, espacios y apostrofes.";

    } else if (!patron.test(String(nombre)) ) {
                
        document.getElementById("nombreMal").innerHTML = "Error. Introduce al menos 1 apellido, separado por un espacio.";
     
    } else {
          document.getElementById("nombreMal").innerHTML = "";
          enviar = true;
    }
    return enviar;
}

function calcularEdad(fecha_nac) {     //deberia recibir una string en formato aaaa-mm-dd
    //metodo que divide un string en arrays si le indicamos el caracter separador
    let lista = fecha_nac.split("-");

    let dia = lista[2];
    let mes = lista[1];
    let anho = lista[0];
    
    let fechaActual = new Date();
    //esto se hace porque el metodo getYear cuenta desde el año 1900
    let anhoActual = fechaActual.getYear() + 1900;
    let mesActual = fechaActual.getMonth();
    let diaActual = fechaActual.getDate();
    
    let edad = anhoActual - anho;
    //condicion para tener en cuenta dia y mes
    if ((mesActual - (mes-1)) < 0 || ((mesActual - (mes-1)) == 0 && (diaActual - dia) < 0)) {
        edad--;
    }

    return edad;
}

function validaFecha() {
    let fecha_nac = document.forms["registro"]["fecha_nac"].value;
    let enviar = false;

    let edad = calcularEdad(fecha_nac);

    if (fecha_nac == "") {
        document.getElementById("fechaMal").innerHTML = "La fecha es obligatoria";
    
    } else if (edad < 16) {
        document.getElementById("fechaMal").innerHTML = "Para inscribirte en el gym debes tener al menos 16 años. Podría afectar a tu crecimiento :v";
    
    } else if (edad > 125) {
        document.getElementById("fechaMal").innerHTML = "¿Seguro que has escrito bien el año?";

    } else {
        document.getElementById("fechaMal").innerHTML = "";
        enviar = true;
    }

    return enviar;
}

function validaTelefono() {

    let telefono = document.forms["registro"]["telefono"].value;
    let elTele = "El teléfono ";
    let enviar = false;

    if (telefono == "") {
        document.getElementById("telefonoMal").innerHTML = elTele+"es obligatorio";
        
    } else if (telefono.length != 9) {
        document.getElementById("telefonoMal").innerHTML = elTele+"debe ser de 9 dígitos";
        
    } else {
        document.getElementById("telefonoMal").innerHTML ="";
        enviar = true;
    }
    return enviar;
}

function validaEmail() {
    let email = document.forms["registro"]["email"].value;
    const patron = /^([a-zA-Z0-9\-_][a-zA-Z0-9\-_\.]{0,252}[a-zA-Z0-9\-_]@[a-zA-Z0-9][a-zA-Z0-9\-]{0,61}[a-zA-Z0-9]\.[a-zA-Z]{2,}(\.[a-zA-Z]{2,})?)$/gm;
                                    //^ para dominios de 2º nivel
    const caracPermitidos = /^([a-zA-Z0-9\-_\.@]+)$/gm;
    let enviar = false;

    if (email == "") {
        document.getElementById("emailMal").innerHTML = "El email es obligatorio";
    
    } else if (!caracPermitidos.test(String(email))){
        document.getElementById("emailMal").innerHTML = "Error. Solo se permiten letras, numeros, -, _, y puntos";
    
    } else if (!patron.test(String(email))){
        document.getElementById("emailMal").innerHTML = "Error. El correo no tiene el formato permitido.";
        
    } else {
        document.getElementById("emailMal").innerHTML = "";
        enviar = true;
    }
    return enviar;
}

function validaPassword() {
    let password = document.forms["registro"]["password"].value;
    let enviar = false;

    if (password == "") {
        document.getElementById("contraseñaMal").innerHTML = "La contraseña es obligatoria";
        
    } else if (password.length > 16 || password.length < 8) {
        document.getElementById("contraseñaMal").innerHTML = "La contraseña debe ser de entre 8 y 16 caracteres";
        
    } else {
        document.getElementById("contraseñaMal").innerHTML = "";
        enviar = true;
    }
    return enviar;
}

function validaPassword2() {
    let password = document.forms["registro"]["password"].value;
    let password2 = document.forms["registro"]["password2"].value;
    let enviar = false;

    if (password2 == "") {
        document.getElementById("contraseña2Mal").innerHTML = "Escriba de nuevo la contraseña";
        
    
    } else if (!(password.valueOf() === password2.valueOf())) {
        document.getElementById("contraseñaMal").innerHTML = "";
        document.getElementById("contraseña2Mal").innerHTML = "Las contraseñas no coinciden";
        
 
    } else {
        document.getElementById("contraseñaMal").innerHTML = "";
        document.getElementById("contraseña2Mal").innerHTML = "";
        enviar = true;
    }

    return enviar;
}

//si esta funcion devuelve false, la informacion no será enviada al pulsar el boton enviar
function validarTodo() {
    let enviar=false;

    if (validaNombre() && validaFecha() && validaTelefono() && validaEmail() && validaPassword() && validaPassword2()) {
        enviar = true;
    }
    return enviar;
}

function validar() {

    if (validarTodo()) {
       /*  document.body.style.fontSize="24px";
        document.getElementById("formulario").style.property="color: red;"
         */
    }

    if (!validaNombre()) {
        document.getElementById('nombre').style.border='2px dotted red';
    } else {
        document.getElementById('nombre').style.border='1px solid black';
    }

    if (validaFecha()) {

    }

    if (validaTelefono()) {

    }

    if (validaEmail()) {

    }

    if (validaPassword()) {

    }

    if (validaPassword2()) {

    }

}