function validarCamposObligatorios() {
    var bandera = false;
    for (var i = 0; i < document.forms[0].length; i++) {
        var elemento = document.forms[0].elements[i];
        if (elemento.value.trim() == '') {
            if (elemento.id == 'cedula') {
                elemento.style.border = "1px red solid"
                document.getElementById("mensajeCedula").innerHTML = "El campo es obligatorio"
                document.getElementById("mensajeCedula").style.color = "red"

            }

            if (elemento.id == 'nombres') {
                nombres = elemento.id.value;
                elemento.style.border = "1px red solid"
                document.getElementById("mensajeNombres").innerHTML = "El campo es obligatorio"
                document.getElementById("mensajeNombres").style.color = "red"
            }

            if (elemento.id == 'apellidos') {
                apellidos = elemento.id.value;
                elemento.style.border = "1px red solid"
                document.getElementById("mensajeApellidos").innerHTML = "El campo es obligatorio"
                document.getElementById("mensajeApellidos").style.color = "red"
            }
            if (elemento.id == 'direccion') {
                elemento.style.border = "1px red solid"
                document.getElementById("mensajeDireccion").innerHTML = "El campo es obligatorio"
                document.getElementById("mensajeDireccion").style.color = "red"
            }
            if (elemento.id == 'telefono') {
                elemento.style.border = "1px red solid"
                document.getElementById("mensajeTelefono").innerHTML = "El campo es obligatorio"
                document.getElementById("mensajeTelefono").style.color = "red"
            }
            if (elemento.id == 'fechaNacimiento') {
                elemento.style.border = "1px red solid"
                document.getElementById("mensajeFecha").innerHTML = "El campo es obligatorio"
                document.getElementById("mensajeFecha").style.color = "red"
            }
            if (elemento.id == 'correo') {
                elemento.style.border = "1px red solid"
                document.getElementById("mensajeCorreo").innerHTML = "El campo es obligatorio"
                document.getElementById("mensajeCorreo").style.color = "red"
            }
            bandera = true;

        }

    }


    if (bandera) {
        alert(' CAMPOS VACIOS! Rellenar los campos')
        return false;
    } else {
        return true;
    }
}
/*Empieza los metodo para validar nombre*/
function ValidarNombres(event, label, elemento) {
    let span = document.getElementById(label);
    let letra = event.which || event.keyCode;

    if (letra >= 65 && letra <= 90 || letra >= 97 && letra <= 122 || letra == 32) {
        span.style.display = "none";
    } else {
        span.innerHTML = "Ingrese letras"
        span.style.display = "block"
        span.style.color = "red"
        let frase = elemento.value;
        frase = frase.substring(0, frase.length - 3)
        elemento.value = frase
    }

    let wordCount = elemento.value.trim().replace(/\s+/gi, ' ').split(' ').length;

    if (wordCount > 2) {
        span.innerHTML = "Ingrese solo dos Nombres"
        span.style.display = "block"
        span.style.color = "red"
        let frase = elemento.value;
        frase = frase.substring(0, frase.length - 3)
        elemento.value = frase
    } else if (wordCount > 0) {
        span.innerHTML = "Ingrese  los dos Nombres"
        span.style.display = "block"
        span.style.color = "blue"
        let frase = elemento.value;
        elemento.value = frase

    }
}

