let kode = 13311199902; //input 11 digit
let g;
let dd;
let mm;
let yyyy;
let nn;
let bulan;

g = Math.floor(kode/10000000000);
dd = Math.floor((kode/100000000) % 100);
mm = Math.floor((kode/1000000) % 100);
yyyy = Math.floor((kode/100) % 10000);
nn = Math.floor((kode % 1000000000) % 100);

switch (mm){
    case 1:
        bulan = "Januari";
        break;
    case 2:
        bulan = "Februari";
        break;
    case 3:
        bulan = "Maret";
        break;
    case 4:
        bulan = "April";
        break;
    case 5:
        bulan = "Mei";
        break;
    case 6:
        bulan = "Juni";
        break;
    case 7:
        bulan = "Juli";
        break;
    case 8:
        bulan = "Agustus";
        break;
    case 9:
        bulan = "September";
        break;
    case 10:
        bulan = "Oktober";
        break;
    case 11:
        bulan = "November";
        break;
    case 12:
        bulan = "Desember";
        break;
    default:
        bulan = "Bulan Tidak Valid";
        break;
}

console.log(g);
console.log(dd);
console.log(`${mm} yaitu bulan : ${bulan}`);
console.log(yyyy);
console.log(nn);
