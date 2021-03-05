// create element
// var yazi=document.createElement("p");
// yazi.innerHTML="Javascript Dersi";
// // document.body.appendChild(yazi);
// document.getElementById("yazi").appendChild(yazi);



// <!--insertBefore ve childNodes-->
// var baslik=document.createElement("h1");
// var yazi=document.createTextNode("Burası Başlık");
// baslik.appendChild(yazi);
// document.body.appendChild(baslik);

// li ekleme
// var yeni=document.createElement("li");
// var yazi=document.createTextNode("Delphi");
// yeni.appendChild(yazi);
// var nereye=document.getElementById("dil");
// nereye.insertBefore(yeni, nereye.childNodes[2]);



// insertBefore ve removeChild
// function tasi(){
//     var tasinacak=document.getElementById("liste2").lastChild;
//     var nereye=document.getElementById("liste1");
//     nereye.insertBefore(tasinacak,nereye.childNodes[0]);
// }
// function sil(){
//     var silinecek=document.getElementById("liste1");
//     silinecek.removeChild(silinecek.lastChild);
// }


// haschild kullanımı öğe var mı yok mu
// function tasi(){
//     var tasinacak=document.getElementById("liste2").lastChild;
//     var nereye=document.getElementById("liste1");
//     nereye.insertBefore(tasinacak,nereye.childNodes[0]);
// }
// function sil(){
//     var silinecek=document.getElementById("liste1");
//     if (silinecek.hasChildNodes()){
//         silinecek.removeChild(silinecek.lastChild);
//
//     }
// }



// replaceChild kullanımı
// function tasi(){
//     var tasinacak=document.getElementById("liste2").lastChild;
//     var nereye=document.getElementById("liste1");
//     nereye.insertBefore(tasinacak,nereye.childNodes[0]);
// }
// function sil(){
//     var silinecek=document.getElementById("liste1");
//     if (silinecek.hasChildNodes()){
//         silinecek.removeChild(silinecek.lastChild);
//
//     }
// }
// function degistir(){
//     yenibilgi=document.createTextNode("C++");
//     sec=document.getElementById("liste1").childNodes[0];
//     sec.replaceChild(yenibilgi,sec.childNodes[0]);
//
// }


// cloneNode düğümleri kopyalama
// function tasi(){
//     var tasinacak=document.getElementById("liste2").lastChild;
//     var nereye=document.getElementById("liste1");
//     nereye.insertBefore(tasinacak,nereye.childNodes[0]);
// }
// function sil(){
//     var silinecek=document.getElementById("liste1");
//     if (silinecek.hasChildNodes()){
//         silinecek.removeChild(silinecek.lastChild);
//
//     }
// }
// function degistir(){
//     yenibilgi=document.createTextNode("C++");
//     sec=document.getElementById("liste1").childNodes[0];
//     sec.replaceChild(yenibilgi,sec.childNodes[0]);
//
// }
// function kopyala(){
//     kopyalanacak=document.getElementById("liste2").childNodes[1];
//     console.log(kopyalanacak);
//     kopya=kopyalanacak.cloneNode(true);
//     nereye=document.getElementById("liste1");
//     // nereye.appendChild(kopya); sona ekleme
//     nereye.insertBefore(kopya,nereye.childNodes[1]);
// }

// div örneği
// function kopyala(){
//     kopyalanacak=document.getElementsByTagName("div")[0];
//     kopya=kopyalanacak.cloneNode(true);
//     document.body.appendChild(kopya);
// }



// setAttiribute
// var baslik=document.getElementsByTagName("h1")[0];
// baslik.setAttribute("class", "baslik");
// var a=document.getElementsByTagName("a")[0];
// a.innerHTML="link";
// a.setAttribute("href", "https://google.com");
// a.setAttribute("style", "text-decoration:none;color:red;");
//
// btn=document.createElement("button");
// btn.innerHTML="Buton";
// btn.setAttribute("style", "padding:10px 50px; color:blue; text-align:center;")
// document.body.appendChild(btn);
//
// div=document.createElement("div");
// div.setAttribute("id", "diş");
// document.body.appendChild(div);
//
// textinput=document.createElement("input");
// document.getElementById("diş").appendChild(textinput);
//
//
//
// // hasAttiribute ve getAttiribute
// var btnoznitelik=document.getElementsByTagName("button")[0];
// alert(btnoznitelik.hasAttribute("style"));//nitelik tanımlanmış mı ? true false döner
// alert(btnoznitelik.getAttribute("style"));//tanımlanan niteliğin ne olduğu
// // btnoznitelik.removeAttribute("style");




// addEventListener()
sayi=document.getElementById("sayi");
sonucumuz=document.getElementById("sonuc");
sayi.addEventListener("keyup",function (e){//type=olay onclıck gibi func kısmı tetiklenmeden sonraki işlemler
    if (sayi.value%2==0){
        sonucumuz.innerHTML="Çift";
    }
    else {
        sonucumuz.innerHTML="tek";
    }
});