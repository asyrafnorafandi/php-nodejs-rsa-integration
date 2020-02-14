<?php

include 'crypto.php';

$crypto = new Crypto();

$payload = new stdClass();
$payload->test = 'test';

echo $crypto->sign(json_encode($payload));