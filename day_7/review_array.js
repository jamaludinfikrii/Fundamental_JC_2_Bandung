// function Nama(){
//     return ['fikri','muslim',['ghiran','afgan',['avinda']]]
// }
// var bebas = ['fikri','muslim',['ghiran','afgan',[Nama]]]


// console.log(bebas[2][2][0]()[2][2][0])




function reverseSeq(angka){ //10
    var hasil =[] // 10 , 9

    for(var i = angka ; i > 0 ; i--){
        hasil.push(i)
    }

    return hasil
}


// console.log(reverseSeq(5))// [5,4,3,2,1]
// console.log(reverseSeq(10))// [10,9,8,7,6,5,4,3,2,1]
// console.log(reverseSeq(100)) // [10,9,8,7,6,5,4,3,2,1]



function squareSum(numbers){
    var hasil = 0 // 17
    hasil += numbers[0] * numbers[0]
    hasil += numbers[1] * numbers[1]
    hasil += numbers[2] * numbers[2]
    return hasil
}

// console.log(squareSum([2,2,3])) // 17


function getRealFloor(n) {
}


getRealFloor(1) // 0
getRealFloor(13) // 11
getRealFloor(23) // 20





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







var angka = 22114.51
angka = String(angka)
var batas = angka.split('.') // split ubah string ke array

// console.log(batas)


var nama = 'fikri'
nama.split('')

var alamat = 'Jl Titiran no 1222, Bandung Barat, Bandung, Indonesia'
var arr_alamat = alamat.split(',')
console.log(arr_alamat[0])


var plat_nomor = 'D 12233 CD'
var arr_plat_nomor = plat_nomor.split(' ')
console.log(arr_plat_nomor[1])
