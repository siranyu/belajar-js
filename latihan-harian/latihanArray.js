const angka = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

//menggunakan method reduce
let rataRata = angka.reduce((jumlahTotal, angka) => jumlahTotal += angka) / angka.length;
console.log(rataRata)

//menggunakan looping
let jumlah = 0;

for(let i = 0; i < angka.length; i++){
    jumlah += angka[i];
}

let rataRata2 = jumlah / angka.length;
console.log(rataRata2);