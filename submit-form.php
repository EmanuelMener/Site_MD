<?php

if(isset($_POST['submit'])) {

    $name = $_POST['name'];
    $email = $_POST['email'];
    $message = $_POST['message'];
    $to = "your@email.com";
    $subject = "New Contact Form Submission";
    $headers = "From: " . $email;
    $txt = "You have received a new message from " . $name . ".\n\n" . $message;

    mail($to,$subject,$txt,$headers);
    header("Location: index.html");
}

?>
