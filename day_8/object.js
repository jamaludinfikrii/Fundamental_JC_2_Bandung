// 
// OBJECT LITERAL


var orang = {
    namaDpn : "Jamaludin",
    namaBelakang : "Fikri",
    printFullName : function (){
        return this.namaDpn + ' ' + this.namaBelakang
    }
}


// console.log(orang.printFullName() + ' Fikri')
// console.log(orang)


// OBJECT NEW KEYWORD

var orang_1 = new Object()
orang_1.namaDpn = 'Jamaludin'
orang_1.namaBelakang = 'Fikri'
orang_1.printFullName = function(){
    return orang_1.namaDpn + " "  + orang_1.namaBelakang 
}



// CLASS

class Manusia{
    constructor(a, b,c){
        this.nama = a
        this.pekerjaan = b
        this.gender = c
    }
}


var manusia_1 = new Manusia('Fikri','Karyawan','Lelaki')
var manusia_2 = new Manusia('Muslim','Karyawan','Lelaki')
var manusia_3 = new Manusia('Budi','Karyawan','Lelaki')

// ARRAY OF OBJECT
var data = [manusia_1,manusia_2,manusia_3]

// console.log(data)

manusia_1
manusia_1["nama"]










// DELETE PROP OF OBJECT && UPDATE VALUE

var human = {
    firstName : "John", 
    age: 50, 
    job : "Hunter"
};

human.nationality = "USA";
human.firstName = 'DOE';
delete human.age;

console.log(human)


// OBJECT WITH ARRAY VALUES

var John = {
    name : ["John", "Wick"], 
    age: 50, 
    job : {fulltime : "Karyawan" , partime  : "Boss"}
};
    
console.log(John)
console.log(John.name[0]) 
console.log(John.name[1])
console.log(John.job.partime)