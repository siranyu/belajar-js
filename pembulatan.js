let belanja = [];
let kembalian = [];

for(let i = 1; i <= 5; i++){
    let harga = prompt('masukkan harga belanjaan ke- ' + i);
    let pecahan = prompt('masukkan pecahan uang yang ingin dipakai di belanjaan ke- ' + i);

    let bagi = harga / 100;
    let round = Math.round(bagi);
    let hargaAkhir = round * 100

    let kembali = pecahan - hargaAkhir;

    belanja.push(harga);
    kembalian.push(kembali);

}
console.log(belanja);
console.log(kembalian);