<?php 
    //Need php 5.5 or more
    require_once $_SERVER['DOCUMENT_ROOT'] . '/PHPMail/PHPMailer.php';
    require_once $_SERVER['DOCUMENT_ROOT'] . '/PHPMail/SMTP.php';

    use PHPMailer\PHPMailer\PHPMailer;
    use PHPMailer\PHPMailer\SMTP;
    use PHPMailer\PHPMailer\Exception;

    $id = $_POST['id'];
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
    
    $con = mysqli_connect('', '', '', '');
    $mail = new PHPMailer(true);
    try {
        $host = 'smtp.gmail.com';
        $username = 'cabanasdelgolf@gmail.com';
        $password = 'Chiroloto222';

        //Server settings
        $mail->SMTPDebug = SMTP::DEBUG_SERVER;
        $mail->isSMTP();
        $mail->Host       = $host;
        $mail->SMTPAuth   = true;
        $mail->Username   = $username;
        $mail->Password   = $password;
        $mail->Port       = 587;
        
        //Recipients
        $mail->setFrom($email, $name);
        $mail->addAddress('cabanasdelgolf@gmail.com', 'Web');     // Add a recipient
        $mail->AddReplyTo($email, $name);
        
        // Content
        $subject = 'Reserva a nombre de ' . $name . ' ('. $date_start .' - '. $date_end .')';
        $body = "Solicitud de reserva por ". $name .".\nTeléfono: " . $phone . ".\nCiudad: " . $city .".\n\nFecha estimada de reservación\n- Desde: ". $date_start ."\n- Hasta: ". $date_end ."\n\nMensaje del cliente:\n". $message_user ."";
        //$mail->isHTML(true);
        $mail->Subject = $subject;
        $mail->Body    = $body;

        if($mail->Send()){
            $sql_update_email = "UPDATE message SET send_email = 'YES' WHERE id = '$id'";
            $result = mysqli_query($con, $sql_update_email);
            if ($result) {
                echo true;
            } else {
                echo false;
            }
        }
    } catch (phpmailerException $e) {
        echo $e->errorMessage(); //Pretty error messages from PHPMailer
    } catch (Exception $e) {
        echo $e->getMessage(); //Boring error messages from anything else!
    }
