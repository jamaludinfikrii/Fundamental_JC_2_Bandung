//  ================= 

function sumOdd (int = 0){
    var intStr = int.toString().split('')
    var total = 0
    for(var i = 0 ; i < intStr.length ; i+=2){
        total += Number(intStr[i])
    }
    return total

}

// console.log(sumOdd(13245))

function findUniq(str=''){ // budi
    // var newStr = ''
    // for(var i = 0 ; i < str.length ; i ++){
    //     if(str[i] != ' '){
        //         newStr+= str[i]
        //     }
        // }
        
        // console.log(newStr)
        
    // cari jumlah tiap tiap character
    str = str.split(' ').join('')

    var arrChar= []
    var countChar =[]
    
    for(var i = 0 ; i < str.length ; i++){
        if(arrChar.includes(str[i])){
            // cari str i ada di index ke berapa dari arrChar
            var indexDicari = arrChar.indexOf(str[i])
            countChar[indexDicari] ++
        }else{
            arrChar.push(str[i])
            countChar.push(1)
        }
    }

    console.log(arrChar)
    console.log(countChar)



    // cari yang jumlahnya cuma satu

    var hasil = ''
    for(var i = 0 ; i < countChar.length ; i ++){
        if(countChar[i] == 1){
            hasil += arrChar[i]
        }
    }

    console.log(hasil)
}

// findUniq('budi') // budi
// findUniq('budi pergi ke pasar') // budi

const sumOnlyNum =(str='') => {
    var hasil = 0
    for(var i = 0 ; i<str.length ; i++){
        if(str[i] > 0){
            hasil += Number(str[i])
        }
    }
    return hasil
}

sumOnlyNum("fikri123")



const spacify = (str='') => {
    return str.split('').join(' ')
}


// console.log(spacify('budi pergi ke pasar'))

const concateMiddle = (str = '') => { // budin
    var arrStr = str.split(' ')
    var hasil = ''
    for(var i = 0 ; i < arrStr.length ; i ++){
        if(arrStr[i].length > 2){
            if(arrStr[i].length % 2 == 0){
                // console.log('masuk')
                // Kalau Genap
                var middle = arrStr[i].length / 2
                var sebelumMiddle = middle -1
                hasil += arrStr[i][sebelumMiddle] + arrStr[i][middle]
            }else{
                var middle = Math.floor(arrStr[i].length / 2)
                hasil += arrStr[i][middle]
                // Kalau Ganjil
            }
        }
    }
    return hasil
}

console.log(concateMiddle('budi pergi ke pasar'))