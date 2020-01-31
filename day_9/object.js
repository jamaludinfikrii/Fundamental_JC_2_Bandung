// 
function luasLingkaran(radius){
    var hasil = 3.14 * radius*radius
    return hasil
}


function removeCharAlpha(sentence){ // purwadhika
    var hasil = ''
    for(var i= 0;i< sentence.length ; i++){
        if(sentence[i].toLowerCase() !== 'a'){
            hasil += sentence[i]
        }
    }
    return hasil
}

console.log(removeCharAlpha('purwadhika student bandung'))



function merge(num1, num2){
    

    var hasil = ''
    num1 = String(num1)
    num2 = String(num2)

    if(num1.length !== num2.length){
        return 'Kedua parameter harus punya panjang digit yang sama'
    }else{
        for(var i = 0 ; i < num1.length ; i++){
            hasil += num1[i] + num2[i]
        }
    }

    // var i = 0
    // do{
    //     hasil += num1[i] + num2[i]
    //     i++
    // }while(i < num1.length)
    // return hasil

    var i = 0
    while(i < num1.length){
        hasil += num1[i] + num2[i]
        i++
    }
    return hasil
    // num1[0] + num2[0] + num1[1] + num2[1] + num1[2] 
    // num1[0] + num2[0] + num1[1] + num2[1]
}


console.log(merge(123,123)) // 14453910



function cyclicRotation(number){
    number = String(number)
    if(number.length % 2 !== 0){
        return 'Panjang Digit Harus Genap'
    }
    
    var temp = [] 

    for(var i = 0 ; i < number.length ; i+=2 ){
        temp.push(number[i] + number[i+1])
    }
    console.log('Sebelum Reverse = ' + temp)
    
    temp = temp.reverse()
    console.log('Setelah Reverse = ' + temp)
    
    temp = temp.join('')
    console.log('Setelah Join = ' + temp)

    return temp


}

cyclicRotation(123456) // 563412




function reverseSentence(sentence){
    var arr_sentence = sentence.split(' ')
    // ["Aku", "murid" , "purwadhika"]
    arr_sentence = arr_sentence.reverse()
    // ['Purwadhika' , "Murid", "Aku"]
    var hasil = arr_sentence.join(' ')
    // 'Purwadhika Murid Aku'
    return hasil
}

console.log(reverseSentence('Aku Murid Purwadhika'))
// 123456
// 12.34.56.


// var arr = ['fikri','muslim','tri']

// console.log(arr.join(''))



