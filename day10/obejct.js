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


var Orang = function(a,b,c){
    this.nama = a;
    this.usia = b;
    this.pekerjaan = c;
}

var orang1 = new Orang('Fikri',90,'Karyawan')
var orang2 = new Orang('Seto',40,'Politisi')
var orang3 = new Orang('Andi',50,'Direktur')

console.log(orang3)