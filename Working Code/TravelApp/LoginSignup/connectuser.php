<?php
    $inputgroupemail=$_POST['inputgroupemail'];
    $inputgroupPassword=$_POST['inputgroupPassword'];


    //Database Connection Here
    $conn = new mysqli('localhost','root','','travelapp_users');
    if($conn->connect_error){
        die('Connection Failed : '.$conn->connect_error);
    }else{
        $stmt= $conn->prepare("insert into users(inputgroupemail,inputgroupPassword)values(?,?)");
        $stmt->bind_param("ss",$inputgroupemail, $inputgroupPassword);
        $stmt->execute();
        echo "Registered Successfully....";
        $stmt->close();
        $conn->close();
    }
?>