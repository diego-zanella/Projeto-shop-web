<?php
    // session_start();
    $email = $_POST["email"];
    $password = $_POST["senha"];

    include "conexao.php";


    $email = $conn->real_escape_string($email); //prevenir ataque sql injection
    $password = $conn->real_escape_string($password); 

    $sql_code = "SELECT * FROM db_clothes.Customers WHERE Email = '$email' AND Password = '$password'";
    $sql_query = $conn->query($sql_code) or die("Failed on the SQL execution code: " . $conn->error);
    $qtd = $sql_query->num_rows;
    


    if($qtd == 1)
    {
        $user = $sql_query->fetch_assoc();
        $data["fname"] = $user["FirstName"];
        $data["error"] = 0;
        echo json_encode($data);


    }
    else
    {
        $error["error"] = 1;
        echo json_encode($error);
    }    

    

?>