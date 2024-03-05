<?php
    //tipe data string menggunakan metode single quoted
    $string1 = 'Ini adalah contoh string sederhana';
    $string2 = 'Variabel juga tidak otomatis ditampilkan : $string1';

    echo $string1;
    echo "<br>";
    echo $string2;

    echo "<br><br><br>"; //space

    //tipe data string menggunakan metode double quoted
    $stringA = "Ini adalah contoh string sederhana 2";
    $stringB = "Variabel akan otomatis di tampilkan : $stringA";

    echo $stringA;
    echo "<br>";
    echo $stringB;

    echo "<br><br><br>"; //space

    $a = "1"; // $a adalah string 
    $a++; // integer (2)
    $a .= "3"; // string ("23")
    $a *= 0.5; // float (11.5)

    $b = "10" . "20.25"; // string (1020.25) 
    $c = "10" + "20.25"; // float (30.25)
    $d = 10 + "20.5"; // float (30.5)

    echo "a = $a";
    echo "<br>";
    echo "b = $b";
    echo "<br>";
    echo "c = $c";
    echo "<br>";
    echo "d = $d";
    echo "<br>";

    echo "<br><br><br>"; //space

    $e = "10 rumah";
    $e = (int) $e;
    $e = (bool) $e;

    $f = 100;
    $f = (string) $f;

    echo $e;
    echo "<br>";
    echo $f;

    /* Kesimpulan: double quoted bisa untuk menuliskan variabel di dalam sebuah string, single quoted bisa menjadi pengganti double quoted jika ingin menuliskan string di dalam sebuah string(double quoted) tetapi tidak bisa di isi dengan variabel */
?>