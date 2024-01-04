//bilangan 1-100 ganjil genap
document.write("<h1>FOR (ganjil genap)</h1>")
for (let iFor = 1; iFor <= 100; iFor++) {
    if (iFor % 2 == 0) {
        document.write("<span>angka Genap : </span>" + iFor + "<br>");
    } else {
        document.write("<span>angka Ganjil : </span>" + iFor + "<br>");
    }
}

document.write("<h1>WHILE (ganjil genap)</h1>");
let iWhile = 1;

while (iWhile <= 100) {
    if (iWhile % 2 == 0) {
        document.write("<span>angka Genap : </span>" + iWhile + "<br>");
    } else {
        document.write("<span>angka Ganjil : </span>" + iWhile + "<br>");
    }
    iWhile++
}

document.write("<h1>DO WHILE (ganjil genap)</h1>");
let iDoWhile = 1;

do {
    if (iDoWhile % 2 == 0) {
        document.write("<span>angka Genap : </span>" + iDoWhile + "<br>");
    } else {
        document.write("<span>angka Ganjil : </span>" + iDoWhile + "<br>");
    }
    iDoWhile++
} while (iDoWhile <= 100);


document.write("<p>=============================================================================================</p>")

//tahun kabisat
document.write("<h1>FOR (tahun kabisat)</h1>");
for (let xFor = 1600; xFor <= 2024; xFor++) {
    if (xFor % 4 != 0) {
        document.write(xFor + "<span> bukan merupakan tahun kabisat!</span><br>");
    } else if(xFor % 100 != 0){
        document.write(xFor + "<span> merupakan tahun kabisat!</span><br>");
    } else if(xFor % 400 != 0){
        document.write(xFor + "<span> bukan merupakan tahun kabisat!</span><br>");
    } else{
        document.write(xFor + "<span> merupakan tahun kabisat!</span><br>");
    }
}

document.write("<h1>WHILE (tahun kabisat)</h1>");
let xWhile = 1600;

while (xWhile <= 2024) {
    if (xWhile % 4 != 0) {
        document.write(xWhile + "<span> bukan merupakan tahun kabisat!</span><br>");
    } else if(xWhile % 100 != 0){
        document.write(xWhile + "<span> merupakan tahun kabisat!</span><br>");
    } else if(xWhile % 400 != 0){
        document.write(xWhile + "<span> bukan merupakan tahun kabisat!</span><br>");
    } else{
        document.write(xWhile + "<span> merupakan tahun kabisat!</span><br>");
    }
    xWhile++;
}

document.write("<h1>DO WHILE (tahun kabisat)</h1>");
let xDoWhile = 1600;

do {
    if (xDoWhile % 4 != 0) {
        document.write(xDoWhile + "<span> bukan merupakan tahun kabisat!</span><br>");
    } else if(xDoWhile % 100 != 0){
        document.write(xDoWhile + "<span> merupakan tahun kabisat!</span><br>");
    } else if(xDoWhile % 400 != 0){
        document.write(xDoWhile + "<span> bukan merupakan tahun kabisat!</span><br>");
    } else{
        document.write(xDoWhile + "<span> merupakan tahun kabisat!</span><br>");
    }
    xDoWhile++

} while (xDoWhile <= 2024);

document.write("=========================================");
document.write("<h1>Factorial</h1>");

let faktor1 = 1;
for (let y = 1; y <= 5; y++){
    faktor1 *= y;
}
document.write(faktor1);
document.write("<br>");

let faktor2 = 1;
let j = 1;
while (j <= 5){
    faktor2 *= j;
    j++
}

document.write(faktor2);
document.write("<br>");

let faktor3 = 1
let k = 1;
do {
    faktor3 *= k
    k++
} while (k <= 5);

document.write(faktor3);

