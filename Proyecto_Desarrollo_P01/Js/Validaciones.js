// Aquí van las validaciones de MiFormulario

window.onload = enviar; // no se debe inclur ()

function enviar(){// Asociar la funcion validar al evento click de el boton Enviar
    document.getElementById('enviar').addEventListener('click',validar,false);    
}
// validar el nombre
function validaNombre(){
    var elemento=document.getElementById('nombre')
    if(elemento.value==""){
        alert("El campo NOMBRE está vacío")
        error(elemento);
        return false;
    }
    else if(!isNaN(elemento.value)){
        alert("El campo NOMBRE sólo se permite ingresar letras");
        error(elemento);
        return false;
    }
    return true;
}

//Validar el apellido
function validaApellido(){
    var elemento=document.getElementById('apellido')
    if(elemento.value==""){
        alert("El campo APELLIDO está vacío")
        error(elemento);
        return false;
    }
    else if(!isNaN(elemento.value)){
        alert("El campo APELLIDO sólo se permite ingresar letras");
        error(elemento);
        return false;
    }
    return true;
}

//Validar Correo electronico
function validarcorreo(){
    var elemento= document.getElementById('correo');
    re=/^([\da-z_\.-]+)@(gmail+)\.(com)/

    if(elemento.value==""){
        alert("El campo Correo esta vacio");
        error(elemento);
        return false;
    }  
    else if( /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i.test(elemento)) {
        alert('el correo es invalido')
        error(elemento);
        return false;
    }

    return true;
}

// Validar telefono
function validaTelefono(){
    var elemento = document.getElementById('celular');
    limpiarError(elemento);

    if(isNaN(elemento.value) ){
        alert('El campo Telefono personal debe ser numérico');
        error(elemento);
        return false;
    }
    else if(elemento.value==''){
        alert('El campo Telefono esta vacio');
        error(elemento);
        return false;
    }
    return true;
}

// Validar la ciudad
function validarciudad(){
        elemento = document.getElementById('ciudad');
        limpiarError(elemento);
    
        if( elemento.value==""){
            alert('Debe seleccionar una ciudad')
            error(elemento);
            return false;
        }
        return true;
    }

// revisar el validar ciudad
function validar(e){
    if (validaNombre() && validaApellido() && validarcorreo() && validaTelefono() &&  validarciudad() && confirm('Desea registrar los datos.')){
        return true;
    }else{
        e.preventDefault();
        return false;
    }
}

function error(elemento){
    elemento.className = "error";
    elemento.focus();
}
function limpiarError(elemento){
    elemento.className = "";
}