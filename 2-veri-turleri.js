// Veri türleri ikiye ayrılır.

// İlkel (Primitive) veri türleri:

/* Numbers (1, 2.1 vs.)
   Strings ("Tırnak içindeki herhangi bir veri.")
   Booleans (true veya false true 1 false 0'dır.) 
   Null & Undefined (boş değer)
   Symbol (sembol yapıcısı tarafından oluşturulabilen benzersiz bir değer) 
*/

// İlkel olmayan (non-Primitve) veri türleri:

/*
    Objects (Nesneler)
    Arrays (Diziler)
*/

// İlkel ve İlkel olmayan veri türleri arasındaki temel fark İlkel veri türleri değiştirilemiyorken ilkel olmayan veri türleri değiştirilebilir.

let word = "Javascript"
word[0] = "Y" // Değişmez.

let array1 = [1, 2, 3]
array1[0] = 10 // Değişti.

// İlkel olmayan veri türleri değere göre karşılaştırılamaz.

// Yalnış:

let array2 = [1, 2, 3]

console.log(array1 == array2) // false

// Doğru:

let array3 = array1
console.log(array3 = array1) // true

// Yani fonksiyonları, nesneleri ve arrayleri karşılaştırmayın.
// Not: Javascriptte iki değeri karşılaştırırken "==" kullanılırsa sadece değerleri, "===" kullanılırsa hem değerleri hem veri türleri karşılaştırılır.

// Math objesi, sayılar ile bir şeyler yapmanız için bir çok yöntem sağlar.

const PI = Math.PI // PI'nin değerini otomatik aldık.

console.log(Math.round(PI))   // 3.14 olduğu için 3 e yuvarlama yapıyor
console.log(Math.round(9.81))  // Ondası 0.5 üstünde olduğu için 10 yapar
console.log(Math.floor(PI))  // floor aşağı yuvarlar Bu 3 olur
console.log(Math.ceil(PI)) // ceil yukarı yuvarlar Bu 4 olur
console.log(Math.min(1, 2, 3, 4, 5)) // En küçük sayıyı bulur: yani biri
console.log(Math.max(1, 2, 3, 4, 5)) // En büyük sayıyı bulur: Yani 5'i

const randomNumber = Math.random() // 0 ile 0.999999 arasında rastgele bir sayı.

console.log(Math.abs(-10)) // Mutlak değer: 10
console.log(Math.sqrt(100)) // Karekök: 10
console.log(Math.pow(3, 2)) // İlk sayı taban, ikinci sayı üs olur: 9
console.log(Math.log(2)) // 2'nin logaritmasını döndürür

// Trigonometri
Math.sin(0)
Math.sin(60)
Math.cos(0)
Math.cos(60)

// Rastgele sayı üretme.

let rastgeleSayi = Math.random() // Sonuç 0 ila 0.9999 olur.
let gercekRastgeleSayi = rastgeleSayi * 11 // Sonuç 0 ila 10 olur.
let yuvarlanmisRastgeleSayi = Math.floor(gercekRastgeleSayi) // Sonuç yine 0 ile 10 olur ama yuvarlanmış şekilde.

// Stringler

// String Birleştirme

let space = " "
let isim = "Ali"
let soyIsim = "Yılmaz"

console.log(isim + space + soyIsim)

// Şablon Stringleri

let mevsim = "yaz"
console.log("En iyi mevsim ${mevsim} mevsimidir")

// String metodları stringler hakkında işlem yapmamızı sağlar.

let ornstr = "JavaScript"
console.log(ornstr.length) // 10
// Not: Javascriptte sayıla 0'dan başlar yani ornstr'deki J 1 değil 0'ıncı karakterdir.

console.log(ornstr.toUpperCase()) // Kelimedeki tüm harfleri büyük karakter yapar: JAVASCRIPT
console.log(ornstr.toLowerCase()) // javascritpt
console.log(ornstr.substr(4, 6)) // İki argüman alır, başlayacağı indeks ve silenecek karakter sayısı. : Script
console.log(ornstr.substring(0, 4)) // Başlangıç indeksi ve durma indeksi alır. : Java 

