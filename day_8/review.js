// function tiruanRound(angka){ // 4.4
//     // ambil angka di belakang koma
//     var hasil ;
//     angka =  String(angka)
//     var batas= angka.split('.')
//     if(batas >=5){
//         hasil = Number(angka[0]) + 1
//     }else{
//         hasil = Number(angka[0])
//     }
//     console.log(hasil)
// }


// tiruanRound(14.5)
// tiruanRound(5.3)
// tiruanRound(6.4)



// ======== SPLITT =========



// var angka = 22114.51
// angka = String(angka)
// var batas = angka.split('.') // split ubah string ke array

// console.log(batas)


// var nama = 'fikri'
// nama.split('')

// var alamat = 'Jl Titiran no 1222, Bandung Barat, Bandung, Indonesia'
// var arr_alamat = alamat.split(',')
// // console.log(arr_alamat[0])


// var plat_nomor = 'D 12233 CD'
// var arr_plat_nomor = plat_nomor.split(' ')
// // console.log(arr_plat_nomor[1])






// var juara = []

// var data = ['Muslim','Tri','Ghiran','Afgan','Kresna','Avinda','Fikri','Fauzan','Seto','Budi','Andi']

// var angka_random = Math.random()
// angka_random = Math.floor(angka_random * data.length)

// var pemenang = data[angka_random]

// if(juara.indexOf(pemenang) >= 0 ){
//     // console.log( pemenang + 'Gak Jadi Menang')
// }else{
//     console.log('pemenangnya adalah ' + pemenang)
//     juara.push(pemenang)
// }













// var juara = ['fikri','tri']

// var juara_baru = 'muslim'

// console.log(juara.indexOf(juara_baru))

// DECLARATION
var angka = 100
function Hello(){
    console.log(angka)
    angka--
}


// ACCESSING, CALLING FN
setTimeout(Hello,3000)

