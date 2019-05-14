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








function IndexKeberapa(arr,str){

}

IndexKeberapa(['b','z','u'] , 'z') // 1
IndexKeberapa(['c','a','b'] , 'z') // huruf tidak tersedia
IndexKeberapa(['a','g','r'] , 'g') // 1
IndexKeberapa(['a','r','t'] , 't') // 2













