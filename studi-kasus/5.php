<?php
//================= D A T A ====================//

    $nilai_saya = [80, 78, 72, 84, 92, 88];

//=============================================//

//output nilai saya :
    echo "Nilai saya : ";
    foreach($nilai_saya as $nilai){
        echo "<b>$nilai</b>" . ", ";
    }

        echo "<br>";


//mencari nilai tertinggi
    $terbesar = max($nilai_saya);

    echo "Dari keseluruhan nilai yang paling tinggi ialah : " . "<b>$terbesar</b>";

        echo "<br>";


//mencari nilai terendah
    $terkecil = min($nilai_saya);

    echo "Sedangkan nilai yang paling kecil : " . "<b>$terkecil</b>";

        echo "<br>";


//urutan dari yang terkecil menjadi yang terbesar
    echo "Apabila diurutkan dari yang terkecil menjadi : ";

    asort($nilai_saya);

    foreach ($nilai_saya as $urutan1){
        echo "<b>$urutan1</b>, ";
    }

        echo "<br>";


//urutan dari yang terbesar menjadi yang terkecil
    echo "Apabila diurutkan dari yang terbesar menjadi : ";

    arsort($nilai_saya);

    foreach ($nilai_saya as $urutan2){
        echo "<b>$urutan2</b>, ";
    }

        echo "<br>";


//mencari rata - rata dari array    
    $rata_rata = round(array_sum($nilai_saya) / count($nilai_saya));

    echo "Apabila di bulatkan, rata-rata nya adalah : <b>$rata_rata</b>";

        echo "<br>";


//nilai perbaikan (replace data di array) dan di urutkan dari yang terbesar
    ksort($nilai_saya);  //RESET urutan data dari array yg sudah di sortir
    $indexTerkecil = array_search($terkecil, array_values($nilai_saya));

    $nilai_perbaikan = 75;
    $nilai_saya[$indexTerkecil] = $nilai_perbaikan;    


    echo "Setelah melakukan perbaikan untuk nilai <b>$terkecil</b>, saya mendapat nilai <b>$nilai_perbaikan</b>. Jadi nilai saya sekarang : ";

    foreach ($nilai_saya as $newNilai){
        echo "<b>$newNilai</b>, ";
    }

        echo "<br>";

    arsort($nilai_saya);

    echo "Jadi nilai saya jika di urutkan dari yang terbesar : ";

    foreach ($nilai_saya as $newUrutan){
        echo "<b>$newUrutan</b>, ";
    }
