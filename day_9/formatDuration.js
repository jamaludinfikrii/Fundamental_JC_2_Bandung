var input = 62 // 1 menit 2 detik

var tahun = Math.floor(input / (365 * 24 * 3600))
// var bulan = input %
var menit = Math.floor(input / 60)
var detik = input % 60

console.log(menit + ' menit , ' + detik + ' detik.')