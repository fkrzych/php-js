<?php

    require_once __DIR__ . '/PhoneKeyboardConverter.php';

    $phoneKeyboardConverter = new PhoneKeyboardConverter();

    echo $phoneKeyboardConverter->convertToNumeric('Ela nie ma kota');

    echo '</br>';

    echo $phoneKeyboardConverter->convertToNumeric('jablecznik');

    echo '</br>';

    echo $phoneKeyboardConverter->convertToNumeric('filozofia dla zabieganych');

    echo '</br>';

    echo $phoneKeyboardConverter->convertToString('5,2,22,555,33,222,9999,66,444,55');

    echo '</br>';

    echo $phoneKeyboardConverter->convertToString('33,555,2,0,66,444,33,0,6,2,0,55,666,8,2');

    echo '</br>';

    echo $phoneKeyboardConverter->convertToString('7,444,33,7777,33,55,0,2,3,33,555');

    echo '<script src="welcomeUser.js"></script>';
