// var bebas = ['string' , 10 , true]

// var bulan = ['Jan','Feb','Mar','Apr', 'May']

// var now = new Date().getMonth()
// // console.log(bulan[now])

// // ada string alamat

// var a = 'Banten, tangerang selatan, serpong'

// var b = a.split(',')

// // console.log(b[b.length - 1])


// // bikin func
// // terima 2 parameter
// // 
// function Sekarang(day,month){
//     var bulan = ['jan','feb','mar','apr','may','jun','jul','agu','sep','okt','nov','des']
//     var hari = ['minggu' , 'senin','selasa','rabu','kamis','jumat','sabtu']
//     return hari[day] +', ' + bulan[month-1]
// }

// function jumlahA(str){
//     var arrHasilSplit = str.split('')
//     var jumlahA = 0
//     for(var i = 0 ; i < arrHasilSplit.length; i++){
//         if(arrHasilSplit[i] == 'a'){
//             jumlahA += 1
//         }
//     }
//     return jumlahA
// }

// // console.log(jumlahA('halo dunia world america')) 



// // var arr = ['a','d','e','k']
// // console.log(arr.join(''))

// // var a ='hallo'
// // a.split()

// // 'kamu'.split


// var b = ['arr']
// b.reverse
// function balik(str){
//     // split untuk mengubah string menjadi array
//     var arr = str.split('')

//     // reverse untuk membalikan index si array
//     var reversed = arr.reverse()

//     // join untuk merubah array menjadi string
//     var hasil = reversed.join('')
//     return hasil
// }

// // console.log(balik('')) 
// console.log(balik('Hallo dunia')) // ollah
// // balik('adek')  // keda





// // console.log(Sekarang(4,5))  // kamis , mei
// // now(1,3) // senin , maret
// // now(0,1) // minggu , januari





// // console.log(bebas[0]);

// var prod = ['anggur' ,'jeruk']
// prod[0] = 'Kiwi'



var arr = ['Anggur','Jeruk','Leci']
delete arr[0]

console.log(arr)

