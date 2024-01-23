let angka = 6; //input
let satuan;
let puluhan;
let ratusan;

satuan = angka % 10;
puluhan = Math.floor((angka % 100) / 10);
ratusan = Math.floor((angka % 1000) / 100);

console.log(`satuan : ${satuan}`);
console.log(`puluhan : ${puluhan}`);
console.log(`ratusan : ${ratusan}`);

