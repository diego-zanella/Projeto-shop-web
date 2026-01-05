<?php
    include "conexao.php";

    //índice do produto no array dados[]
    $id = $_POST["id-produto"];

    mysqli_query($conn, "DELETE FROM db_clothes.Cart WHERE Id_produto = '$id'");
    
?>