<?php
include 'keys.php';
class Crypto {

    function sign($data) {
        $pkey=openssl_get_privatekey( $privateKey );

        $result = openssl_sign($data, $signature, $pkey);
        return $signature;
    }
}