// 13579
// var output = 0
// for(var x = 1;x < 10; x+=2){
//     output += x
//     // output += '\n'
// }
// console.log(output);

function SegitigaKebalik (jumlahBaris){
    var output = ''
    for(var i = 1 ; i <=jumlahBaris ; i++){
        for(var j = jumlahBaris ; j >= i ; j--){
            output += '*'
        }
        output += '\n'
    }
    console.log(output);
}









SegitigaKebalik(4)
SegitigaKebalik(10)








   




// *****
// ****
// ***
// **
// *



// output = 123 \n 123 \n 123

