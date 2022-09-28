<?php //bd56.php
    $mysqli = new mysqli('localhost', 'root', '', 'spost', 3306);
    $mysqli->set_charset('utf8');

    $json = file_get_contents("lessons.json");
    // echo $json;
    // $data = json_decode($json, false);

    // $sql = "INSERT INTO lesson(lid, title, id, addr, info, sun, mon, tue, wed, thu, fri, sat, price, pricepertime, timelength, mode, type)" . 
    // "VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)";
    // $stmt = $mysqli->prepare($sql);

    // foreach($data as $row){
    //     $stmt->bind_param('sssssssssssssssss', $row->Lid, $row->Title, $row->Id, $row->Address, $row->Info, $row->Sun, $row->Mon, $row->Tue, $row->Wed, $row->Thu, $row->Fri, $row->Sat, $row->Price, $row->Pricepertime, $row->TimeLength, $row->Mode, $row->Stype);
    //     $stmt->execute();
    // }

?>