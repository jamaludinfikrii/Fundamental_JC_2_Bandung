// VAR , LET, CONST
// const nama = 'budi'
// nama = 'budi'

// const nama = () => {
//     console.log
// }

// nama = 'fikri'


// STRING TEMPLATE (BACK TICK)

// STRING METHOD (includes, repeat, startsWith) // camel case
// nama saya fikri
// namaSayaFikri

// var nama = 'halo'
// console.log(nama.startsWith('ha'))
// console.log(nama.startsWith('lo'))
// console.log(nama.startsWith('lo',2))

// console.log(nama.endsWith('lo'))
// console.log(nama.endsWith('ha',2))





// SPREAD OPERATOR
// [[1,2,3],4,5,6] // no2
// [1,2,3,7,8,9]  //



var nama = ['budi','seto','susilo']

var obj = {nama : "fikri",nama_2 : "susilo"}

// console.log({...obj, nama_2 : 'bambang'})
// obj.nama_2 = 'bambang'
// console.log(obj)

// var data = ['Apel' , 'Jeruk','Mangga']

// function printData(a,b,c){
//     console.log(a + ' ' + b + ' ' + c)
// }

// printData(data[0],data[1],data[2])
// printData(...data)


// DEFAULT PARAMETER

function Nama(namamu=0){
    console.log(namamu)
}

// Nama()


// 
var nama = ['fikri','fikri','budi']
nama = new Set(nama)
console.log(nama)