e =65125;
// alert(e.toString(16));//hexadeximal e çevirdik
var h =2.5698531;
// alert(h.toFixed(2));//virgülden sonra kaç basamak gösstermek istediğiizi yazıyoruz

// girilen ifadenin sayı olup olmadığını kontrol etme
var a= 15;
var b=14.5;
var c="havascript";
// alert(Number.isFinite(a));//sayı mı? true false değer döndürür.
// alert(Number.isInteger(a));//integer türünde mi?
// alert(a/c); //NAN sonucu not a number demek saısal veriyi stringe bölmeye çalıştık
sonuc1=a/c;
// alert(Number.isNaN(sonuc1));//NAN mı?
if (parseInt(b) == b){//sayının integer olup olmadığını kontrol etme yöntemi
    // alert("sayı integer bir sayı");
}


// DİZİLER
// birden fazla veriyi tek seferde saklamaya yarar.

// Tanımlama
// var kirtasiye= new Array();
// var dizi=[];
// var dizi2=[1,2,5,6];
// var dizi3= new Array(40);
// console.log(dizi2);
// console.log(dizi2[1]);
// console.log(dizi2.length);
// console.log(dizi2[dizi2.length-1]);//son elemana ulaşma;

// DİZİ METODLARI
var kirtasiye=["kitap" , "kalen", "silgi", "defter", "bant", "yapışkan"];
var kirtsiye2=["kağıt", "uhu", "karton"];
console.log(kirtasiye);
kirtasiye.push("tahta silgisi");//dizinin sonuna yeni eleman ekleme
console.log(kirtasiye);
kirtasiye.pop();//dizinin son elemanını siler
console.log(kirtasiye);
// kirtasiye.splice(1,2);//kaçıncı sıradan kaç eleman sileceğimizi belirtiyoruz
console.log(kirtasiye);
kirtasiye.splice(1,2,"tahta kalemi", "tahta silgisi"); //güncelleme yaptık.
console.log(kirtasiye);
// kirtasiye.splice(0,kirtasiye.length);//tüm dizinin içerisindeki elemanları silme işlemi
console.log(kirtasiye);
kirtasiye[1]="tahta";//tek elemanı güncelleme
console.log(kirtasiye);
yenikirtasiye=kirtasiye.slice(3);//3 numaralı indisten itibaren yeni bir dizi oluşturdu
console.log(kirtasiye);
console.log(yenikirtasiye);
birlestirme=yenikirtasiye.concat(kirtsiye2);//iki diziyi birleştiirme
console.log(birlestirme);

// yeni=kirtsiye2 ; dediğimizde yeni bir dizi oluşturmuyor yeni değişkeninin referansını kirtsiye2 yapıyor ve kirtsiye2 ye ne işlem yapılırsa yeni de etkilenir


// Map ve Filter metodları
// map dizi üzerinde işlemler yapar ve yeni bir dizi döndürür filter sıralama yapar.
var dizi=[3,7,6,9,15,23,18,45];
yenidizi=[];
yenidizi=dizi.map(function (eleman){
    // return eleman*3;tüm elemanları3 ile çarpar
    if (eleman<20){
        return eleman*3;//20 den küçük elemanları 3 le çarp diğerlerini aynen yaz
    }
    else {
        return eleman;
    }

});//fonksiyon eleman, index ve array parametrelerini alır sırayla
console.log(yenidizi);

yenidizi=dizi.filter(function (eleman,indeks){
    if (eleman<20){
        return eleman;
    }
});
console.log(yenidizi);


var a=["Kitap", "kaLem", "silgi", "defter", "yapışKAn", "bant"];
yenia=[];
yenia=a.map(function (eleman){
    if(eleman=="defter"){
        return eleman.toUpperCase();
    }
    else {
        return eleman.toLowerCase();
    }
});
console.log(yenia);


// ÖRNEKLER

// öğrencilerin notlarını diziye atmak ve ortalamasını almak
// var notlar=[] , i=0, notbilgisi=0;
// var toplam=0;
// while (parseInt(notbilgisi)==notbilgisi){
//     notbilgisi=parseInt(prompt("Bir not giriniz"));
//     if (parseInt(notbilgisi)==notbilgisi)
//     {
//         notlar[i] = notbilgisi;
//
//     }
//     i++;
// }
// console.log(notlar);
// for (i=0; i<notlar.length; i++){
//     toplam=toplam+notlar[i];
// }
// console.log(toplam);
// var ort=toplam/notlar.length;
// console.log(ort);


// dizileri sıralama
// metinsel sıralama sort metinsel sıralama yapar
// var b=["Kitap", "Kalem", "Silgi", "Defter", "yapışkan", "Bant"];
// console.log(b);
// b.sort();//diziyi a dan z ye alfabetik sıralama yaptı;
// console.log(b);
// b.sort();
// b.reverse();//diziyi z den a ya sıralamak için a dan z ye sıralayıp ters çevirdik;
// console.log(b);

// var c=[5,20,45,6,90];//özel tanımlı bir fonk. sayısal verilerde sıralama yapar
// c.sort(function (a,b){
//     return a-b;
// });
// console.log(c);
// console.log(c.indexOf(6));//elemanının kaçıncı indiste oldupunu buluruz



var b=["Kitap", "Kalem", "Silgi", "Defter", "yapışkan", "Bant"];
text='<select id="malzeme" onChange="goster(this.value)">';
for (i=0;i<b.length;i++){
    text += '<option value="'+i+' ">'+b[i]+'</option>'
}
text += '</select>';
document.write(text);

function goster(deger){
    alert(deger);

}