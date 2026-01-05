<?php
    include "conexao.php";

    //índice do produto no array dados[]
    $id = $_POST["id-produto"];

    $query = mysqli_query($conn, "SELECT * FROM db_clothes.Cart WHERE Id_produto = '$id'");
    $carrinho = mysqli_fetch_assoc($query);

    //se o produto já está no carrinho
    if($carrinho){
        mysqli_query($conn, "UPDATE db_clothes.Cart SET Quantity = Quantity + 1 WHERE Id_produto = '$id'");
    }
    //produto não está no carrinho
    else{
        mysqli_query($conn, "INSERT INTO db_clothes.Cart (Id_produto,Id_customer, Quantity) VALUE ('$id',1, 1)");
    }
?>