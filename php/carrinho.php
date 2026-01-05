<?php
    include "conexao.php";

    $query = mysqli_query($conn, "SELECT Products.Id, Products.Name, Products.Price, Products.Category, Products.ImagePath, Cart.Quantity FROM db_clothes.Products JOIN db_clothes.Cart ON Products.Id = Cart.Id_produto");

    for($i = 0; $retorno = mysqli_fetch_assoc($query); $i++){
        $matriz[$i]["Id"] = $retorno["Id"];
        $matriz[$i]["Name"] = $retorno["Name"];
        $matriz[$i]["Price"] = $retorno["Price"];
        $matriz[$i]["Category"] = $retorno["Category"];
        $matriz[$i]["ImagePath"] = $retorno["ImagePath"];
        $matriz[$i]["Quantity"] = $retorno["Quantity"];
    }

    $objetoJSON = json_encode($matriz);
    echo $objetoJSON;
?>