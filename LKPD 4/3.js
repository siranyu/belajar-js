let hh = 1; //input
let mm = 59; //input
let ss = 59; //input

if (ss + 1 == 60) {
    ss = 0;
    mm++;

    if (mm == 60) {
        mm = 0;
        hh++;

        if (hh == 24) {
            hh = 0;
            mm = 0;
            ss = 0
        }
    } else {
        mm++;
    }
} else {
    ss++;
}
  
console.log(`Jam ${hh}, Menit ${mm}, Detik ${ss}`);