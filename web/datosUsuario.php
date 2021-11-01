<?php
$conexion = new mysqli('localhost', 'root', '','gym');

if ($conexion -> connect_errno){
    # Cambiar a login cuando gonzalo lo termine
   header('Location: https://192.168.64.2/Fitness-Hub/web/');

   echo "Hola1";
}else {
    
    session_start();
    $usuario =  $_SESSION['usuario'];
   
    if (empty($usuario)){
        header('Location: https://192.168.64.2/Fitness-Hub/web/');

        echo "Hola2";
    }else {
            try {
                $stmt = $conexion->prepare("SELECT * FROM persons WHERE email = ?");
                $stmt->bind_param('s',$usuario);
                $stmt->execute();
                $result = $stmt->get_result();
                $user = $result->fetch_assoc();

                echo "<pre>";
                    echo print_r($user);
                echo "</pre>";

            }catch (PDOException $e){
            echo "Error: ".$e->getMessage();
        }
    }
}