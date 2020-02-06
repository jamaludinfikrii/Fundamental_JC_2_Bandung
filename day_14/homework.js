// filterData(['fikri','fendi','budi','andi'] , 'f')  // ['fikri','fendi']
// filterData(['fikri','fendi','budi','andi'] , 'i')  // ['fikri','fendi','budi','andi']

// countPairs(['red','red','green','blue','green']) // 2 pairs
// countPairs(['red','red','red','red','green']) // 2 pairs
// countPairs(['red','red','yello','blue','green']) // 1 pairs

// numify([2,3,1,2,3,4,5,4])
// angka genap = 2,2,4,4
// angka ganjil = 3,1,3,5

// max angka genap = 4
// max angka ganjil = 5

// avg. angka genap = 3
// sum angka ganjil = 12



const filterData = (data=[], str ='') => {
    
    var dataFiltered = []

    for(var i = 0 ; i < data.length ; i ++){
        if(data[i].includes(str) == true){
            dataFiltered.push(data[i])
        }
    }

    return dataFiltered

    // if( data[0].includes(str) == true ){
    //     dataFiltered.push(data[0])
    // }

    // if( data[1].includes(str) == true ){
    //     dataFiltered.push(data[1])
    // }

    // if( data[2].includes(str) == true ){
    //     dataFiltered.push(data[2])
    // }
    

}


var hasil = filterData(['fikri','fendi','budi','andi'] , 'f')




const countPairs = (colors=[]) => {
    var item = [] // ['red','green','blue']
    var countItem = [] // [2,2,4]

    for(var i = 0 ; i< colors.length ; i++){
        if(item.includes(colors[i])){
            var indexItem = item.indexOf(colors[i])
            countItem[indexItem] ++
        }else{
            item.push(colors[i])
            countItem.push(1)
        }
    }

    let pairs= 0 // 1 // 2 // 4
    for(var i = 0 ; i < countItem.length ; i ++){
        var numOfPairs = Math.floor(countItem[i] / 2)
        pairs += numOfPairs 
    }

    'Number of Pairs = ' + pairs

    console.log(item)
    console.log(countItem)
}

// console.log(countPairs(['red','red','green','blue','green'])) // 2 pairs


const numify = (numbers = []) => {
    let ganjil = []
    let genap = []
    let sumGanjil = 0 // 2
    let sumGenap = 0 // 3 // 4
    
    for(var i = 0 ; i< numbers.length ; i++){
        if(numbers[i] % 2 == 0){
            genap.push(numbers[i])
            sumGenap += numbers[i]
        }else{
            ganjil.push(numbers[i])
            sumGanjil += numbers[i]
        }
    }

    return `
    Angka Genap = ${genap}
    Angka Ganjil = ${ganjil}
    
    Max Angka Genap = ${Math.max(...genap)}
    Max Angka Ganjil = ${Math.max(...ganjil)}

    Avg. Angka Genap = ${sumGenap / genap.length}
    Sum Angka Ganjil = ${sumGanjil}
    `

}


// console.log( numify([2,3,1,2,3,4,5,4]) )    


// angka genap = 2,2,4,4
// angka ganjil = 3,1,3,5

// max angka genap = 4
// max angka ganjil = 5

// avg. angka genap = 3
// sum angka ganjil = 12




var n = 1000
var d = 50
var p = 5/100
var t = 1200


var penduduk = n // 1205
var tahun = 0 // 1 // 2

while(penduduk <= t){
    var pertumbuhan = d + (p*penduduk) // 105
    console.log(pertumbuhan)
    penduduk += pertumbuhan // 
    console.log(penduduk)
    tahun ++
    console.log(tahun)
}

console.log(tahun)


const getMiddle = (str) => {
    return str.length %2 == 0? str.substr(str.length/2-1,2)  : str[Math.floor(str.length/2)]
    
}

console.log(getMiddle('fikri'))


// var str = 'fikrii'
// str.substr(2,2)
// str[2]
// str.charAt(2)

