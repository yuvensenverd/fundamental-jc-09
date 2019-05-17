const bubbleSort = (array) => {
    for (let i = array.length; i > 0; i--) {
        for (let j = 0; j < i; j++) {
            if (array[j] > array[j + 1]) {
                const temp = array[j];
                array[j] = array[j + 1];
                array[j + 1] = temp;
            }
        }
    }
    return array;
}

// bubbleSort([3,2,1,2])





modeObj ={
    4 : 3,
    1 : 2,
    2 : 2,
    3 : 3,
}
modes = [4]

// getMode([4,1,2,3,4,1,2,3,4])
const getMode = (array) => {
    var modeObj = {};
    // create modeObj
    array.forEach(num => {
        if (!modeObj[num]) {
            modeObj[num] = 0;
        } modeObj[num]++;
    });
    // create array of mode/s
    var maxFrequency = 3;
    var modes = [];
    for (let num in modeObj) {
        if (modeObj[num] > maxFrequency) {
            modes = [num];
            maxFrequency = modeObj[num];
        }
        else if (modeObj[num] === maxFrequency) {
            modes.push(num);
        }
    } // if every value appears same amount of times
    if (modes.length === Object.keys(modeObj).length) {
        modes = [];
    } return modes;
}



var obj = {}
obj['nama'] = 'fikri'
console.log(obj)












class manusia {
    constructor(nama, usia, job, gender) {
        this.nama = nama;
        this.umur = usia;
        this.pekerjaan = job;
        this.kelamin = gender;
    }
}

var arrManusia = [
    new manusia('Seto',30,'Karyawan','Pria'),  
    new manusia('Bagus',30,'Karyawan','Pria'),
    new manusia('Andi',30,'Karyawan','Pria')
];



function PrintData (arr){
    var output = ''
    for(var i = 0; i< arr.length ; i++){
        output += `${i+1}. ${arr[i].nama} ${arr[i].kelamin} berumur ${arr[i].umur} pekerjaan ${arr[i].pekerjaan} \n`
    }
    return output
}

// console.log(PrintData(arrManusia))

function SortData (data){
    var newArray = []
    var arrNama = []
    for(var i = 0 ; i < data.length ; i++){
        arrNama.push(data[i].nama)
    }
    arrNama = arrNama.sort()
    var index = []
    for(var i = 0 ; i < arrNama.length ; i++){
        var indexDicari = arrNama.indexOf(data[i].nama)
        index.push(indexDicari)
    }

    for(var i = 0 ; i< data.length ; i++){
        newArray.push(data[index[i]])
    }
    return newArray

}

    // BIKIN ARRAY BARU
    // BIKIN ARRAY NAMA YANG ISINYA NAMA DARI DATA
    // ARRAY NAMA DI SORT
    // KITA CARI NAMA YANG TELAH DI SORT ADA DI INDEX KE BERAPA DARI DATA
    // KITA PUSH ARRAY BARU

var newArr = SortData(arrManusia)
console.log(PrintData(newArr))











// Buat Func Ngeprint Data

//PrintData(arrManusia)
//return string
// 1. Seto Pria berumur 30 pekerjaan Karyawan \n 2.













