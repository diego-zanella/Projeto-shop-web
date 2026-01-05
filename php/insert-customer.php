<?php
    $fname = $_POST["Login"];
    $bDate = $_POST["dataNasc"];
    $email = $_POST["email"];
    $password = $_POST["Senha"];
    
    echo $fname;

    include "conexao.php";

    mysqli_query($conn, "INSERT INTO db_clothes.Customers (FirstName, BirthDate, Email, Password) VALUES ('$fname','$bDate','$email','$password')")
?>