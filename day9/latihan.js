// function Max(a,b,c){
//     return a[1] -b *c
// }

// var d = [5,3,4,5]

// console.log(Max(d,5,2) + Max(d,4,2) + 10) //

// -7 + -5 + 10 = -2


// ============ VARIABEL =================

// var bebas = 10
// bebas -= 20
// bebas = 'Fikri'


// console.log(bebas) // 200









// =============== PENGKONDISIAN ============



// if(condition){action}
// comparison =>  == , > , < , !=


// var a = 3
// if(a == 2){
//     console.log('Masuk')
// }




//  ================ PENGULANGAN ============

// do{action}while(condition)
// while(condition){action}
// for(varAwal ; condition ; increment){action}

// var i = 0
// var kali = 0
// do{
//     var j = 0
//     do{
//         var k = 0
//         do{
//             console.log(k + 'Nested Nested ke - ' + kali) 
//             kali ++
//             k++
//         }while(k<10)
//         console.log(j)
//         j++
//     }while(j < 10)  
//     console.log('============= BATAS =============')  
//     i ++
// }while(i < 100)



// =================== FUNCTION =================

// function nama(parameters/arguments){action}

// function Berapa(a,b){
//     var hasil = 0
//     for(var i =0 ; i < a.length ; i ++){
//         hasil += a[i] *b
//     }
//     return hasil
// }


// var hasil1 = Berapa([6,4,5,1,2] , 2)
// var hasil2 = Berapa([6,4,5,1,2] , 1)
// var total = hasil1 * hasil2 
// console.log(total)

function Tanggal(a){
    var arrTanggal = a.split('')
    var hari = arrTanggal[0] + arrTanggal[1]
    var bulan = arrTanggal[2] + arrTanggal[3]
    var tahun = arrTanggal[4] + arrTanggal[5] + arrTanggal[6] + arrTanggal[7]
    return hari + '-' + bulan + '-' + tahun
}

console.log(Tanggal('22052019')) // 22-Mei-2019
Tanggal('01012000') // 01-Jan-2000













