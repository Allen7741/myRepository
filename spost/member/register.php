<meta charset="utf-8" />
<?php
include("sql.php");

if (isset($_REQUEST["account"])){
    $account = $_REQUEST['account'];
    $passwd = password_hash($_REQUEST['passwd'], PASSWORD_DEFAULT);

    $icon = null; $icontype = null;
    if ($_FILES['icon']['error'] == 0){
        $icon = addslashes(file_get_contents($_FILES['icon']['tmp_name'])) ;
        $icontype = $_FILES['icon']['type'];
    }

    $sql = "INSERT INTO membertest (account,passwd,icon,icontype) VALUES " .
        "('{$account}','{$passwd}','{$icon}','{$icontype}')";
        if ($mysqli->query($sql)){
            header("Location: login.php");
        }else{
            echo "ERROR: " . $sql;
        }
}

?>

<form method="POST" enctype="multipart/form-data">
    Account: <input type="text" id="account" name="account" onchange="checkNewAccount()"/>
    <span id="mesg"></span>
    <br />
    Password: <input type="password" name="passwd" /><br />
    Icon: <input type="file" name="icon" /><br />
    <input type="submit" value="Register" /><br />
</form>