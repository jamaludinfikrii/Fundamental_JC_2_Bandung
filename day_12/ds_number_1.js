// [3,2,4,3,2,8,9,2]
const findMedian = (data=[]) => {
    if(data.length % 2 == 0){
        return (data[data.length/2 - 1] + data[data.length/2]) / 2
    }else{
       return data[Math.floor(data.length/2)]
    }
}


const removeOutlier = (data=[]) => {
    let dataSorted = [...data].sort(function(a,b) {return a-b})
    let middle = Math.floor(data.length/2)

    let setengahPertama = dataSorted.slice(0,middle)
    // let setengahKedua = data.length % 2 ==0 ? dataSorted.slice(middle,data.length) :dataSorted.slice(middle+1,data.length) 

    let setengahKedua;
    if(data.length % 2 == 0){
        setengahKedua = dataSorted.slice(middle,data.length)
    }else{
        setengahKedua = dataSorted.slice(middle+1 , data.length)
    }

    let q1 = findMedian(setengahPertama)
    let q3 = findMedian(setengahKedua)

    let iqr = q3 - q1

    let lower = q1 - (1.5 * iqr) // 67,
    let upper = q3 + (1.5 * iqr) // 73

    let dataNotOutlier = []
    let dataOutlier = []
    
    for(var i = 0 ; i< data.length ; i++){
        if(dataSorted[i] < lower || dataSorted[i] > upper){
            dataOutlier.push(dataSorted[i])
        }else{
            dataNotOutlier.push(dataSorted[i])
        }
    }

    console.log('data asli = ' + data)
    console.log('data setelah di sort = ' + dataSorted)
    console.log('setengah data pertama = ' + setengahPertama)
    console.log('setengah data kedua = ' + setengahKedua)
    console.log('Q1 = ' + q1)
    console.log('Q3 = ' + q3)
    console.log('Lower Limit ' + lower)
    console.log('Upper Limit ' + upper)
    console.log('Data Tidak Outlier ' + dataNotOutlier)
    console.log('Data yang Outlier ' + dataOutlier)
}


// removeOutlier([60,63,64,62,69,80,1,60,63,64,60])


// friend(["Ryan", "Kiera", "Mark"]) // ["Kiera"]
// friend(["Fikri","Seto","Putri"]) // ['Fikri','Putri']
// friend(["afgan","tri","muslim"]) // ['afgan']



// findMaxAndMin([1,2,34,12,5,10]) // min = 1 , max = 34 Math.min // Sort



// ganjilGenap([2,3,1,3,4]) // ganjil = 3,1,3 genap = 2,4




// Arr Methods For Loops

// ForEach
// Filter
// Map

var a = [1,3,4,2,3,4,5,1]

// for(var i = 0 ; i < a.length ; i++){
//     console.log(a[i])
// }

a.forEach(function(data){
    console.log(data + 5) // callback
})

a.sort(function(a,b){return a-b}) // function yang parameter nya juga function



const ganjilGenap =(arr=[]) => {
    let arrGanjil = []
    let arrGenap = []

    arr.forEach(function(el){
        if(el % 2 == 0){
            arrGenap.push(el)
        }else{
            arrGanjil.push(el)
        }
    })

    console.log(arrGanjil)
    console.log(arrGenap)

}


ganjilGenap([1,4,3,2])



sumTwoSmallest([3,4,2,4,2,3,4]) // 2 + 2 = 4
sumTwoSmallest([3,2,1]) // 1 + 2 = 3

removeDuplicates('alpha beta beta gamma gamma') // 'alpha beta gamma'
removeDuplicates('mari mari kesini') // 'mari kesini'

theMost('xlpphaaaa') // huruf paling banyak adalah 'a'
theMost('fikriiii') // huruf paling banyak adalah 'i'

findUniq([1,1,1,1,3,1,1]) // 3
findUniq([2,1,2,3,3,4,4]) // 1


















