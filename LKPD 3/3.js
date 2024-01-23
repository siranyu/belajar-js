let fahrenheit = 250; //input
let celcius;

celcius = (fahrenheit - 32) * 5/9;

if(celcius > 300){
    console.log("Panas");
} else if (celcius < 250){
    console.log("Dingin");
} else{
    console.log("Normal");
} 