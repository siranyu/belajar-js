let nama = "anyu"; //input
let PABP = 90; //input
let MTK = 80; //input
let DPK = 87; //input
let avg;

avg = (PABP + MTK + DPK) / 3;

if(avg <= 100 && avg >= 80){
    console.log("A")
} else if(avg < 80 && avg >= 75){
    console.log("B")
} else if(avg >= 65 && avg < 75){
    console.log("C")
} else if(avg >= 45 && avg < 65){
    console.log("D")
} else if(avg < 45 && avg >= 0){
    console.log("E")
} else{
    console.log("K")
} 