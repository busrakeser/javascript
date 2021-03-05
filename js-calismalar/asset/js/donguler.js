// for
function tumunuSec()
{
    toplam = document.getElementsByName("hobi").length;
    for (i = 0; i < toplam; i++)
    {
        document.getElementsByName("hobi")[i].checked = true;
    }
}


// for-if
// SAyı Tahmin Oyunu
function sayiTahmin()
{
    var rastgele = Math.random() * 10;
    rastgele = parseInt(rastgele);

    for (sayac = 1; sayac <= 5; sayac++)
    {
        alert(rastgele);
        sayi = parseInt(prompt("Bir sayı giriniz."));
        if (rastgele > sayi)
        {
            alert("Küçük bir sayı tahmin ettiniz.");
        }
        else if (rastgele < sayi)
        {
            alert("Büyük bir sayı tahmin ettiniz.");
        }
        else
        {
            alert("Tebrikler doğru Tahmin ettiniz.");
            break;
        }
    }
// alert(rastgele)
}

// sayiTahmin();


// for-if
// girilen sayının asla olup olmadığını tespit etme
function asal()
{
    var sayi = parseInt(prompt("Bir sayı giriniz"));
    var uzunluk = sayi / 2;
    var asald = 0;
    for (i = 2; i <= uzunluk; i++)
    {
        if (sayi % i == 0)
        {
            alert("Sayınız asal değildir.");
            asald = 1;
            break;
        }
    }
    if (asald == 0)
    {
        alert("Sayınız asaldır");
    }
}

// asal();


// for-if
// asal çarpan bulma
function asalCarpan()
{
    var sayi = parseInt(prompt("Bir sayı giriniz"));
    var bolen = 2;
    for (sayac = 1; sayi > 1; sayac++)
    {
        if (sayi % bolen == 0)
        {
            sayi = sayi / bolen;
            document.write(bolen + " ");
        }
        else
        {
            bolen++;
        }
    }

}

// asalCarpan();


// while
// kullanıcı kaç adet asal sayı bulunmasını istiyorsa o kadar asal sayı bulan program
function asalBul()
{
    var adet = parseInt(prompt("Kaç adet asal sayı istiyorsunuz?"));
    var bulunan = 0;
    var sayi = 3;
    while (bulunan < adet)
    {
        var asal = 0;
        for (i = 2; i < sayi; i++)
        {
            if (sayi % i == 0)
            {
                asal = 1;
                break;
            }
        }

        if (asal = 0)
        {
            bulunan++
            document.write(bulunan + "." + sayi + "<br>")
        }
        sayi++;

    }
}
// asalBul();


