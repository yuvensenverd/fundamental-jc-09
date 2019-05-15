function Tambah(a,b){
    var huruf = 'a b c d e f g h i j k l m n o p q r s t u v w x y z'.split(' ')
    var cari = a.split('') // ['a' , 'b']
    var index =[] // [0,1]
    for(var i = 0 ; i< cari.length ; i++){
        var hurufCari = cari[i]
        var indexHurufCari = huruf.indexOf(hurufCari)
        index.push(indexHurufCari)
    }
    var output = ''
    for(var j = 0 ; j < index.length ; j ++){
        var indexHuruf = index[j] + b
        if(indexHuruf > 25){
            indexHuruf = indexHuruf % 26
        }
        output += huruf[indexHuruf]
    }
    return output
}


console.log(Tambah('zxy' , 1000)) // bza






// VAR diluar func, bisa diakses didalam func
// VAR didalam func, tidak bisa diakses diluar func
function IndexKeberapa(arr,str){
    var hasil = arr.indexOf(str)
    var hasil = ['b','z','u'].indexOf('p')
    if(hasil >= 0){
        return hasil
    }else{
        return 'Huruf Tidak Tersedia'
    }
}

console.log(IndexKeberapa(['b','z','u'] , 'z')) // 1
console.log(IndexKeberapa(['c','a','b'] , 'z')) // huruf tidak tersedia
console.log(IndexKeberapa(['a','g','r'] , 'g')) // 1
console.log(IndexKeberapa(['a','r','t'] , 'a')) // 2













