let gram = 100; //input
let diskon;
let harga;
let setDiskon;

harga = gram/100 * 500;
diskon = harga * 5/100;
setDiskon = harga - diskon;

console.log(`Harga sebelum diskon : ${harga}`);
console.log(`Diskon : ${diskon}`);
console.log(`Harga setelah diskon : ${setDiskon}`);
