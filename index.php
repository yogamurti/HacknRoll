<?php
	session_start();
	include_once("db.php");
?>

<html>
<head>
  <title>Hack n Roll 2017</title>
  <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/css/bootstrap.min.css">
  <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/css/bootstrap-theme.min.css">
  <link rel="stylesheet" href="stylesheet.css">
</head>
<body>
  <br/>
  <div class="mainHeading">CORS Bidding History</div>
    <div class='container'>
      <div class='topbar'>
        <div style = "font-family: Times New Roman; font-size: 20px";>
          <div class='tocenter'>
            <div id='wrap'>
              <center>
              <ul class='menu'>
                <li>
                  <a href="#"><b>Bidding Round ↓</a></b>
                  <ul>
                    <li><a href="#"><b>1A</b></a></li>
                    <li><a href="#"><b>1B</b></a></li>
                    <li><a href="#"><b>2A</b></a></li>
                    <li><a href="#"><b>2B</b></a></li>
                    <li><a href="#"><b>3A</b></a></li>
                    <li><a href="#"><b>3B</b></a></li>
                  </ul>
                </li>
                <li>
                  <a href="#"><b>Module Code ↓</a></b>
                  <ul>
                    <li><a href="#"><b>ACC1002X</b></a></li>
                    <li><a href="#"><b>CS1010S</b></a></li>
                    <li><a href="#"><b>EC1301</b></a></li>
                    <li><a href="#"><b>MKT1003X</b></a></li>
                    <li><a href="#"><b>PL1101E</b></a></li>
                  </ul>
                </li>
                <li>
                  <a href="#"><b>Faculty ↓</a></b>
                  <ul>
                    <li><a href="#"><b>School of Computing</b></a></li>
                    <li><a href="#"><b>School of Science</b></a></li>
                  </ul>
                </li>
                <li>
                  <a href="#"><b>Account Type ↓</a></b>
                  <ul>
                    <li><a href="#"><b>Programme</b></a></li>
                  </ul>
                </li>
              </ul>
              </center>
            </div>
          </div>
        </div>
      </div>
    </div>
      <!--<form method='post'>
        <div id='ModuleCode' style='float:left'><input type="text" placeholder='Module Code' class='form-control'></div>
        <div id='Faculty' style='float:left'><input placeholder='Faculty' class='form-control' type='text'></div>
        <div id='BiddingRound' style='float:left'><input placeholder='Bid Round' class='form-control' type='text'></div>
        <div id='StudentAccountType' style='float:left'><input placeholder='Student & Account Type' class='form-control' type='text'></div>
        <button onclick='go()' class='btn btn-default'>Go</button>-\
      </form>
  <div class="shows">
    <button onclick='info()' class='optionButton'>ACC1002X</button>
  </div>-->
  <br/>
  <div id="graph"></div>
  <script src="javaScript.js"></script>
  <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.12.4/jquery.min.js"></script>
  <script src="https://code.highcharts.com/highcharts.js"></script>
  <script src="https://code.highcharts.com/modules/exporting.js"></script>
</body>
</html>
