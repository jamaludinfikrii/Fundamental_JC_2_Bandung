// const arrayMash = (param1=[], param2=[]) => {
//     if(param1.length !== param2.length){
//         return 'Both Array Must be the same length'
//     }
//     // ACTION
//     var hasil = []
//     for(var i = 0 ; i<param1.length ; i++){
//         hasil.push(param1[i])
//         hasil.push(param2[i])
//     }
    
    

//     return hasil


// }

// console.log(arrayMash([1,2,3] , ['b','c','z']))



// DEFAULT PARAMETER

// function Nama(param='Fikri'){
//     console.log('Nama Saya ' + param)
// }

// Nama()



// const formatDuration = (seconds=0) => {
//     let tahun = Math.floor(seconds / (365*24*3600))
//     let sisa_tahun = seconds % 365*24*3600
// }

// formatDuration(123456789)










// var hari = 760 // 1 tahun, 0 bulan, 5 hari

// let tahun = Math.floor(hari / 365)
// let sisa_tahun  = hari % 365 // 30
// let bulan = Math.floor(sisa_tahun / 30) // 1
// let sisa_bulan = sisa_tahun % 30 // 0


// console.log(tahun + ' tahun , ' +  bulan + ' bulan, ' + sisa_bulan + ' hari' )


// NO .3 

// const summation = (angka=0) => { // 1 + 2 + 3 + 
//     var hasil = ''
//     for(var i = 1 ; i <= angka ; i++){
//         if(i == angka){
//             hasil += i
//             hasil += ' = '
//             // Pake =
//         }else{
//             hasil += i
//             hasil += ' + '
//             // Pake +
//         }
//     }
//     return hasil
    
// }

// console.log(summation(3))


// const summation = (angka=0) => { // 1 + 2 + 3 + 
//     var hasil = ''
//     var total = 0
//     for(var i = 1 ; i <= angka ; i++){
//         // Biarin dulu ada + tambahan
//         // Plus di hapus
//         // Diganti dengan =
//         total += i
//         hasil += i
//         hasil += ' + '
//     }
//     // console.log(hasil.length)
//     hasil = hasil.slice(0,hasil.length-3)
//     hasil += ' = '
//     hasil += total
//     return hasil
    
// }

// console.log(summation(10))


function ideas(arr=[]){
    // tahu jumlah good ada berapa -oke
    // pengkondisian
    var good = 0 // 1 // 2
    for(var i = 0 ; i < arr.length ; i ++){
        if(arr[i] == 'good'){
            good ++
        }
    }
    var hasil =''
    if(good == 0){
        hasil = 'fail'
    }else if(good > 2){
        hasil = 'i smell a series'
    }else{
        hasil = 'publish'
    }

    return hasil

}

console.log(ideas(['good','bad','bad','good']))

const sequenceSum = (start,stop,step) => {
    var hasil = 0
    for(var i = start;i<=stop ; i+= step){
        hasil += i
    }

    // var angka = start
    // do{
    //     hasil += angka
    //     angka = angka + step
    // }while(angka <= stop)
    return hasil
} 

console.log(sequenceSum(2,2,2))






