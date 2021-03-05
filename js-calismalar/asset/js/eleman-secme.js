// getElementById
function degistir()
{
    document.getElementById("yazi").style.color = "blue";
    document.getElementById("yazi").innerHTML = "merhaba dünya";
    document.getElementById("metin").value = "input yazı ekleme";
    // başlangıç ve bitiş tagları bulunan elementler için innerHTML kullanılır
}


// getElementsByName
function secim()
{
    for (i = 0; i < 2; i++)
    {
        document.getElementsByName("hobi")[i].checked = true;
    }
}


<!--getElementsTagName-->
function bas()
{
    for (i = 0; i < 3; i++)
    {
        document.getElementsByTagName("p")[i].style.color = "red";
    }
}


// getElementsByClassName
function renk()
{
    for (i = 0; i < 2; i++)
    {
        document.getElementsByClassName("kelime")[i].style.color = "blue";
    }
}


<!--form eleman adı ile seçim yapmak-->
function mesaj()
{

    var ad = document.bilgi.ad.value;
    alert(ad);
    document.bilgi.ad.style.color = "red";
}


<!--querySelector-->
function linksec()
{
    // ilkini seçer bir tane seçer
    document.querySelector("a").style.color = "red";
    document.querySelectorAll("a")[1].style.color = "green";
    document.querySelector("a[href*=ho]").style.color = "pink";
    for (i = 0; i < 3; i++)
    {
        document.querySelectorAll("a")[i].style.fontSize = "18px";
    }
}