<?php

    $con = mysqli_connect('', '', '', '');

    if ($con) {

        $name = $_POST['name'];
        $email = $_POST['email'];
        $phone = $_POST['phone'];
        $city = $_POST['city'];
        $date_start = date('Y-m-d', strtotime(str_replace("/","-",$_POST['date_start'])));
        $date_end = date('Y-m-d', strtotime(str_replace("/","-",$_POST['date_end'])));
        $message_user = $_POST['message_user'];

        if ($name === null || $email === null || $phone === null || $city  === null || $date_start  === null || $date_end  === null ) {
            return false;
        }

        $sql = "INSERT INTO message 
        (name, email, phone, city, date_start, date_end, message_user, send_email)
        VALUES
        ('$name', '$email', '$phone', '$city', '$date_start', '$date_end', '$message_user', 'NO')";
        
        $result = mysqli_query($con, $sql);

        if ($result) {
            echo $con->insert_id;
        } else {
            echo false;
        }

    } else {
        echo false;
    }