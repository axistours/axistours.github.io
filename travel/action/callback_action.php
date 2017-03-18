<?php

$con = mysql_connect("localhost","careh7ul_admin","sunil@311");

if (!$con) {
  die('Could not connect: ' . mysql_error());
}
 
mysql_select_db("careh7ul_careholidays", $con);
 
$sql="INSERT INTO CH_REQUEST_INFO (name, email, phone, message, requestdate)
VALUES
('$_POST[name]','$_POST[email]', '$_POST[mobile]', '$_POST[message]', 'now()')";
 
if (!mysql_query($sql,$con))
  {
  die('Error: ' . mysql_error());
  }
echo "1 record added";
 
mysql_close($con)
?>
