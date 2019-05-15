
// function HitungAlpha(string){
//     var hurufAlpha = 'abcdefghijklmnopqrstuvwxyz'.split('')
    
//     // IndexOf
//     // var huruf = string.split('')
//     // var hasil = 0
//     // for(var i = 0 ;i < huruf.length ; i++){
//     //     hasil +=  hurufAlpha.indexOf(huruf[i]) + 1
//     // }
//     // return hasil

//     // NestedLoop
//     var huruf = string.split('')
//     var hasil = 0
//     for(var i = 0 ;i < huruf.length ; i++){
//         for(var j = 0 ; j < hurufAlpha.length ; j ++){
//             if(huruf[i] == hurufAlpha[j]){
//                 hasil += j+1
//             }
//         }
//     }
//     return hasil
// }

// console.log(HitungAlpha('bba') + HitungAlpha('baa') * 2)




// const a = 5
// a = 10


// console.log(a)





// TEMPLATE STRING


// var nama = 'fikri'
// console.log(nama.endsWith('i'))\\

// var abc = ['makan','minum']
// console.log([...abc , 'Belajar'])

// var obj = {
//     nama : 'Manusia',
//     usia : '90'
// }

// console.log({...obj , nama : 'hewan'})

// let angka = [1,2,3]; function jumlah(x,y,z){
//     console.log(x+y+z);
// }
// jumlah(angka);
// // 1,2,3undefinedundefined
// jumlah(angka[0],angka[1],angka[2]);
// // 6
// jumlah(...angka);



// function hello(a){
//     console.log(`nama saya ${a}`)
// }

// let hello = (a) => {
//     console.log(`nama saya ${a}`)
// }


// let x = (func,func2) => {
//     console.log('Ini Function X')
//     func(func2)
// }

// let y = (func) => {
//     console.log('ini Function Y')
//     func()
// }

// let a = () => {
//     console.log('Ini Function A')
// }

// x(y,a)

// var a = function(x,y) {
//     return x + y;
// }

// let hitung = (no1, no2, op) => {
//     return op(no1, no2);
// };


// console.log(hitung(2, 3,a ));

// var func = function(val){
//     return val.nama.includes('i')
// }
// var angka = [
//     {nama : 'fikri'},
//     {nama : 'seto'},
//     {nama : 'andi'},
// ]
// var hasilFilter = angka.filter(func)

// console.log(hasilFilter)



// var angka = [4,5,1,2,3]

// var hasilMap = angka.map(function(val){
//     return val * 2
// })

// console.log(hasilMap)

// var nama = 'fikri'

// var manusia = {
//     nama : 'seto',
//     desc : function(){
//         return 'nama saya adalah ' + this.nama
//     },
//     lengkap(){
//         return 'nama lengkap adalah ' + this.nama +' susilo'
//     }
// }
// console.log(manusia.lengkap())



let nama = new Set();
nama.add('Adi').add('Budi').add('Adi');
console.log(nama);
console.log(nama.size);