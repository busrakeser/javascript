var cumle="Çocuklar güverteye çıktılar, martılara ekmek attılar";

var uzunluk=cumle.length;
console.log(uzunluk);

// aranan=cumle.indexOf("çıktılar");
// console.log(aranan);

yenicumle=cumle.slice(37);
console.log(yenicumle);

yenicumle=cumle.substr(38,9);//37 . krakterden itibaren 9 karakter al
console.log(yenicumle);

degistir=cumle.replace("ekmek", "simit");
console.log(degistir);

buyuk=cumle.toUpperCase();
console.log(buyuk);

kucuk=cumle.toLowerCase();
console.log(kucuk);

cumle1="Ali";
cumle2="Okula";
cumle3="gitti";

cumle4=cumle1.concat(" ", cumle2, " ", cumle3);
console.log(cumle4);

