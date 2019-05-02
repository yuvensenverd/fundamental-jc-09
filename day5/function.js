
// function nama (){
//    return 'Halo Dunia';
// }

// console.log(nama()) 



// function penjumlahan (a,b,c){
//     var hasil = a + b + c
//     return 'hasil'
// }


// function operator(angka1, angka2,operator){
//     var hasil = 0
//     if(operator == 'jumlah'){
//         hasil = angka1 + angka2
//     }else if(operator == 'kurang'){
//         hasil = angka1 - angka2
//     }else if(operator == 'bagi'){
//         hasil = angka1 / angka2
//     }else if(operator == 'kali'){
//         hasil = angka1 * angka2
//     }
//     return 'hasilnya adalah ' + hasil
// }


// function hitungParkir (totalJam){ 
//     var biaya = 0
//     if(totalJam > 2){
//         biaya = (2 * 3000) + (totalJam-2) * 1000
//     }else{
//         biaya = totalJam * 3000
//     }
//     return 'Anda Parkir Selama ' 
//     + totalJam 
//     +' jam, Biaya Parkir Adalah Rp. '+ biaya
// }



function HitungGaji(masuk, keluar, jabatan){
    var totalJam = keluar - masuk
    if(jabatan == 'ceo'){
        var gaji = 100
    }else if(jabatan == 'cto'){
        var gaji = 80
    }else if(jabatan == 'ob'){
        var gaji = 50
    }else{
        console.log('Parameter Jabatan Tidak ada')
    }
    var totalGaji = totalJam*gaji
    var hasil =  'Jabatan anda ' + jabatan 
    + ' Anda Kerja Selama ' 
    + totalJam + ' Jam, ' 
    + 'Gaji anda Adalah Rp.'
    + totalGaji
     console.log(hasil)
}

// var a = HitungGaji(6,10,'ob')
// console.log(a);





// FUNC 
// HITUNG LUAS SEGITIGA
// 1. ALAS
// 2. TINGGI
// RETURN SEGITIGA MEMILIKI LUAS .... M2


function LuasSegitiga(tinggi,alas){
    var hasil = 0.5 * alas * tinggi
    return 'segitiga punya alas ' + alas 
            + ' dan tinggi ' 
            + tinggi 
            + ' , maka segitiga punya luas ' 
            + hasil + ' m2'
}

// FUNC
// TERIMA SATU PARAMETER (INT)
// 365
// %
// Return 391 sama dengan 1 tahun, 0 bulan, 5 hari
// 1 tahun 360
// 1 bulan 30

console.log(LuasSegitiga(10,5));
// segitiga punya alas ... dan tinggi ... , maka segitiga punya luas ... m2



33 % 30

function hitungTahun(hari){ 
    var tahun = parseInt(hari/360) 
    var sisaTahun = hari % 360   
    var bulan = Math.floor(sisaTahun / 30) 
    var sisBulan = sisaTahun % 30
    return hari + ' = ' + tahun + ' tahun, ' + bulan + ' bulan ' 
           + sisBulan + ' hari' 
}




// 365 = 1 tahun, 0 bulan , 5 hari
// 80 =  0 tahun, 2 bulan , 20 hari
// 370 = 1 tahun , 0 bulan , 10 hari











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





// func 
// deteksi ganjil-genap
// ganjil return angka ... adalah ganjil
// genap return angka ... adalah genap


function ganjilGenap(a){
    var hasil = a
    if(a % 2 == 0){
        hasil += ' Adalah Bilangan Genap'
    }else{
        hasil += ' Adalah Bilangan Ganjil'
    }
    return hasil
}

console.log(ganjilGenap(802392312))



function Pangkat(x,y){
    if (y == 1) {
        return x;
    }
    else {
        return x=x*Pangkat(x,y-1); 
    }
}



function pangkat (angka,dipangkatinberapa){ 7,3
    var hasil = 0
    var a = 1 // 3
    if(dipangkatinberapa > 2){
        while(a < dipangkatinberapa){
            hasil += angka*angka // 49
            a ++
        }
    }else{
        return angka*angka
    }
    return hasil
}







//27



console.log(pangkat(3,3))


// 6005



function kali(x) {
    if (x < 2) {return 1;}
    else {return (x * tiga());}
}
function tiga(){
    return 3;
}
    console.log(kali(2))












