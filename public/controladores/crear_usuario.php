<!DOCTYPE html>
<html lang="es">

<head>
    <meta charset="utf-8" />
    <title>Insertar</title>
    <style type="text/css" rel="stylesheet">
        .error {
            color: red;
        }
    </style>
     <?php
    session_start();
    if (!isset($_SESSION['isLogged']) || $_SESSION['isLogged'] === FALSE) {
        header("Location: /SistemaDeGestion/public/vista/login.html");
    }
    ?>
</head>

<body>
    <?php
    include '../../config/conexionBD.php';
    $cedula = isset($_POST["cedula"]) ? trim($_POST["cedula"]) : null;
    $nombres = isset($_POST["nombres"]) ? mb_strtoupper(trim($_POST["nombres"]), 'UTF-8') : null;
    $apellidos = isset($_POST["apellidos"]) ? mb_strtoupper(trim($_POST["apellidos"]), 'UTF-8') : null;
    $direccion = isset($_POST["direccion"]) ? mb_strtoupper(trim($_POST["direccion"]), 'UTF-8') : null;
    $telefono = isset($_POST["telefono"]) ? trim($_POST["telefono"]) : null;
    $correo = isset($_POST["correo"]) ? trim($_POST["correo"]) : null;
    $fecha_nac = isset($_POST["fechaNacimiento"]) ? trim($_POST["fechaNacimiento"]) : null;
    $contrasena = isset($_POST["contrasenia"]) ? trim($_POST["contrasenia"]) : null;

    $sql = " INSERT INTO usuario VALUES(0,'$cedula','$nombres','$apellidos','$direccion','$telefono',
    '$correo',MD5('$contrasena'),'$fecha_nac','N',null,null)";

if ($conn->query($sql) === TRUE) {
    echo "<p>Se ha creado los datos personales correctamemte!!!</p>";
    } else {
    if($conn->errno == 1062){
    echo "<p class='error'>La persona con la cedula $cedula ya esta registrada en el sistema </p>";
    }else{
    echo "<p class='error'>Error: " . mysqli_error($conn) . "</p>";
    }
    }
   
    //cerrar la base de datos
    $conn->close();
    echo "<a href='../vista/crear_usuario.html'>Regresar</a>";
   
    ?>
   </body>
   </html>