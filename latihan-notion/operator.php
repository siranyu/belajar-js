<?php
    $sisi_persegi = 5;
    $jari_jari = 8;
    $phi = 22/7;
    
    //PERSEGI
    $luas_persegi = $sisi_persegi ** 2;
    echo "Luas persegi adalah ".$luas_persegi;
    echo "<br><br>";

    //LINGKARAN
    $luas_lingkaran = $phi * $jari_jari * $jari_jari; 
    echo "Luas lingkaran adalah ".$luas_lingkaran;
    echo "<br><br>";

    //PERBANDINGAN
    $bilangan = 19;
    $hasil = $bilangan < 20 ? "Iya": "Tidak";

    echo $hasil;
    ?>