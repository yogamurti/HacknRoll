<?php
  session_start();
  include_once("db.php");

  $input = $_POST["data"];
  $output = "";

  $sql_modCode = "SELECT * FROM test WHERE (list_ModuleCode = $input)";
  $res = mysqli_query($db, $sql_modCode) or die(mysql_error());

  if(mysqli_num_rows($res) > 0) {
    while ($row = mysqli_fetch_assoc($res)) {
      $acadYear = $row['list_CorsBiddingStats_AcadYear'];
      $semester = $row['list_CorsBiddingStats_Semester'];
      $bidRnd = $row['list_CorsBiddingStats_Round'];
      $group = $row['list_CorsBiddingStats_Group'];
      $successBid = $row['list_CorsBiddingStats_LowestSuccessfulBid'];
      $faculty = $row['list_CorsBiddingStats_Faculty'];
      $SAT = $row['list_CorsBiddingStats_StudentAcctType'];

      $output .= "$acadYear $semester $successBid $group";
    }
  }

  echo $input;
?>
