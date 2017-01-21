<?php
	session_start();
	include_once("db.php");
?>

<html>
<head>
  <title>CORS Bidding History</title>
  <meta name="viewport" content="width=device-width">
  <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/css/bootstrap.min.css">
  <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/css/bootstrap-theme.min.css">
  <link rel="stylesheet" href="stylesheet.css">
  <nav class='navbar navbar-inverse navbar-fixed-top'>
    <div class='container'>
      <div class='navbar-header'>
        <button type='button' class='navbar-toggle collapsed' data-toggle='collapse' data-target='#navbar' aria-expanded='false' aria-controls='navbar'>
          <span class='sr-only'>Toggle navigation</span>
          <span class='icon-bar'></span>
          <span class='icon-bar'></span>
          <span class='icon-bar'></span>
        </button>
      </div>
      <div id='navbar' class='collapse navbar-collapse'>
        <ul class='nav navbar-nav'></ul>
        <?php
          echo "<form class='navbar-form' method='post'>;
          <div class='form-group'>
            <div id='MC' style='float:left'><input placeholder='Module Code' class='form-control' name='ModuleCode' type='text'></div>
            <div id='FAC' style='float:left'><input placeholder='Faculty' class='form-control' name='Faculty' type='text'></div>
            <div id='BR' style='float:left'><input placeholder='Bid Round' class='form-control' name='BiddingRound' type='text'></div>
            <div id='SAT' style='float:left'><input placeholder='Student & Account Type' class='form-control' name='StudentAccountType' type='text'></div>
          </div>
          <button onclick='go()' class='btn btn-default'>Go!</button>
        </form>";
        ?>
      </div>
    </div>
  </nav>
</head>
<body>
  <div class="mainHeading">CORS Bidding History</div>
    <br/>
  <div class="shows">
    <button onclick='info()' class='optionButton'>ACC1002X</button>
  </div>
    <br/>
  <div id="graph"></div>
  <script src="javaScript.js"></script>
  <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.12.4/jquery.min.js"></script>
  <script src="https://code.highcharts.com/highcharts.js"></script>
  <script src="https://code.highcharts.com/modules/exporting.js"></script>
  <script src="js/bootstrap.min.js"></script>
</body>
</html>
