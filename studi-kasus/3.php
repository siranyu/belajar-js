<?php

//================ D A T A ================//
$data = [
    [
        'nama' => 'Andi',
        'tahun' => 2008,
    ],
    [
        'nama' => 'Beni',
        'tahun' => 2001,
    ],
    [
        'nama' => 'Dani',
        'tahun' => 2004,
    ],
    [
        'nama' => 'Eko',
        'tahun' => 2006,
    ]
];
//===========================================//


//Cara 1 (di Cek Langsung Kabisatnya)

foreach ($data as $list){
    if ($list["tahun"] % 4 == 0){
        echo $list['nama'] . " : Lahir Pada Tahun Kabisat ({$list['tahun']})" . "<br>";  
    } else{
        echo $list['nama'] . " : BUKAN Lahir Pada Tahun Kabisat ({$list['tahun']})" . "<br>";  
    }
}



//=================================================================================================//
echo "<br><br><br><br>";    
//=================================================================================================//




//Cara 2 (memakai Function)

function isKabisat($tahun)
{
    if ($tahun % 4 == 0) {
        return "Lahir Pada Tahun Kabisat";
    } else {
        return "BUKAN Lahir Pada Tahun Kabisat";
    }
}

foreach ($data as $list2){
    echo $list2['nama'] . " : " . isKabisat($list2['tahun']) . " ({$list2['tahun']})" . "<br>"; 
}
