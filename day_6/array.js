var mobil_1 = 'Avanza'
var harga_mobil_1 = '100jt'
var mobil_2 = 'Xenia'
var harga_mobil_2 = '90jt'
var mobil_3 = 'Alya'
var harga_mobil_3 = '120jt'


var print = 
`Daftar Mobil
1. ${mobil_1} , Rp. ${harga_mobil_1}
2. ${mobil_2} , Rp. ${harga_mobil_2}
3. ${mobil_3} , Rp. ${harga_mobil_3}`


var mobil = ['Avanza' , 'Xenia','Alya']
var harga = [100,90,120]

var print = 'Daftar Mobil\n'
for(var i = 0 ; i < mobil.length ; i ++){
    print += mobil[i] + ', Rp. ' + harga[i] + 'jt\n'
}

// console.log(print)


// var print = 
// `Daftar Mobil
// 1. ${mobil[0]} , Rp . ${harga[0]}jt
// 2. ${mobil[1]} , Rp . ${harga[1]}jt
// 3. ${mobil[2]} , Rp . ${harga[2]}jt

// `












// POP & PUSH

var mobil = ['Avanza' , 'Xenia','Alya']

// buah = ['apple','angur','jeruk'] // 2 -1
// stock = [20,30,10]
// stock[1] = 10

mobil[1] = 'Alphard'

console.log(mobil)