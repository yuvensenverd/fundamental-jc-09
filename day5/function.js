
// function nama (){
//    return 'Halo Dunia';
// }

// console.log(nama()) 



// function penjumlahan (a,b,c){
//     var hasil = a + b + c
//     return 'hasil'
// }


function operator(angka1, angka2,operator){
    var hasil = 0
    if(operator == 'jumlah'){
        hasil = angka1 + angka2
    }else if(operator == 'kurang'){
        hasil = angka1 - angka2
    }else if(operator == 'bagi'){
        hasil = angka1 / angka2
    }else if(operator == 'kali'){
        hasil = angka1 * angka2
    }
    return 'hasilnya adalah ' + hasil
}


function hitungParkir (totalJam){ 
    var biaya = 0
    if(totalJam > 2){
        biaya = (2 * 3000) + (totalJam-2) * 1000
    }else{
        biaya = totalJam * 3000
    }
    return 'Anda Parkir Selama ' 
    + totalJam 
    +' jam, Biaya Parkir Adalah Rp. '+ biaya
}


// func itung gaji
// func terima tiga parameter
// 1 jam masuk kerja (int) (1-24)
// 2 jam keluar kerja (int) (1-24)
// 3 jabatan (string)

// kalau jabatannya ceo gajinya 100/perjam
// kalau jabatannya cto gajinya 80/perjam
// kalau jabatannya ob gajinya  50/perjam
// kalau parameternya salah return parameter salah

// jabatan anda .... 
// anda kerja selama ... jam total gaji adalah ...














// console.log(hitungParkir(9))
// console.log(hitungParkir(12))











// 2 jam pertama 3000/jam
// jam selanjutnya 1000/jam



// jumlah
// kali
// bagi
// kurang





// console.log(penjumlahan(4,5,9))
