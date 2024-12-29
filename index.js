  
function Alertar(){
  alert("Advertencia. Recuerde no compartir este enlace con nadie por seguridad :)"); 
}
window.onload = Alertar();
// Función para capturar y mostrar el nombre del usuario
function mostrarNombre() {
    // Obtener el valor ingresado por el usuario
    
    const nombreUsuario = document.getElementById("nombre").value;
    const nombreUsuario2 = document.getElementById("nombre2").value;
    const correcto = document.getElementById("nombre3").value;

    if (nombreUsuario==0||nombreUsuario2==0){
            const mensaje3 = "Debes escribir un numero";
            document.getElementById("resultado").textContent= mensaje3;
        }else if(correcto==nombreUsuario*nombreUsuario2){
                const mensaje = `¡Excelente!, ¡Sigue así!.`;
                document.getElementById("resultado").textContent = mensaje;
        }else{
            const mensaje2 = "HAZ FALLADO, la respuesta correcta de "+nombreUsuario+"x"+nombreUsuario2 +" es: "+nombreUsuario*nombreUsuario2+" Intentalo nuevamente.";
            document.getElementById("resultado").textContent = mensaje2;
        }

}
