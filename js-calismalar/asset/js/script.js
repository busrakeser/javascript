// 1
// function mesaj(){
//     alert("Javascript Dersleri");
// }





// 2
// Yazdırma işlemleri

// p nesnesinin içerisisne atama işlemi gerçekleştirdik.
// document.getElementById("metin").innerHTML="Javascript Dersleri";


// write ile dökmana direkt yazı yazdırdık
// document.write("Javascript");


// uyarı mesajı gibi
// alert("js");


// value niteliği alan nesneler için kullanılır
// document.getElementById("text").value ="Gönder";


// console.log("merhaba dünya");




// 3
// Değişkenler
// var AdSoyad="Büşra Keser";
// alert(AdSoyad + " " + typeof(AdSoyad));
//
// var yas=55;
// alert(yas + " " + typeof(yas));
//
// var x;
// alert(typeof(x));
//
// var boolen=false;
// alert(typeof(boolen));
//
// var dizi=[10,20,30];
// alert(typeof (dizi));




// 4
// Matematiksel işlemler
// var a=5;
// var b=7;
// var islem;
// // var a=5 , b=7, islem;
// // +,-,*,/,%
// islem=a+b;
// document.write(islem);




// 5
// önden ve sonran artırma
// +,-,*,/
// var a=40, b=7, islem;
// a= a + 20; a += 20;
// a= a - 20; a -= 20;
// a= a + b; a +=b;
// a++ a--
// --b b--
// b= ++a; a yı artır b ye ata
// b= a++ a yı b ye ata a yı artır
// document.write(islem);




// 6
// mantıksal operatörler
// <,>,==, <=, >= ,!=
// var a=40, b=7, islem;
// islem = a==b;
// document.write(islem);




// 7
// Kulanıcıdan veri alma
// function hesapla()
// {
//     var a = document.getElementById("sayi1").value;
//     var b = document.getElementById("sayi2").value;
//     a = parseInt(a);
//     b = parseInt(b);
//     // parseInt(a) veya parseFloat(a)
//     var islem = a + b;
//     alert(islem);
// }





// 8
// Form olayları
// function onClick(){
//     alert("Butona tıklandı.");
// }
// function dblClick(){
//     alert("Butona iki kere tıklandı");
// }
// function focusolay(){
//     alert("focus özelliği çalıştı");
// }
// function blurolay(){
//     alert("odaklanıılmış nesneden çıkıldı");
// }
// function mouseolay(){
//     alert("ilgil elementin kapladığı alan üzerine fare ile girildiği zaman tetiklenir tüm taglerde kullanılır.");
// }
// function mouseOutOlay(){
//     alert("elementten ayrılınca ttetiklenir");
// }





// 9
// Fonksiyonlar
// function dikdortgenCevre()
// {
//     var a = 10;
//     var b = 15;
//     var cevre;
//     cevre = 2 * (a + b);
//     document.getElementById("cevre").innerHTML=cevre;
// }
// fonksiyonlar iki şekilde çağırılır
// 1
// dikdortgenCevre();
// 2
// elementlerin içerisindeki olay tetikleyicileri kullanılabilir onclickk gibi

// fonsiyonların birbirini çağırması
// function dikdortgenCevre()
// {
//     var a = 10;
//     var b = 15;
//     var cevre;
//     cevre = 2 * (a + b);
//     return cevre;
// }
// function yazdir(){
//     document.getElementById("cevre").innerHTML=dikdortgenCevre();
//
// }
// yazdir();


// parametreli fonksiyonlar
// function dikdortgenCevre(uzunkenar, kisakenar)
// {
//     cevre = 2 * (uzunkenar + kisakenar);
//     return cevre;
// }
//
// dikdortgen = dikdortgenCevre(10, 8);
// document.getElementById("cevre").innerHTML = dikdortgen;


// girilen satıların karesini ve küpünü alan fonk
// function kare(sayi)
// {
//     return sayi * sayi;
// }
//
// function kup(sayi)
// {
//     return sayi * sayi * sayi;
// }
//
// toplam = kare(4) + kup(2);
// document.getElementById("cevre").innerHTML = toplam;





// 10
// Anonim Fonksiyonlar
// ismi olmayan fonksiyonlar
// normal fonk
// function topla(x,y){
//     return x+y;
// }
// var a =topla(10,20);
// alert(a);
// // anonim fonk
// var toplama=function (x,y){
//     return x+y;
// }
// alert(toplama);
// alert(toplama(10,20));




// 11
// global ve local değişkenler
// dairenin alanı ve çevresini hesaplama fonk

// var pi=3.14;global değişken tüm fonk içerisinden erişim sağlanabilir.
// var pi = 3.14;
//
// function alanHesapla(r)
// {
//     // pi=3.14; başında var sözcüğü kullanılmadan tanımlanan değişkenler de global değişkenlerdir.
//     // var pi=3.14;local değişken sadece alan hesapla fonk içerisinden erişim sağlanabilir.
//     var alan = pi * r * r;
//     return alan;
// }
//
// function cevreHessapla(r)
// {
//     var cevre = 2 * pi * r;
//     return cevre;
// }
// function yazdir(){
//     document.getElementById("goster").innerHTML="Alan: " + alanHesapla(3) + " " + "Çevre: " + cevreHessapla(3);
// }
// yazdir();
//




// 12
// bir fonksiyonu otomatik olarak çağırıp çalıştırma
// (function yazdir(){
//alert("Bu fonksiyon kendi kendine çalışan bir fonksyondur.);
//
// })();



