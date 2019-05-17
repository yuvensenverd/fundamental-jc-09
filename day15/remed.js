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
            genap.push(parseInt(input))
        }else{
            ganjil.push(parseInt(input))
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

var totalGenap = 0
for(var i = 0 ; i < genap.length ; i ++){
    totalGenap += parseInt(genap[i])
}

var rataRataGenap = totalGenap/genap.length

var totalGanjil = 0
for(var i = 0 ; i < ganjil.length ; i ++){
    totalGanjil += parseInt(ganjil[i])
}

var ArrAll = [...ganjil , ...genap]
for(var i = ArrAll.length ; i > 0 ; i--){
    for(var j = 0 ; j < i ; j ++){
        if(ArrAll[j] < ArrAll[j+1]){
            var temp = ArrAll[j]
            ArrAll[j] = ArrAll[j+1]
            ArrAll[j+1] = temp
        }
    }
}

var HasilSort = PrintData(ArrAll)
document.getElementById('hasil').innerHTML = 'Ganjil = ' + printGanjil 
                                           + '<br>Genap = ' + printGenap 
                                           +  '<br>Rata-Rata Genap = ' + rataRataGenap 
                                           + '<br>Jumlah Ganjil = ' + totalGanjil
                                           + '<br> Sort Tinggi Ke Rendah = ' + HasilSort