/*Empieza los metodo para validar nombre*/
function ValidarApellido(event, label, elemento) {
    let span = document.getElementById(label);
    let letra = event.which || event.keyCode;

    if (letra >= 65 && letra <= 90 || letra >= 97 && letra <= 122 || letra == 32 || letra == 8 || letra == 16) {
        span.style.display = "none";
    } else {
        span.innerHTML = "Ingrese letras"
        span.style.display = "block"
        span.style.color = "red"
        let frase = elemento.value;
        frase = frase.substring(0, frase.length - 3)
        elemento.value = frase
    }

    let wordCount = elemento.value.trim().replace(/\s+/gi, ' ').split(' ').length;

    if (wordCount > 2) {
        span.innerHTML = "Ingrese solo dos Apellidos"
        span.style.display = "block"
        span.style.color = "red"
        let frase = elemento.value;
        frase = frase.substring(0, frase.length - 3)
        elemento.value = frase
    } else if (wordCount > 0) {
        span.innerHTML = "Ingrese  los dos Apellidos"
        span.style.display = "block"
        span.style.color = "blue"
        let frase = elemento.value;
        elemento.value = frase

    }

}
/*Empieza los metodo para validar que sean solo numeros*/
function ValidarNumeros(event, label, elemento) {
    let span = document.getElementById(label);
    let numero = event.which || event.keyCode;

    if (numero >= 48 && numero <= 57) {
        span.style.display = "none";
    } else {
        span.innerHTML = "Ingrese caracteres numericos"
        span.style.color = "red"
        span.style.display = "block"
        let cantidad = elemento.value;
        cantidad = cantidad.substring(0, cantidad.length - 2)
        elemento.value = cantidad
    }

    if (elemento.value.length === 10) {
        validar(label, elemento);
    }
}
/*Empieza los metodo para validar que la cedula sea 10 digitos*/
function validar(label, elemento) {
    cedula = elemento.value;
    let span = document.getElementById(label);
    var cad = cedula.trim();
    var total = 0;
    var longitud = cad.length;
    var longcheck = longitud - 1;

    if (cad !== "" && longitud === 10) {
        for (i = 0; i < longcheck; i++) {
            if (i % 2 === 0) {
                var aux = cad.charAt(i) * 2;
                if (aux > 9) aux -= 9;
                total += aux;
            } else {
                total += parseInt(cad.charAt(i));
            }
        }

        total = total % 10 ? 10 - total % 10 : 0;

        if (cad.charAt(longitud - 1) == total) {
            span.innerHTML = "Cedula Válida";
            span.style.display = "block"
            span.style.color = "green"
        } else {
            span.innerHTML = "Cedula Inválida";
            span.style.display = "block"
            span.style.color = "red"
        }
    }
}
/*Empieza los metodo para validar telefono*/
function ValidarTelefono(event, label, elemento) {
    let span = document.getElementById(label);
    let numero = event.which || event.keyCode;

    if (numero >= 48 && numero <= 57) {
        span.style.display = "none";
    } else {
        span.innerHTML = "Ingrese caracteres numericos"
        span.style.display = "block"
        span.style.color = "red"
        let cantidad = elemento.value;
        cantidad = cantidad.substring(0, cantidad.length - 1)
        elemento.value = cantidad
    }

    if (elemento.value.length >= 10) {
        validar(label, elemento);
        span.innerHTML = "Ingrese numero valido casa o celular"
        span.style.display = "block"
        span.style.color = "red"
        let cantidad = elemento.value;
        cantidad = cantidad.substring(0, cantidad.length - 1)
        elemento.value = cantidad

    }/*let y cons es lo mismo un constante para poder guardar balores dentro del bloque*/
    if (elemento.value.length <= 6) {
        validar(label, elemento);
        span.innerHTML = "Ingrese numero valido casa o celular"
        span.style.display = "block"
        span.style.color = "red"
    }
}
/*Empieza los metodo para validar correo*/
function ValidarCorreo(event, label, elemento) {
    let span = document.getElementById(label);
    let correo = elemento.value;
    let email = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    span.innerHTML = ""
    span.style.display = "block"

    if (!email.test(correo)) {
        span.innerHTML = "Correo Invalido"
        span.style.display = "block"
        span.style.color = "red"

    } else if (!email.test(correo)) {
        span.innerHTML = "Correo Invalido"
        span.style.display = "block"
        span.style.color = "red"

    } else {
        span.innerHTML = "Correo Valido"
        span.style.display = "block"
        span.style.color = "green"

    }


}
/*Empieza los metodo para validar fecha*/
function validarFecha(event, label, element) {
    let span = document.getElementById(label);
    
    let elemento = element.value

    if (validarFormatoFecha(element)) {
        if (fechaExistente(elemento)) {
            span.innerHTML = "Fecha Valida"
            span.style.display = "block"
            span.style.color = "green"
        } else {
            span.innerHTML = "Fecha Invalida"
            span.style.display = "block"
            span.style.color = "red"
        }
    } else {
        span.innerHTML = "Formato Invalido"
        span.style.display = "block"
        span.style.color = "red";
    }

    if (elemento.length >= 10) {
        span.innerHTML = "Fecha fuera de rango"
        span.style.display = "block"
        span.style.color = "red"
        let cantidad = element.value;
        cantidad = cantidad.substring(0, cantidad.length - 1)
        element.value = cantidad
    }

}

function validarFormatoFecha(element) {
    let elemento = element.value
    var formato = /^\d{1,2}\/\d{1,2}\/\d{2,4}$/;
    if ((elemento.match(formato)) && (elemento != '')) {
        return true;
    } else {
        return false;
    }
}

function fechaExistente(fecha) {
    var fechaf = fecha.split("/");
    var day = fechaf[0];
    var month = fechaf[1];
    var year = fechaf[2];
    var date = new Date(year, month, '0');
    if ((day - 0) > (date.getDate() - 0)) {
        return false;
    }
    return true; 3
}

/*Empieza los metodo para validar contrasena*/
function ValidarContra(label, element) {

    let span = document.getElementById(label);
    contrase = element.value;
    console.log(contrase.length);

    if (contrase.length >= 8) {
        span.innerHTML = " "

        var mayuscula = false;
        var minuscula = false;
        var numero = false;
        var caracter_raro = false;

        for (var i = 0; i < contrase.length; i++) {
            if (contrase.charCodeAt(i) >= 65 && contrase.charCodeAt(i) <= 90) {
                mayuscula = true;
            }
            else if (contrase.charCodeAt(i) >= 97 && contrase.charCodeAt(i) <= 122) {
                minuscula = true;
            }
            else if (contrase.charCodeAt(i) >= 48 && contrase.charCodeAt(i) <= 57) {
                numero = true;
            }
            else {
                caracter_raro = true;
            }
        }

        if (mayuscula == true && minuscula == true && caracter_raro == true && numero == true) {
            return true;
        } else {
            span.innerHTML = "Ingrese caracteres especiales (@, _, $) "
            span.style.color = "RED"
            span.style.display = "block"
        }

    } else if (contrase < 8) {

        span.innerHTML = "Ingrese mas de 8 caracteres"
        span.style.color = "RED"
        span.style.display = "block"


    }
    return false;

}
    /*buscar por cedula */
    function buscarPorCedula() {
        var cedula = document.getElementById("cedula").value;
        if (cedula == "") {
        document.getElementById("informacion").innerHTML = "";
        } else {
        if (window.XMLHttpRequest) {
        // code for IE7+, Firefox, Chrome, Opera, Safari
        xmlhttp = new XMLHttpRequest();
        } else {
        // code for IE6, IE5
        xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
        }
        xmlhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
        //alert("llegue");
        document.getElementById("informacion").innerHTML = this.responseText;
        }
        };
        xmlhttp.open("GET","../../config/sentencia.php"+cedula,true);
        xmlhttp.send();
        }
        return false;
}

