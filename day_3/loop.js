// LOOPING

// Looping Kembangan dari pengkondisian
// Kalian Harus Bikin Exit Way Biar gak Infinite Loop

// WHILE LOOP
// var num = 1
// while(num <= 10){
//     console.log('Angka Ke ' + num)
//     num = num + 1
// }





// DO WHILE LOOP

// var num = 100
// while(num <= 10){
//     console.log('Angka Ke ' + num)
//     num = num + 1
// }

// var num = 100
// do{
//     console.log('Angka Ke - ' + num)
// }while(num <= 10)








// FOR LOOP

// var x;
// for(x = 1; x<=10 ; x+=2){
//     console.log(x)
// }


// for(initial_value, condition , increment/decrement){
//     action
// }

// var bintang = '' //***\n***\n***\n
// for(var i = 1 ; i <= 3 ; i ++){
//     if(i ==3){
//         bintang += '***'
//     }else{
//         bintang += '***\n'
//     }
// }

// console.log(bintang)

// *
// **
// ***
// ****
// *****

// NESTED LOOP

// var segitiga = '' // *\n**\n***\n
// // i = 2
// // j = 0
// for(var i = 0 ; i < 3 ; i++){
//     for(var j = 0 ; j <= i ; j ++){
//         segitiga += '*'
//     }
//     segitiga += '\n'
// }



// console.log(segitiga)

// for(var a = 1 ; a < 6 ; a++){
//     for(var b = 1 ; b <=3 ; b ++){
//         console.log(b)
//     }
// }

var segitiga = '' // *\n**\n***\n****\n*****\n
let i = 0 //5
while(i < 5){

    let j = 0 // 0
    while(j <= i){
        segitiga += '*'
        j ++
    }

    segitiga += '\n'
    i++
}


console.log(segitiga)