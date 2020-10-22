<?php 
    $con = mysqli_connect('localhost', 'root', '', 'cabannas_golf');
    if ($con) {

        $name = $_POST['name'];
        $email = $_POST['email'];
        $phone = $_POST['phone'];
        $city = $_POST['city'];
        $date_start = date('Y-m-d', strtotime(str_replace("/","-",$_POST['date_start'])));
        $date_end = date('Y-m-d', strtotime(str_replace("/","-",$_POST['date_end'])));
        $message_user = $_POST['message_user'];

        //Adding controls in inputs

        $sql = "INSERT INTO message 
        (name, email, phone, city, date_start, date_end, message_user)
        VALUES
        ('$name', '$email', '$phone', '$city', '$date_start', '$date_end', '$message_user')";
        
        $result = mysqli_query($con, $sql);

        if ($result) {
            /*$to = 'cabanasdelgolf@gmail.com';
            $subject = 'Reserva a nombre de Luciano Quiroga (1/10/2020 - 23/10/2020)';
            $txt = 'Solicitud de reserva por Luciano Quiroga. Telefono: 2612160309. Ciudad: Mendoza. Fecha estimada de reservacion - Desde:1/10/2020 - Hasta: 23/10/2020 Mensaje del cliente: Hola queria saber el precio exacto de las cabañas standars';
            $headers = 'From: '.$email;

            mail($to,$subject,$txt,$headers);*/

            echo true;
        } else {
            echo false;
        }

    } else {
        echo false;
    }