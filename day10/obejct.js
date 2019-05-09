// ============= OBJECT LITERAL =================


var orang = {
    namaDpn:'Andi',
    usia:50,
    pekerjaan:'Politisi',
    namaFull: function() {
        return this. namaDpn + " " + " Karno";}
};



// console.log(orang.namaFull())


var Andi = new Object();
Andi.namaDpn = 'Andi';
Andi.namaBlkg = 'Susilo';
Andi.usia = 50;
Andi.pekerjaan = 'PNS';

console.log(Andi)


// ============= BUILDING OBJECT WITH FUNCTION =================
var Orang = function(a,b,c){
    this.nama = a;
    this.usia = b;
    this.pekerjaan = c;
}

var orang1 = new Orang('Fikri',90,'Karyawan')
var orang2 = new Orang('Seto',40,'Politisi')
var orang3 = new Orang('Andi',50,'Direktur')

console.log(orang3)



// ============= BUILDING OBJECT CLASS =================


class Mobil {
    constructor(a,b,c,d){
        this.nama = a;
        this.warna = b;
        this.merk = c;
        this.tahun =d
    }
}


var mobil1 = new Mobil('CRV' , 'Hitam' , 'Honda' , 2018)
var mobil2 = new Mobil('Vios' , 'Hitam' , 'Honda' , 2013)

var arr = [mobil1,mobil2]
var print = ''
for(var i = 0 ; i < arr.length ; i++){
    print += i+1 + '. ' + arr[i].nama + ' Warna ' + arr[i].warna + ' Merk ' + arr[i].merk + ' dibuat pada tahun ' + arr[i].tahun + '\n'
}


console.log(print)

// 1. CRV Warna Hitam Merk Honda dibuat pada tahun 2018
// 2. Vios Warna Hitam Merk Honda dibuat pada tahun 2013
// Array Of Obj
