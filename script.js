
// let operator= parseInt(prompt("masukan operator +-*/", ""));
// let a= parseInt(prompt("angka 1"));
// let b = parseInt(prompt("angka 2"));

// if(operator == '+'){
// function tambah (a,b) {
//     return a + b;
// }
// }
// let hasil = tambah(a , b);
// document.write(hasil);


function  tambah (a,b){
    return a + b;
}
function  kurang (a,b){
    return a - b;
}
function  bagi (a,b){
    return a / b;
}
function  kali (a,b){
    return a * b;
}

let operator = prompt("masukan operator");
var a= parseInt(prompt(`masukan nilai 1:`));
var b= parseInt(prompt(`masukan nilai 2:`));

if(operator == '+'){
    var hasil= tambah(a,b);
    document.write(hasil);
}
if(operator == '-'){
    var hasil= kurang(a,b);
    document.write(hasil);
}
if(operator == '/'){
    var hasil= bagi(a,b);
    document.write(hasil);
}
if(operator == '*'){
    var hasil= kali(a,b);
    document.write(hasil);
}
