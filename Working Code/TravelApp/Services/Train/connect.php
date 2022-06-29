<?php
    $UserID=$_POST['UserID'];
    $Source=$_POST['Source'];
    $Destination=$_POST['Destination'];
    $date=$_POST['date'];
    $time=$_POST['time'];
    $class=$_POST['class'];
    $nopassengers=$_POST['nopassengers'];
    $noseats=$_POST['noseats'];
    $Specialservice=$_POST['Specialservice'];
    $foodService=$_POST['foodService'];
    $luggageservice=$_POST['luggageservice'];

    //Database Connection Here
    $conn = new mysqli('localhost','root','','bookingdetails');
    if($conn->connect_error){
        die('Connection Failed : '.$conn->connect_error);
    }else{
        $stmt= $conn->prepare("insert into Booking(UserID,Source,Destination,date,time,class,nopassengers,noseats,Specialservice,foodService,luggageservice)values(?,?,?,?,?,?,?,?,?,?,?)");
        $stmt->bind_param("ssssssiisss",$UserID,$Source,$Destination,$date,$time,$class,$nopassengers,$noseats,$Specialservice,$foodService,$luggageservice);
        $stmt->execute();
        echo "Booking Successfully....";
        $stmt->close();
        $conn->close();
    }
?>