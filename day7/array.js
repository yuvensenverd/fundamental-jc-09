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



// var arr = ['Anggur','Jeruk','Leci']
// delete arr[0]

// console.log(arr)




//     *
//    ***
//   *****
//  *******
// *********

// *
// **
// ***
// ****
// *****

var bintang = '*\n**\n***\n****\n*****'
// console.log(bintang)

var output = '*\n*\n*\n*\n*\n'

for(var i =0 ; i<6 ; i++){
    for(var j = 0;j <= i ;j++){
        output += '*'
    }

    output += '\n'
}

output = '*\n**'

var arrMobil = ['Avanza', 'Xenia','Ayla']
var arr = ['Jeruk','Apel','Anggur','Kiwi']

function PrintDataArray(param1){
    var printArray = ''
    for(var k= 0 ; k<param1.length ;k++){
        printArray += param1[k] + ' '
    }
    console.log(printArray)
}

PrintDataArray(arrMobil)
PrintDataArray(arr)


function Repeat(arr){
    var a = 1;
    var b = 0;
    var c = 0;
    var d = 0;
    var e = 0;
    for(var i = 0 ; i< arr.length ; i++){
        if(arr[i] == 'a'){
            a++
            if(a == 2){
                return 'a'
            }
        }else if(arr[i] =='b'){
            b++
            if(b == 2){
                return 'b'
            }
        }else if(arr[i] == 'c'){
            c++
            if(c == 2){
                return 'c'
            }
        }else if(arr[i] =='d'){
            d++
            if(d == 2){
                return 'd'
            }
        }else if(arr[i] == 'e'){
            e++
            if(e == 2){
                return 'e'
            }
        }
    }

}

function Repeat2 (a){
    for(var satu = 0; satu < a.length; satu ++){
        for(var dua = satu + 1 ; dua < a.length ; dua++){
            if(a[satu] == a[dua]){
                return a[satu]
            }
        }
    }
}

console.log(Repeat(['a','b','c','d','e','e'])) // b
Repeat(['b','a','d','a','d']) // a













