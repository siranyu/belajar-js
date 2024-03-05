let nama = [];
let rombel = [];
let nilaiMTK = [];
let nilaiBING = [];
let nilaiBIND = [];
let nilaiDPK = [];
let totalNilai = [];

for (let i = 0; i < 10; i++) {
    nama.push(prompt("Masukkan Nama Siswa ke- " + (i+1)));
    rombel.push(prompt("Masukkan Rombel Siswa ke- " + (i+1)));
    nilaiMTK.push(parseFloat(prompt("Masukkan Nilai MTK Siswa ke- " + (i+1))));
    nilaiBING.push(parseFloat(prompt("Masukkan Nilai BING Siswa ke- " + (i+1))));
    nilaiBIND.push(parseFloat(prompt("Masukkan Nilai BIND Siswa ke- " + (i+1))));
    nilaiDPK.push(parseFloat(prompt("Masukkan Nilai DPK Siswa ke- " + (i+1))));

    totalNilai.push(nilaiMTK[i] + nilaiBING[i] + nilaiBIND[i] + nilaiDPK[i]);
}

// rata-rata
let rataRata = totalNilai.reduce((total, nilai) => total += nilai, 0) / totalNilai.length;

// rombel dengan nilai total tertinggi
let indexTertinggi = totalNilai.indexOf(Math.max(...totalNilai));
let rombelTertinggi = rombel[indexTertinggi];

// nilai terendah
let terendah = Math.min(...totalNilai);

// output
console.log(...nama);
console.log("Rombel dengan nilai tertinggi: " + rombelTertinggi);
console.log("Nilai rata-rata dari 10 siswa: " + rataRata);
console.log("Nilai terendah dari 10 siswa: " + terendah);