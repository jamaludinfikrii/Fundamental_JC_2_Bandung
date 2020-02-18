function isEmail (str=''){ // fikri@@halo.com.co.id
    var extension = ['.com','.co.id','.id']
    // CHECK Extension
    var isAda = false
    var jumlah = 0
    for(var i = 0; i <extension.length ; i ++){
        if(str.includes(extension[i])){
            jumlah ++
        }

        if(str.endsWith(extension[i])){
            isAda = true
        }
    }

    // CHECK DUPLICAT EXTENSION
    var isCheck = false
    if(str.includes('@')){
        var index = str.indexOf('@')
        if(index > 0 && index < str.length){
            isCheck=true
        }
        
        
    }
    console.log(isCheck)
    console.log(isAda)
    if(isAda && isCheck && jumlah == 1){
        return 'Email True'
    }else{
        return "Email False"
    }
}

// validor.isEmal('')



// COUNT LETTER AND DIGIT

// count('fikri123') // [5,3]
// count('aku') // [3,0]


// var a = '0'

// if(a>=0){
//     console.log('digit')
// }else{
//     console.log('bukan')
// }

























// noZero(1324000) // 1324
// noZero(103400) // 134



const makeSquare =(col,row) => { // 2 ,3
    var angka = 1
    var hasil = ''//'1 2\n3 4\n5 6'
    for(var i = 0 ; i < row ; i++){

        for(var j = 0 ; j < col ; j++){
            hasil += angka + ' '
            angka ++
        }
        hasil += '\n'

    }

    console.log(hasil)
}

// makeSquare(2,10)




const passwordStrength = (str='') => { // fikri123
    // CHECK Alphabet
    var adaAlpha = false
    var adaUpper = false
    var adaNumeric = false
    for(var i = 0 ; i < str.length ; i++){
        if(!(str[i] >= 0)){
            adaAlpha = true
            if(str[i] == str[i].toUpperCase()){
                adaUpper = true
            }
        }
        if(str[i] > 0){
            adaNumeric = true
        }

    }

    if(adaNumeric && adaUpper && adaAlpha){
        return 'Password Strength'
    }else{
        return 'Password Weak'
    }

    // CHECK UpperCase

    // CHECK NUMERIC
}


console.log(passwordStrength('fikri123iFkri'))

// var a = 'a'

// if(!(a > 0)){
//     console.log('alpha')
// }

// console.log('!' > 0)


console.log('a' == 'A')




// MSE ([1,2,3],[4,5,6]) // 9

// [3,3,3] // 3*3 = 9




// var sentences = 'budi pergi ke pasar'


// hasil = 'ke budi pergi pasar'

// var sentences_2 = 'saya murid di purwadhika'

// hasil = 'di saya murid purwadhika'


// const sortSentences = (str = '') =>{ // budi pergi ke pasar
//     var arrString = str.split(' ')
//     var arrLength = []
//     for(var i = 0 ; i < arrString.length; i ++){
//         var length = arrString[i].length
//         arrLength.push(length)
//     }
//     arrLength.sort(function(a,b){return a-b})
//     var hasil = ''

    
//     console.log(arrLength) 
    
//     var indexSorted = []
//     for(var i = 0 ; i < arrString.length ; i ++){
//         var index
//     }
// }

// sortSentences('budi pergi ke pasar')

// var arr_sama = ['5pergi','5pasar']
var arr = ['4budi','5pergi','2ke','5pasar']
[ '2ke', '4budi', '5pasar', '5pergi' ]


arr.sort()
console.log(arr)