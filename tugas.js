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
for (let xFor = 2000; xFor <= 2024; xFor++) {
    if (xFor % 4 == 0) {
        document.write(xFor + "<span> merupakan tahun kabisat!</span><br>");
    }
}

document.write("<h1>WHILE (tahun kabisat)</h1>");
let xWhile = 2000;

while (xWhile <= 2024) {
    if (xWhile % 4 == 0) {
        document.write(xWhile + "<span> merupakan tahun kabisat!</span><br>");
    }
    xWhile++;
}

document.write("<h1>DO WHILE (tahun kabisat)</h1>");

let xDoWhile = 2000;
do {
    if (xDoWhile % 4 == 0) {
        document.write(xDoWhile + "<span> merupakan tahun kabisat!</span><br>");
    }
    xDoWhile++

} while (xDoWhile <= 2024);