<?php
$nombre;
$fechaNacimiento;
$telefono;
$email;
$contraseña; 
$sexo;
$actividades; 
$horario;

echo print_r($_POST);

if (!$_POST){
    header('Location: index.html');
} else {
    $nombre = $_POST['nombre'];
    $fechaNacimiento = $_POST['fecha_nac'];
    $telefono = $_POST['telefono'];
    $email = $_POST['email'];

  

    $contraseña = $_POST['pass'];

    $sexo = $_POST['genero'];
    $actividades = $_POST['actividades'];
    $horario = $_POST['horario'];
}

echo 'Nombre '.$nombre.'<br>';
echo 'FechaNacimiento '.$fechaNacimiento.'<br>';
echo 'Telefono '.$telefono.'<br>';
echo 'Email '.$email.'<br>';
echo 'Pass '.$password.'<br>';
echo 'Sexo '.$sexo.'<br>';
echo 'Actividad '.$actividades.'<br>';
echo 'Horario '.$horario.'<br>';
?>