
function HitungAlpha(string){
    var hurufAlpha = 'abcdefghijklmnopqrstuvwxyz'.split('')
    
    // IndexOf
    // var huruf = string.split('')
    // var hasil = 0
    // for(var i = 0 ;i < huruf.length ; i++){
    //     hasil +=  hurufAlpha.indexOf(huruf[i]) + 1
    // }
    // return hasil

    // NestedLoop
    var huruf = string.split('')
    var hasil = 0
    for(var i = 0 ;i < huruf.length ; i++){
        for(var j = 0 ; j < hurufAlpha.length ; j ++){
            if(huruf[i] == hurufAlpha[j]){
                hasil += j+1
            }
        }
    }
    return hasil
}

console.log(HitungAlpha('bba') + HitungAlpha('baa') * 2)
