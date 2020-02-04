// BAHAS MENTIMER


// var hari = ['Minggu','Senin','Selasa']
// var arrBulan = 'January February'.split(' ') // ['January','February']

// var a = [[1,2],[0,2]]
// console.log(a[0][1]) // 2
// console.log(a[1][0]) // 0

// console.log(arrHari[2] + ' ' + arrBulan[1]) // Selasa February


// var nama = 'fikri'
// nama.split('') // [f,i,k,r,i]

// var nama = 'jamaludin fikri'
// nama.split('') // ['jamaludin','fikri']



// UJIAN DATA SCIENCE FUNDAMENTAL

// formatDuration(62) // 1 Minute and 2 Seconds

// formatDuration(31536000)// 1 Year 
// formatDuration(31536062)// 1 Year , 1 Minute and 2 Seconds 
// 86400 // 

const formatDuration = (input=0) => { // 31536062
    var tahun = Math.floor(input / (365 * 24 * 3600)) // 1
    var sisa_tahun = input % 31536000 // 62
    var hari = Math.floor(sisa_tahun / (24*3600)) // 0
    var sisa_hari = sisa_tahun % (24 * 3600) // 62 % 86400 = 62
    var jam = Math.floor(sisa_hari / 3600) // 0
    var sisa_jam = sisa_hari % 3600 // 62
    var menit = Math.floor(sisa_jam / 60) // 1
    var detik = sisa_jam % 60 // 2

    var text = ''
    text += input + ' = '

    // TAHUN
    if(tahun > 0){
        text += tahun + ' year'
        if(tahun > 1){
            text += "s"
        }
        text += ' , '
    }

    // HARI
    if(hari > 0){
        text += hari + ' day'
        if(hari > 1){
            text += "s"
        }
        text += ' , '
    }

    // JAM
    if(jam > 0){
        text += jam + ' hour'
        if(jam > 1){
            text += "s"
        }
        text += ' , '
    }

    // MENIT
    if(menit > 0){
        text += menit + ' minute'
        if(menit > 1){
            text += "s"
        }
        text += ' , '
    }

    // DETIK
    if(detik > 0){
        text += detik + ' second'
        if(detik > 1){
            text += "s"
        }
        text += ' , '
    }

    var arrText = text.split(' , ') 
    // [ '31536062 = 1 year', '1 minute', '2 second\'s', '' ]
    arrText.pop(arrText.length-1)

    var new_text = ''
    for(var i = 0 ; i < arrText.length ; i++){
        new_text += arrText[i]
        if(i == arrText.length-2){
            new_text += ' and '
        }else if(i !== arrText.length-1){
            new_text += ' , '
        }
    }
    
    console.log(new_text)
}


// formatDuration(123456789)


const countVowel = (sentence='') => {
    var jumlah_vowel = 0
    for(var i = 0; i < sentence.length ; i ++){
        var char = sentence[i].toLowerCase()
        if(char == 'a' || char == 'i' || char == 'u' || char == 'e' || char =='o'){
            jumlah_vowel ++
        }
    }
    return jumlah_vowel
}

// console.log(countVowel('Budi Pergi Ke Pasar'))



// [1,1,2,2,3,3,4]

// arr = [[1,2,3],[4,2,3],[1]]
const given = (arr = []) => {
    var new_arr = [] // [1,2,3,4,2,3,1]
    for(var i = 0 ; i < arr.length ; i++){
        for(var j = 0 ; j < arr[i].length; j ++){
            new_arr.push(arr[i][j])
        }
    }
    // new_arr.push(arr[0][0])
    // new_arr.push(arr[0][1])
    // new_arr.push(arr[0][2])
    // new_arr.push(arr[1][0])
    // new_arr.push(arr[1][1])
    // new_arr.push(arr[1][2])
    // new_arr.push(arr[2][2])

    console.log(new_arr.sort())
}
// given([1,2,3],[4,2,3],[1])





const countWords = (sentence = '') => {
    var arrKata = [] // [nama,saya,adalah]
    var arrJumlahKata =[] // [1,1,1]
    var arrSentence = sentence.split(' ') // ['Nama' , "saya" , 'adalah','nama']

    for(var i = 0 ; i< arrSentence.length ; i ++){
        // 
        if(arrKata.includes(arrSentence[i].toLowerCase())){
            var index_ke =  arrKata.indexOf(arrSentence[i].toLowerCase())
            arrJumlahKata[index_ke] ++
        }else{
            arrKata.push(arrSentence[i].toLowerCase())
            arrJumlahKata.push(1)
        }
    }

    console.log(arrKata)
    console.log(arrJumlahKata)
    var text = ''
    for(var i = 0 ;i < arrKata.length ; i++){
        text += "Jumlah kata '" + arrKata[i].charAt(0).toUpperCase() + arrKata[i].slice(1,arrKata[i].length) + "' adalah " + arrJumlahKata[i] + '\n'
    }
    console.log(text)
}


countWords('Nama saya adalah nama saya')

// ['Nama' , 'Saya' ,"Adalah"]
// [2 , 1,1]

// {
//     nama : 2,
//     saya : 1,
//     adalah : 1
// }

// Jumlah kata "nama" ada Sebanyak 2
// Jumlah kata "saya" ada Sebanyak 1
// Jumlah kata "adalah" ada Sebanyak 1




var arr = [1,2,4,5,20,30,63,42]

arr = arr.sort(function(a,b) {return a-b})
console.log(arr)