const sumTwoSmallest = (arr=[]) => {
    arr.sort(function(a,b){return a-b})
    return arr[0] + arr[1]
}


// console.log(sumTwoSmallest([5,4,2,3,4,2]))


const removeDuplicates = (str='') => {

    // var arr = str.split(' ')
    // var hasil = []
    // for(var i = 0 ; i< arr.length ; i++){
    //     if(!(hasil.includes(arr[i]))){
    //         hasil.push(arr[i])
    //     }
    // }

    // return hasil.join(' ')

    var arr = str.split(' ')
    var set = new Set(arr)
    var arr_set = Array.from(set)
    return arr_set.join(' ')
}

// console.log(removeDuplicates('alpha beta beta gamma alpha'))


const theMost = (str='') => {


    var huruf = [] //[f,a] 
    var jumlah_huruf = [] //[2,4] 

    // Count Huruf
    for(var i = 0 ; i < str.length ; i ++){
        if(huruf.includes(str[i])){
            var index_huruf = huruf.indexOf(str[i])
            jumlah_huruf[index_huruf] ++
        }else{
            huruf.push(str[i])
            jumlah_huruf.push(1)
        }
    }
    // Find The Most
    var jumlah_terbanyak = Math.max(...jumlah_huruf) // 4
    var index_terbanyak = jumlah_huruf.indexOf(jumlah_terbanyak) //1

    console.log('Huruf Paling Banyak Adalah = ' + huruf[index_terbanyak] + ' dengan jumlah = ' + jumlah_terbanyak)

    
    // if(huruf.includes(str[0])){
    //     var index_huruf = str[0].indexOf(huruf)
    //     jumlah_huruf[index_huruf] ++
    // }else{
    //     huruf.push(str[0])
    //     jumlah_huruf.push(1)
    // }

    // if(huruf.includes(str[1])){
    //     var index_huruf = str[1].indexOf(huruf)
    //     jumlah_huruf[index_huruf] ++
    // }else{
    //     huruf.push(str[1])
    //     jumlah_huruf.push(1)
    // }

    // if(huruf.includes(str[2])){
    //     var index_huruf = huruf.indexOf('i') // 1
    //     jumlah_huruf[1] ++
    // }else{
    //     huruf.push(str[2])
    //     jumlah_huruf.push(1)
    // }

    // if(huruf.includes(str[3])){
    //     var index_huruf = huruf.indexOf(str[3]) // 1
    //     jumlah_huruf[index_huruf] ++
    // }else{
    //     huruf.push(str[3])
    //     jumlah_huruf.push(1)
    // }

    

    
    
}

theMost('faafaa') // i



// var arr =['fikri','andi']

// arr.indexOf('andi') // 1
// console.log(arr.includes('andi')) // false





// var input = 'fafafafafaf'

// var arr_huruf = ['f','a']
// var arr_jumlah_huruf = [6,6]


// var obj = {
//     f : 6,
//     a : 6
// }

// var arr = [['f',6],['a',6]]







// FIND UNIQ

const findUniq = (arr=[]) => {
    var angka = [] // [1,2,3]
    var jumlah_angka = [] // [3,2,1]

    for(var i = 0 ; i<arr.length ; i++){
        if(angka.includes(arr[i])){
            var index_angka = angka.indexOf(arr[i])
            jumlah_angka[index_angka] ++
        }else{
            angka.push(arr[i])
            jumlah_angka.push(1)
        }
    }

    for(var i= 0 ; i<jumlah_angka.length ; i++){
        if(jumlah_angka[i] == 1){
            return 'Angka Yang Unik Adalah ' + angka[i]
        }
    }
    return 'Gak Ada Yang Unik'

    // console.log(angka)
    // console.log(jumlah_angka)

}

console.log(findUniq([1,1,1,2,2,3,3]))






filterData(['fikri','fendi','budi','andi'] , 'f')  // ['fikri','fendi']
filterData(['fikri','fendi','budi','andi'] , 'i')  // ['fikri','fendi','budi','andi']

countPairs(['red','red','green','blue','green']) // 2 pairs
countPairs(['red','red','red','red','green']) // 2 pairs
countPairs(['red','red','yello','blue','green']) // 1 pairs

numify([2,3,1,2,3,4,5,4])
// angka genap = 2,2,4,4
// angka ganjil = 3,1,3,5

// max angka genap = 4
// max angka ganjil = 5

// avg. angka genap = 3
// sum angka ganjil = 12

















