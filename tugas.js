//bilangan 1-100 ganjil genap
for(let i = 1; i <= 100; i++){
    if(i % 2 == 0){
        document.write("<span>angka Genap : </span>" + i + "<br>");
    } else{
        document.write("<span>angka Ganjil : </span>" + i + "<br>")
    }
}

document.write("<p>=======================================</p>")

//tahun kabisat
for(let x = 2000; x <= 2024; x++){
    if(x % 4 == 0){
        document.write(x + "<span> merupakan tahun kabisat!</span><br>");
    }
}