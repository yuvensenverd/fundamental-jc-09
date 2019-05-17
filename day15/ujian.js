
function BerapaTahun(pAwal,perc,pendatang,target){
    var penduduk = pAwal
    var tahun = 0
    do{
        penduduk += pendatang + (penduduk*(perc/100))
        tahun ++
    }while(penduduk<target)
    return tahun + ' Tahun'
}   

console.log(BerapaTahun(1000,5,50,1200))
console.log(BerapaTahun(1500000,2.5,10000,2000000))

