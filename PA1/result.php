<?php
$name = $_POST["name"];



// Connects to your Database
mysql_connect("info344.cf9rvll9cbvo.us-west-2.rds.amazonaws.com:3306", "info344user", "Godspeed23") or die(mysql_error());
mysql_select_db("innodb") or die(mysql_error());



$results = mysql_query("SELECT * FROM PlayerStats WHERE PlayerName like '%$name%'");

while ($row = mysql_fetch_assoc($results)) {
    echo $row["PlayerName"] . " ";
    echo $row["GP"] . " ";
    echo $row["FGP"] . " ";
    echo $row["TPP"] . " ";
    echo $row["FTP"] . " ";
    echo $row["PPG"] . "<br>";
    
}


?>