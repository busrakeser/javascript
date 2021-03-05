var tarih=new Date();
console.log(tarih);

// var tarih=new Date("2020/5/1");
// console.log(tarih);

yil=tarih.getFullYear();
console.log(yil);

ay=tarih.getMonth();//0-11 şeklinde ay bilgisi verir;
console.log(ay);

aygun=tarih.getDate();//1-31 arasında değerler alır
console.log(aygun);

haftagun=tarih.getDay();//0-6 arası değer alır 0. pazar
console.log(haftagun);

saat=tarih.getHours();//saat bilgisi
console.log(saat);

dakika=tarih.getMinutes();//dakika bilgisi
console.log(dakika);

saniye=tarih.getSeconds();//saniye bilgisi
console.log(saniye);



// İki tarih arasındaki gün farkı hesaplama

var bugun=new Date();
yıl=bugun.getFullYear()
ay=bugun.getMonth()+1;
gun=bugun.getDate();
// console.log(yıl+" "+ay+" "+gun);
if(gun<10){
    gun="0"+gun;
}
if (ay<10){
    ay="0"+ay;
}

// console.log(yıl+" "+ay+" "+gun);

buguntarih=yil+"-"+ay+"-"+gun;
// console.log(buguntarih);

document.getElementById("giris").value=buguntarih;
function hesaplama(){
    var giris=document.getElementById("giris").value;
    var cikis=document.getElementById("cikis").value;
    // alert(giris);

    giris=new Date(giris);
    cikis=new Date(cikis);
    fark=cikis-giris;//milisanye cinsinden değer verir
    gunhesapla=Math.round(fark/(1000*60*60*24));//milisaniiyeden saniyeye 1000,saniyeden dakikaya 60, dakikadan saate 60, saatten güne 24
    console.log(gunhesapla);



}
