let nama = "anyu"; //input
let gaji_pokok = 200000; //input
let tunj;
let pjk;
let gaji_bersih;

tunj = 20/100 * gaji_pokok;
pjk = 15/100 * (gaji_pokok + tunj);
gaji_bersih = (gaji_pokok + tunj) - pjk;

console.log(nama);
console.log(`gaji bersih karyawan adalah ${gaji_bersih}`);
console.log(`pajak karyawan adalah ${pjk}`);
console.log(`tunjangan karyawan adalah ${tunj}`);
