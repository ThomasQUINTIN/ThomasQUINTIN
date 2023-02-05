<?php
  $currentPage = basename($_SERVER['PHP_SELF'], '.php');
  if ($currentPage != 'index') {
    header("Location: ./index.php");
    exit();
  }
?>
