<?php //bd56.php
    $mysqli = new mysqli('localhost', 'root', '', 'spost', 3306);
    $mysqli->set_charset('utf8');

    $json = file_get_contents("member.json");
    echo $json;
    // $data = json_decode($json, false);

    // $sql = "INSERT INTO register(realname, nickname, account, password, email, phone, gender)" . 
    // "VALUES (?,?,?,?,?,?,?)";
    // $stmt = $mysqli->prepare($sql);

    // foreach($data as $row){
    //     $stmt->bind_param('sssssss', $row->Realname, $row->Nickname, $row->Account, $row->Password, $row->Email, $row->Phone, $row->Gender);
    //     $stmt->execute();
    // }
// ?>