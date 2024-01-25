let VIP = 50;
let eksekutif = 50;
let ekonomi = 50;
let totalKeuntungan = 0;
let jumlahTerjual = 0;

let utgVIP = 0; //input
let utgEksekutif = 0; //input
let utgEkonomi = 0; //input
let terjualVIP = 0; //input
let terjualEksekutif = 0; //input
let terjualEkonomi = 0; //input

if (terjualVIP >= 35) {
    utgVIP = VIP * 25 / 100;
} else if (terjualVIP >= 20) {
    utgVIP = VIP * 15 / 100;
} else {
    utgVIP = VIP * 5 / 100;
}

if (terjualEksekutif >= 40) {
    utgEksekutif = eksekutif * 20 / 100;
} else if (terjualEksekutif >= 20) {
    utgEksekutif = eksekutif * 10 / 100;
} else {
    utgEksekutif = eksekutif * 2 / 100;
}

utgEkonomi = terjualEkonomi * 7 / 100;
totalKeuntungan = utgVIP + utgEksekutif + utgEkonomi;
jumlahTerjual = terjualVIP + terjualEksekutif + terjualEkonomi;

console.log(`Keuntungan Tiket VIP: ${utgVIP}`);
console.log(`Keuntungan Tiket Eksekutif: ${utgEksekutif}`);
console.log(`Keuntungan Tiket Ekonomi: ${utgEkonomi}`);
console.log(`Total Keuntungan: ${totalKeuntungan}`);
console.log(`Jumlah Tiket VIP Terjual: ${terjualVIP}`);
console.log(`Jumlah Tiket Eksekutif Terjual: ${terjualEksekutif}`);
console.log(`Jumlah Tiket Ekonomi Terjual: ${terjualEkonomi}`);
console.log(`Total Jumlah Tiket Terjual: ${jumlahTerjual}`);