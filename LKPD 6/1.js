const jumlahSiswa = 15;
let siswa = [];
let juara = null;

for (let i = 0; i < jumlahSiswa; i++) {
    let nama = prompt(`Masukkan nama siswa ke - ${i + 1}`);
    let nilaiMTK = parseFloat(prompt(`Masukkan nilai MTK siswa ke - ${i + 1}`));
    let nilaiBINDO = parseFloat(prompt(`Masukkan nilai INDO siswa ke - ${i + 1}`));
    let nilaiINGG = parseFloat(prompt(`Masukkan nilai INGGRIS siswa ke - ${i + 1}`));
    let nilaiDPK = parseFloat(prompt(`Masukkan nilai DPK siswa ke - ${i + 1}`));
    let nilaiAgama = parseFloat(prompt(`Masukkan nilai Agama siswa ke - ${i + 1}`));
    let kehadiran = parseFloat(prompt(`Berapa persen kehadiranmu selama sekolah?`));

    siswa.push({
        nama: nama,
        nilai: {
            MTK: nilaiMTK,
            BINDO: nilaiBINDO,
            INGG: nilaiINGG,
            DPK: nilaiDPK,
            AGAMA: nilaiAgama
        },
        kehadiran: kehadiran
    });
}

for (let i = 0; i < jumlahSiswa; i++) {
    let totalNilai = siswa[i].nilai.MTK + siswa[i].nilai.BINDO + siswa[i].nilai.INGG + siswa[i].nilai.DPK + siswa[i].nilai.AGAMA;

    if (totalNilai >= 475 && siswa[i].kehadiran == 100) {
        juara = siswa[i];
        break;
    }
}

if (juara === null) {
    console.log(`tidak ada yang juara karena belum ada yang memenuhi syarat.`)
} else {
    console.log(`siswa juara adalah : ${juara.nama}`);
}