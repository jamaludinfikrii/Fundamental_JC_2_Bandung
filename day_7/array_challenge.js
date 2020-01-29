/* FUNCTIONS */
const editMurids = function() {
    /* SHOW LISt */
    let text = 'Data Murid \n'
    let pilihanKelas = ''
    let namaKelas
    for(i=0;i< nama.length;i++){
        for (i=0 ; i<kelas.length;i++){
            text += (i+1) + '. ' + nama[i] + ' kelas' + kelas[i] + '\n'
        }
    }
    /* minta input */
    text+= `Silahkan Pilih No Yang Mau Diedit`
    pilihanKelas = prompt(text)
    indexOfKelas = pilihanKelas - 1
    namaKelas = prompt("Mau Masukan ke kelas apa?")

    /* REASSIGN VALUE */
    kelas[indexOfKelas] = namaKelas
}

const hapusMurids = () => {
    let text = 'Data Murid \n'
    let pilihanMurid = ''
    for(i=0;i< nama.length;i++){
        for (i=0 ; i<kelas.length;i++){
            text += (i+1) + '. ' + nama[i] + ' kelas' + kelas[i] + '\n'
        }
    }
    text+= `Silahkan Pilih No Yang Mau Diedit`
    pilihanMurid = prompt(text)

    nama.pop(pilihanMurid - 1)
    kelas.pop(pilihanMurid - 1)
}

function showMurid() {
    var text = ''
    for(i=0;i< nama.length;i++){
        for (i=0 ; i<kelas.length;i++){
            text += (i+1) + '. ' + nama[i] + ' kelas' + kelas[i] + '\n'
        }
    }
    alert(text)
}

function tambahMurids(){
    var data_murid_baru = ''
    do{    
        data_murid_baru = prompt ( 'silahkan inputkan nama murid baru')
        if(data_murid_baru !== 'done'){
            nama.push(data_murid_baru)
            kelas.push('Kelas belum ada')
        }
    }while (data_murid_baru !== 'done')
}



/* Main Pogram */
var nama = ['tri', 'muslim', 'afgan']
var kelas = ['WD', 'DS', 'DM']

var pilihan = ''

do{
    //1
    pilihan = prompt(`Pilihan: 
    1.show data murid
    2.Tambah Murid
    3.Edit Kelas
    4. Hapus Murid`)
    

    var menus = [showMurids,tambahMurids,editMurids,hapusMurids]
    menus[pilihan -1]()
    
    // if(pilihan == 1){
    //     showMurid()
    // }else if(pilihan == 2){
    //     tambahMurids()
    // }else if(pilihan == 3){
    //     editMurids()
    // } else if(pilihan == 4){
    //     hapusMurids()
    // }

var start = prompt('mulai lagi (y/n ?)')
}while(start == 'y')




// var nama = ['tri', 'muslim', 'afgan']
// var kelas = ['WD', 'DS', 'DM']


// var text = ''

// for(var i =0 ; i < nama.length ; i ++){
//     text += `${i+1}. ${nama[i]} kelas ${kelas[i]}`
// }



// if(){
//     if(){
//         for(var i = 0 ; i < nama.length){
//             do{
//                 if(){

//                 }

//             }while()

//         }

//     }
// }




function hello(){
    console.log('Hello World')
}

function Penjumlahan(){
    console.log('Penjumlahan')
}


function Pengurangan(){
    console.log('Pengurangan')
}

var arr_func = [hello,Pengurangan,Penjumlahan]

arr_func[1]()






