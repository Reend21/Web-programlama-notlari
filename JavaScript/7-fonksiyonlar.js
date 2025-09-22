// Fonksiyon, JavaScript'te yeniden kullanılabilir ve kodun okunmasını kolaylaştıran bir kod bloğu oluşutrmamıza izin verir.

// Fonksiyon tanımlama

function ornFonksiyon() {
    console.log("bu bir fonksiyon!")
}
ornFonksiyon()

function square() {
  let num = prompt("sayi girin", "buraya")
  let sq = num * num
  console.log(sq)
}
square()

// return: Fonskiyonda belirli bir değeri döndürmemize olanak sağlar. Fonksiyonu çağırmaktan farklı olarak değer fonksiyonun dışındada kullanılabilir.

function printFullName (){
      let firstName = 'Akın'
      let lastName = 'Birdal'
      let space = ' '
      let fullName = firstName + space + lastName
      return fullName
}
console.log(printFullName())

// Parametreli fonksiyon: Fonksiyona parametreler ekleyerek değişken oluşturabiliriz. İstediğimiz kadar parametre atanabilir.

function topla(sayi1, sayi2) {
  return sayi1 + sayi2;
}

let sonuc = topla(5, 7);
console.log("Toplam:", sonuc); 

// Bazen kullanıcının kaç argüman ekleyeceğini bilemeyiz, bu durumda sonsuz parametreli fonksiyonlar oluşturmalıyız.

function sumAllNums() {
 console.log(arguments)
}

sumAllNums(1, 2, 3, 4)

// Arrow Function: Fonksiyonlarla aynı şeyi yapar fakat daha minimal bir yaklaşım sunar.

const toplama = (a, b) => a + b;

console.log(toplama(5, 3))

// Anonim Fonksiyon: Genelde tek seferlik kullanılacak fonksiyonlarda kullanılır.

const anonimFunc = function() {
    console.log(
        "sa"
    )
}

// Function Expression: Normal fonksiyondan farklı olarak fonksiyonun bir değişkene atanmasını sağlar. Dinamik tanımlamalar yapılabilir, Anonim olabilir ve Hoisting özelliği bulunmaz.

const kare = function(n) {
  return n * n
}

console.log(kare(2)) 

// Self Invoking: Kendi kendine çağrılan fonksiyonlardır. Anonimlerdir ve değer döndüremezler. Eğer değeri depolama istiyorsak Function Expression ile kullanılabilir.

(function(n) {
  console.log(n * n)
})(2)

// Varsayıla parametreli fonksiyonlar: Bazen fonksiyonlara argüman verilmediğinde boş geçmek yerine varsayılan bir parametre kullanmak isteriz. Bu durumlarda varsayılan parametreli fonksiyonları kullanabiliriz.

function defaultParamFunc(name = "Akın") {
    let massage = `${name}, Sitemize hoşgeldin!`
    return massage
}

console.log(greetings())
console.log(greetings('Asabeneh'))
