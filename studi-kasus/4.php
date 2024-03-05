<?php

$harga = 0;

//=============================== D A T A =================================//
$barang = [
    [
        'nama_barang' => 'Pasta Gigi',
        'harga_barang' => 18000,
        'jumlah_beli' => 1
    ],
    [
        'nama_barang' => 'Sabun Mandi',
        'harga_barang' => 5000,
        'jumlah_beli' => 3
    ],
    [
        'nama_barang' => 'Aloe Vera Sheet Mask',
        'harga_barang' => 15000,
        'jumlah_beli' => 4
    ]
];
//==========================================================================//


foreach($barang as $item){
    $harga += ($item['harga_barang'] * $item['jumlah_beli']);
}

echo "Total harga yang harus dibayar adalah " . "<b>$harga</b>";