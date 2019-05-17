// Print Angka Ganjil dan Genap
// Rata rata angka genap
// Jumlah ganjil (sum)
// Sorting dari tinggi ke rendah tanpa .sort()

var ganjil = []
var genap = []
do{
    var input = prompt('masukan Angka')
    if(Number.isInteger( parseInt(input))){
        if(input % 2 ==0){
            genap.push(input)
        }else{
            ganjil.push(input)
        }
    }
}while(Number.isInteger( parseInt(input)))

function PrintData(arr){
    var hasil = ''
    for(var i = 0 ; i < arr.length ; i++){
        hasil += arr[i] + ','
    }
    return hasil
}
var printGanjil = PrintData(ganjil)
var printGenap = PrintData(genap)

document.getElementById('hasil').innerHTML = 'Ganjil = ' + printGanjil + '<br>Genap = ' + printGenap 
