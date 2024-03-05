<?php

    //Studi Kasus 1
    $baju = false;

    if($baju){
        echo "Variable baju bernilai true";
    }

    //Output: tidak akan muncul apa apa, karena variabel $baju bernilai FALSE

    //Studi Kasus 2
    $nilai = 85;

    if($nilai >= 90 && $nilai <= 100){
        echo "A";
    } else if($nilai >= 80 && $nilai <= 90){
        echo "B";
    } else if($nilai >= 70 && $nilai <= 80){
        echo "C";
    } else if($nilai < 70){
        echo "D";
    } else{
        echo "Nilai Tidak Valid";
    };

    //Output: B
?>