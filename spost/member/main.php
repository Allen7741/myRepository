<?php
    include("sql.php");
    spl_autoload_register(function($className){
        require_once $className . '.php';
    });
    session_start();

    if (!$_SESSION['membertest']) header("Location: login.php");

    $member = $_SESSION['membertest'];

    $icon = base64_encode($member->icon) ;

?>
Welcom, <?php echo $member->id; ?><br />
<img src="data:<?php echo $member->id; ?>;base64, <?php echo $icon; ?>"/>