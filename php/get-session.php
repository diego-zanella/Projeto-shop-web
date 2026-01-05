<?php
// if(!isset($_SESSION))
// {
//     session_start();
// }
$name = $_SESSION['name']; 

echo "<script>alert($name)</script>"
?>