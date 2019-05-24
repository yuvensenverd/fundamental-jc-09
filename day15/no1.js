
// function menerima string, cari middle


function getMiddle(str){ // fikri
    var arr = str.split('')
    if(arr.length % 2 ==0){
        return arr[arr.length/2-1] + arr[arr.length / 2]
    }else{
        return arr[Math.floor(arr.length/2)]
    }
}
console.log(getMiddle('fikia'))


function accum(str){
    var arr = str.split('')
    var output = ''
    for(var i = 0; i < arr.length ; i++){
        for(var j = 0 ; j <= i ; j ++){
            if(j ==0){
                output += arr[i].toUpperCase()
            }
            else{
                output += arr[i]
            }
        }
        if(i < arr.length -1){
            output += '-'
        }
    }
    return output
}
console.log(accum('abc'))



// *\n**\n***
// A-Aa-Aaa


// str genep = 2 huruf tengah
// str ganjil = 1 huruf tengah