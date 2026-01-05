<?php
    include "conexao.php";

    //índice do produto no array dados[]
    $tipoPagamento = "PIX";
    $user = "user";
    $valorTotal = $_POST["valorTotalInput"];
    $date = date("Y/m/d");

    mysqli_query($conn, "INSERT INTO db_clothes.Compra (TipoPagamento,Usuario, ValorTotal, dataCompra) VALUE ('$tipoPagamento','$user','$valorTotal','$date')");
    
?>