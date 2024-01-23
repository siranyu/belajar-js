let totDetik = 5440; //input
let detik;
let menit;
let jam;
let sisa;

jam = Math.floor(totDetik/3600);
sisa = totDetik % 3600;
menit = Math.floor(sisa/60);
detik = sisa % 60;

console.log(`jam : ${jam}`);
console.log(`menit : ${menit}`);
console.log(`detik : ${detik}`);