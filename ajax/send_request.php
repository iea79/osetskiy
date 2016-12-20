<?php
$NAME = $_REQUEST["CNAME"];
$PHONE = $_REQUEST["CPHONE"];
$EMAIL = $_REQUEST["CEMAIL"];
$TEXT = $_REQUEST["CTEXT"];

$result = false;

if($NAME and $PHONE) // здесь все круто
{
    $message = "Имя: {$NAME}\n";
    $message .= "Телефон: {$PHONE}\n";
    $message .= "Мыло: {$EMAIL}\n";
    $message .= "Текст запроса: {$TEXT}\n";

    mail('ossetski@gmail.com', 'Запрос с сайта osetskiy.ru', $message);
    $result = Array("code" => 200, "mesTitle" => "Спасибо!", "mesText" => "Я свяжусь с Вами в ближайшее время");
}
else // Здесь какая-то ошибка произошла с данными, которые пришли из формы
{
    $result = Array("code" => 400, "mesTitle" => "Ошибка!", "mesText" => "Попробуйте еще раз!");
}

echo json_encode($result);

?>