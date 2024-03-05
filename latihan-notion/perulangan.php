<?php
    //STUDI KASUS 1

    //Hitung Maju
    for ($i = 1; $i <= 10; $i++){
        echo "{$i} <br>";
    };

    //Hitung Mundur
    for ($x = 10; $x > 0; $x--){
        echo "{$x} <br>";
    };
        /* Perbedaannya, looping yang pertama angkanya bertambah, tetapi di looping kedua angkanya berhitung mundur */

        echo "<br><br>"; //space

    //STUDI KASUS 2

    $list = ['RPL', 'Wajib', 'Ngulik'];

    for ($z = 0; $z < count($list); $z++){
        echo "{$list[$z]}";
    };

        echo "<br><br>"; //space

    //STUDI KASUS 3
    for ($b = 1; $b <= 50; $b++) {
        if ($b % 10 === 0) {
        continue;
        }
        
        echo "Perulangan ke-{$b} <br>";

        if ($b > 40) {
        break;
        }
    }

    /* Jika BREAK dan CONTINUE di hapus, kode akan terus jalan, dan semua kelipatan 10 akan di cetak */
    echo "<br><br>"; //space

    //STUDI KASUS 4
    $list_2 = ['Banyu', 'Julian', 'Haikal'];

    foreach ($list_2 as $l) {
        echo "Nama : {$l} <br>";
    };

    $list_3 = ['RPL', 'Wajib', 'Ngulik'];

    foreach ($list_3 as $kunci => $lis) {
    echo "[{$kunci}] Nama : {$lis} <br>";
    };

    //Jika variable $key diganti menjadi $kunci, akan tetap berjalan dengan lancar

?>