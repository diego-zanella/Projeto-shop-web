<?php
    include "conexao.php";

    $res = mysqli_query($conn, "SELECT * FROM db_clothes.Products");

    $i = 0;

    while($registro = mysqli_fetch_assoc($res)) {
        $dados[$i]["Id"] = $registro["Id"];
        $dados[$i]["Name"] = $registro["Name"];
        $dados[$i]["Quantity"] = $registro["Quantity"];
        $dados[$i]["ImagePath"] = $registro["ImagePath"];
        $dados[$i]["Price"] = $registro["Price"];
        $dados[$i]["Category"] = $registro["Category"];
        $i++;
    }

    $objetoJSON = json_encode($dados);
    echo $objetoJSON;
?>