<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $nombre = $_POST["nombre"];
    $telefono = $_POST["telefono"];
    $correo = $_POST["correo"];
    $tema = $_POST["tema"];
    $mensaje = $_POST["mensaje"];
    $destinatario = "einaromar08@gmail.com";
    $asunto = "Nuevo mensaje de formulario de contacto";

    $contenido = "Nombre: $nombre\nTeléfono: $telefono\nCorreo: $correo\nTema: $tema\nMensaje:\n$mensaje";

    if (mail($destinatario, $asunto, $contenido)) {
        echo "Correo enviado con éxito.";
    } else {
        echo "Error al enviar el correo.";
    }
}
?>
