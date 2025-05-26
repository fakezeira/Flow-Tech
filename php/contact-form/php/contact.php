<?php
    //Script PHP que se ejecuta en el server y envia el Mail
    // $frm = $_POST['frm'];

    // if (isset($frm) && $frm !== '') {
        // if ($frm == 'contact') {
            $Nombre = $_POST['username'];
            $Email = $_POST['useremail'];
            $Mensaje = $_POST['usermessage'];

            // Alterado o e-mail de destino
            $Destino = 'theflowvr@gmail.com';

            $header1 = "From: $Email";
            $header1 .= 'Content-type: text; charset=UTF-8' . "\r\n";

            // $mensaje = $Mensaje;
            $Mensaje.= "\n\n------------------------";
            $Mensaje.= "\nEnviado por: ". $Nombre;
            $Mensaje.= "\nCorreo: " . $Email;

            //Ingresamos nuestra casilla de correo
            $Asunto = $_POST['usersubject'];

            if(mail($Destino, $Asunto, $Mensaje, $header1)){
                $respuesta = 'success';

                //enviar confirmación al usuario
                $header = "From: info@oglit.com";
                $header .= 'Content-type: text; charset=UTF-8' . "\r\n";

                $Asunto1 = "Oglit.com - Mensaje enviado";
                $mensajeUser = "Su mensaje fue enviado con éxito.\nPronto nos pondremos en contacto con usted\n\n\nCordialmente,\nhttp://oglit.com";
                mail($Email, $Asunto1, $mensajeUser, $header);
            }else{
                $respuesta = false;
            }

        // }else{
        //  $respuesta = false;
        // }
        // header('Content-type: application/json; charset=utf-8');
        // echo json_encode($respuesta, JSON_FORCE_OBJECT);
        echo $respuesta;
    // }
?>