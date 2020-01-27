// Ganjil Genap
// Angka Terbesar
// Plat Nomor

// Declare
function ganjilGenap (angka){
    if(angka % 2==0){
        return angka + ' adalah Genap'
    }else{
        return angka + ' adalah Ganjil'
    }
}

// function perkalian(angka1 , angka2){
//     var hasil = angka1 * angka2
//     return hasil
// }

// var angka = perkalian(4,5) + perkalian(2,5)
// console.log(ganjilGenap(angka))

// 3,3,3
function angkaTerbesar(num1,num2,num3){
    var max = num1
    if(num2 > max){
        max = num2
    }
    if(num3 > max){
        max = num3
    }
    return max
}

// console.log(angkaTerbesar(9,2,5))


function platNomor(plat,tanggal){
    if(((plat.charAt(5) % 2 == 0) && (tanggal %2 ==0)) ||
    ((plat.charAt(5) % 2 != 0) && (tanggal %2 !=0))){
        console.log('Boleh Lewat')
    }else{
        console.log('Gak Boleh Lewat')
    }
}


// console.log(platNomor('D 4351 CA' , 21))


function hapusAwalDanAkhir(kata){
    return kata.slice(1,kata.length-1)
}


function sisainAwalDanAkhir(kata){
    var huruf_awal = kata.charAt(0)
    var huruf_akhir = kata.charAt(kata.length-1)
    return huruf_awal + huruf_akhir  
}

function kalkulator(angka1,angka2,operator){
    if(operator == '+'){
        an
    }
}




function squareEveryDigit(num){
    var hasil = ''
    var param = String(num)
    for(var i = 0 ; i < param.length ; i ++){
        hasil += param[i] * param[i]
    }

    return hasil
}



function removeVocal (kata){
    var new_kata = ''
    for(var i = 0 ; i < kata.length; i++){
        if(kata[i].toLowerCase() == 'a' || kata[i].toLowerCase() == 'i' || kata[i].toLowerCase() == 'u' || kata[i].toLowerCase() == 'e' || kata[i].toLowerCase() == 'o'){
            
        }else{
            new_kata += kata[i]
        }
    }
    return new_kata
}

//console.log(removeVocal('pUrwadhika'))







var kata = 'Muslim'

function removeVocal3(string) {
    let hasil = '';
    for (let i = 0; i < string.length; i++) {
      if ('aiueoAIUEO'.indexOf(string[i]) >= 0) {
        hasil += string[i];
      }
    }
    return hasil;
  }

console.log(removeVocal3('aMuslim'))



var nama = 'purwadhika'

for(var i = 0 ; i < nama.length ; i ++){
    console.log(nama[i] + ' checked')
}