let string = '30 Days Of JavaScript'

console.log(string.split())     // bu kısımda birşey belirtmediğin için 1 elementli array oluştu -> ["30 Days Of JavaScript"]
console.log(string.split(' '))  // bu kısımda boşluktan böl dediğimiz için 4 elementli array oluştu -> ["30", "Days", "Of", "JavaScript"]

let firstName = 'Asabeneh'

console.log(firstName.split())    // - > ["Asabeneh"]
console.log(firstName.split(''))  // burada sadece tek tırnak kullandığımız için string'in içindeki tüm karakterleri array haline getirdi  ->  ["A", "s", "a", "b", "e", "n", "e", "h"]

let countries = 'Finland, Sweden, Norway, Denmark, and Iceland'

console.log(countries.split(','))  // Dikkat edin sadece virgül ile ayırıyor. İknci elementin solunda boşluk oluşuyor.  ["Finland", " Sweden", " Norway", " Denmark", " and Iceland"]
console.log(countries.split(', ')) // Dikkat edin burayada. ', ' virgül ve boşluk bulunmakta bu yüzden elementleri virgülden ayırıp boşluklsuz arrray oluşturuyor.  ["Finland", "Sweden", "Norway", "Denmark", "and Iceland"]

let boslukluString = "  tablı bosluk    "
console.log(boslukluString.trim("   ")) // "tablı bosluk"

console.log(countries.includes("Finland")) // String'in içerisindeki bir değeri arar, bulursa true bulamazsa false döndürür. Büyük küçük karaktere duyarlıdır.
console.log(countries.replace("Finland", "Turkey")) // String'deki bir elemanı değiştirir, ilk değer değişecek eleman ikincisi yerine geçecek eleman.
console.log(ornstr.charAt(0)) // İstenilen karakteri döndürür. // J
console.log(ornstr.charCodeAt(0)) // Yine İstenilen karakteri döndürür ama ASCII biçiminde.
console.log(ornstr.indexOf("J")) // İstenilen karakterin nerede olduğunu döndürür, bulamazsa -1 değeri döndürür. Ayrıca aynı karakterden birden fazla varsa o karakterin son olarak nerede olduğunu döndürür.
console.log(ornstr.lastIndexOf("JavaScript")) // İstenilen değerin son değer indeksini verir, büyük küçük duyarlıdır.
console.log(ornstr.concat("Öğreniyoruz")) // Değişkenle istenilen değerleri birleştirir. : JavaScript Öğreniyoruz
console.log(ornstr.endsWith("t")) // String'in belirtilen değerle bitip bitmediğini kontrol eder. : true
console.log(ornstr.search("Javascript")) // Argümanı değişkende bulursa ilk dizinini döndürür: 0
console.log(ornstr.match("JavaScript")) // Argğmanı değişkende bulursa bir array döndürür. : console .log'u inceleyin.
// Not: /JavaScript/gi şeklinde değeri girseydik g : bütün metinde ara i : büyük küçük harf duyarsız olur.
console.log(ornstr.repeat(10)) // Değişkeni aldığı sayı kadar döndürür: JavaScriptJavaScriptJavaScriptJavaScriptJavaScriptJavaScriptJavaScriptJavaScriptJavaScriptJavaScript

// Belirli bir değişkenin veri türünü kontrol etmek için typeof'u kullanılır
console.log(typeof ornstr) // string

// Veri türlerini değiştirme

let numstr = "1"
let NumInt = parseInt(numstr)
console.log(NumInt) // 1

let numstr2 = "1.2"
let NumFloat = parseFloat(numstr2)
console.log(NumFloat) // 1.2

let numInt2 = parseInt(numstr2)
console.log(numInt2) // 1s