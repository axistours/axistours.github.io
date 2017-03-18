<?php
$servername = "localhost";
$username = "careh7ul_admin";
$password = "sunil@311";
$dbname = "careh7ul_careholidays";

// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);
// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
} 

$sql = "SELECT name, email, phone, message, requestdate FROM CH_REQUEST_INFO order by requestdate desc";
$result = $conn->query($sql);

if ($result->num_rows > 0) {
    // output data of each row
    while($row = $result->fetch_assoc()) {
        echo "id: " . $row["id"]. " - Name: " . $row["name"]. " Email-: " . $row["email"]." Phone-: " . $row["phone"]." Message-: " . $row["message"]." Date-: " . $row["requestdate"]."<br>";
    }
} else {
    echo "0 results";
}
$conn->close();
?>
