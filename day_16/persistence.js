var count = 0 // 1 // 2 //3
const persistence = (num) => { // 4
    var angka = num
    var angkaString = String(angka) // '14'
    if(angkaString.length == 1){
        return count
    }
    var hasilKali = 1 // 4
    for(var i = 0 ; i < angkaString.length ; i ++){
        hasilKali *= angkaString[i]
    }
    count++ 
    return persistence(hasilKali) // 4
    
}


// console.log(persistence(39))



let persistence2 = (num) =>{ 
    var count = 0 
    do{
        var hasilKali = 1 
        num = String(num)
        for(var i = 0 ; i< num.length ; i++){
            hasilKali *= num[i]
        }   
         
        count++
        num = hasilKali 
        num = String(num) 

    }while(num.length > 1)
    console.log(count)

}
// persistence2(25)


// var num = [1,2,3,4,5]
// var total = num.reduce(function(prev,cur,index){
//     console.log('looping ke = ' + index)
//     console.log('prev = ' + prev)
//     console.log('cur = ' + cur)
//     return prev + cur
// })
// console.log(total)


// var total = 0

// for(var i = 0 ; i< num.length ; i++){
//     total+= num[i]
// }



const makeSquare =(col,row) => { // 2 ,3
    var hasil = ''
    for(var i = 0 ; i < row ; i++){
        var angka = i+1
        for(var j = 0 ; j < col ; j++){
            hasil += angka + ' '
            angka += i+1     
        }
        hasil += '\n'

    }

    console.log(hasil)
}

// makeSquare(3,3)









let alphaBetPosition = (sentence) =>{ // budi pergi ke pasar hari jum'at
    var alpha = ' abcdefghijklmnopqrstuvwxyz'
    sentence = sentence.replace(/[' ']/g,'')
    var pos = ''
    for(var i = 0 ; i < sentence.length ; i++){
        var index = alpha.indexOf(sentence[i].toLowerCase())
        if(index > 0){
            pos += index + ' '
        }
    }
    console.log(pos)


}

// alphaBetPosition('budi pergi ke pasar ??')







// STRING  
// NUMBER 

// VARIABEL


// let a;
// let a='budi'

// const a = 'fikri'

// var num = 10
// var nama = 'fikri'
// num += nama.repeat(2)

// console.log(num)


// ARRAY // CRUD

// var mobil = [[1],[2,3],[4,5,6]]
// mobil[0][0] = mobil[0][0] == 10
// // mobil[10] = 10

// mobil.splice(1,2)
// console.log(mobil)


// var kelipatan3 = []
// var arr = [1,4,2,3,4,5,6]

// for(var i = 0 ; i < arr.length; i++){

//     if( arr[0] % 3 == 0 ){
//         kelipatan3.push(arr[0])
//     }
// }


// if( arr[1] % 3 == 0 ){
//     kelipatan3.push(arr[1])
// }

// if( arr[2] % 3 == 0 ){
//     kelipatan3.push(arr[2])
// }

// if( arr[3] % 3 == 0 ){
//     kelipatan3.push(arr[3])
// }








// 1
// 2 3
// 4 5 6

// var print =
// `${mobil[0][0]}
// ${mobil[1][0]} ${mobil[1][1]}
// ${mobil[2][0]} ${mobil[2][1]} ${mobil[2][2]}` 





// OBJECT gak




// CONDITIONAL STA(TEMENT 
// if(condtion){
//     // action
//     if(condition){
//         // action
//     }else{
//         // action
//     }
// }else{

// }




// LOOPING

// do{

// }while()

// while(){

// }

// for(){

// }




// var data = [
//     [{nama : ['jamaludin','fikri'],pekerjaan : ['karyawan','satpam']} ]
// ]

// console.log(data[0][0].nama[1])

// console.log(data[0][0].pekerjaan[1])

// function Data (){
//     return{
//         nama : {depan : 'jamaludin', belakang : 'fikri'},
//         pekerjaan : ['karyawan','satpam']
//     }
// }

// console.log(Data().pekerjaan[1].substr(3,2))



// FUNCTION NAMA (param){action}

// Parameter bisa lebih dari satu
// Sekali declare, berkali kali call
// Parameter bisa langsung kasih tipe data, default value
// return


breakCamelCase('budiPergiKePasar') // budi pergi ke pasar
breakCamelCase('jamaludinFikri') // jamaludin fikri


camelCaseMethod('jamaludin fikri') // jamaludinFikri
camelCaseMethod('budi pergi ke pasar') // budiPergiKePasar

search(['fikri','fandi','refa'], 'f') // ['fikri,'fandi']
search(['fikri','fandi','refa'], 'fa') // ['fandi']


