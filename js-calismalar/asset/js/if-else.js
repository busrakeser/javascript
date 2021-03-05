<!--and ve işlemi-->
function kontrolEt(){
    var ad=document.getElementById("ad").value;
    var soyad=document.getElementById("soyad").value;
    var sifre=document.getElementById("sifre").value;
    // if(ad.trim()==""){
    //     alert("Lütfen isminizi giriniz");
    // }
    // else if(soyad.trim()==""){
    //     alert("Lütfen soyadınızı giriniz");
    // }
    // else if (sifre.trim()==""){
    //     alert("Lütfen şifrenizi giriniz");
    // }
    // else {
    //     alert("işlem başarılı");
    // }

    // ikinci yöntem
    if(ad.trim()!="" && soyad.trim()!="" && sifre.trim()!=""){
        alert("İşlem Başarılı");
    }
    else{
        alert("Lütfen bilgileri eksiksiz giriniz.");
    }
}




// veya or işlemi

function sonuc(){
    var dil=document.getElementById("yDil").value;
    if(dil.trim()=='almanca' || dil.trim()=='ingilizce'){
        alert("İşe alındı");
    }
    else {
        alert("İşe alınmadı");
    }
}




<!--not sistemi örneği-->
function hesapla(){
    var yuzluknot=document.getElementById("yuzluknot").value;
    if(yuzluknot>=0 && yuzluknot<= 45){
        alert("Notunuz 1");
    }
    else if(yuzluknot>=46 && yuzluknot<= 55){
        alert("Notunuz 2");
    }
    else if(yuzluknot>=56 && yuzluknot<= 70){
        alert("Notunuz 3");
    }
    else if(yuzluknot>=71 && yuzluknot<= 85){
        alert("Notunuz 4");
    }
    else if(yuzluknot>=86 && yuzluknot<= 100){
        alert("Notunuz 5");
    }
    else{
        alert("lütfen geçerli bir not giriniz");
    }
}