// Üst düzey fonksiyonlar (Higher Order Functions.), başka bir fonksiyonu parametre olarak alan veya başka bir fonksiyonu değer olarak döndüren fonksiyonlardır.
// Üst düzey fonksiyonlar kodun daha kısa, modüler ve reusable olmasını sağlar. Ayrıca fonksiyonları dinamikleştirir.


// Callback: Başka bir fonksiyonu parametre olarak alan fonksiyonlara denir.

const callback = (a) => {
  return a + 2
}

function plus(callback, a) {
    return callback(a) + a
}

console.log(plus(callback, a))

// Returning Function: Başka bir fonksiyonun değerini döndüren fonksiyonlara denir.

// JavaScript'te bir işlemi gerçekleştirmek için belirli bir zaman bekleyebilirz veya belirli bir zaman aralığında işlemi sürekli gerçekleştirebiliriz.
// setInterval: Kodun belirli bir zaman aralığyla sürekli gerçekleşmesini sağlar.

function intervalHello() {
    console.log("Hello")
}

setInterval(intervalHello, 5000) // 1000ms = 1s

// setTimeout: Kodun belirli bir süre bekledikten sonra gerçekleşmesini sağlar.

function timeoutedHello() {
    console.log("Gecikmeli Hello!")
}

setTimeout(timeoutedHello, 5000)

// Not: SetTimeout ve Interval'de aslında bir nevi üst düzey fonksiyondur.

// Normal döngüler yazmak yerine, karşılaşacağımız karmaşık ve çeşitli sorunlar için JavaScript'te bir sürü operatör var.

// forEach: Sadece arrayler'de döngü oluşturur. Her dizi elemanına erişir ve istediğin fonksiyonu uygular.

const meyveler = ["Elma", "Armut", "Muz"];

meyveler.forEach(function(meyve, i) {
  console.log(`${i + 1}. meyve: ${meyve}`);
});

// Map: Array elamanlarını modifiye eder.

const sayilarArr = [1, 2, 3, 4 ,5]
const sayilarArrKare = sayilarArr.map((num) num * num)

console.log(sayilarArrKare)

// Filter: Belirli koşullara göre array'lerdeki elemanlatı filtreler.

const meyvelerArr = [
    "Elma",
    "Armut",
    "Nar",
    "Erik",
    "Muz",
    "Kiraz"
]

const icindeAOlanMeyveler = meyvelerArr.filter((meyve),
    meyve.includes("a")
)
console.log(icindeAOlanMeyveler)

const zIleBitenMeyveler = meyvelerArr.filter((meyve) => meyve.endsWith("z"))
console.log(zIleBitenMeyveler)

const ucHarfliMeyveler = meyvelerArr.filter((meyve) => meyve.length === 3)
console.log(ucHarfliMeyveler)

// Reduce: Bir array'deki elemanları istenilen işlemleri uygulayarak tek bir değere indirger.

const ornSayilar = [1, 2, 3, 4 ,5]

const arrToplam = ornSayilar.reduce((acc, val) => acc + val, 0)

// Every: Bir array'deki TÜM elemanları tek bir hususa göre değerlendirir ve boolean değer döndürür.
const areAllNum = ornSayilar.every((name) => typeof === "number")

// Some: Bir array'deki bazı elemanları tek bir hususa göre değerlendirir ve boolean değer döndürür.

console.log(areAllNum)

// Find: Koşulu karşılayan ilk değeri döndürür.

const iki = ornSayilar.find((num) => num > 1)
console.log(iki)

// findIndex: Koşulu karşılayan ilk değerin indexini döndürür.

// Sort: Array'deki elemanları artan veya azalan şeklinde sıralar.

const products = ['Milk', 'Coffee', 'Sugar', 'Honey', 'Apple', 'Carrot']
console.log(products.sort())

// Sort: Sayılar düzenlerken yalnış sonuç verir. Çünkü sayılar önce string'e çevirip sonra sıralar ve ASCII kodlarını referans alarak düzenler.

const numbers = [9.81, 3.14, 100, 37]

console.log(numbers.sort()) //[100, 3.14, 37, 9.81]
numbers.sort(function (a, b) {
  return a - b
})

console.log(numbers) // [3.14, 9.81, 37, 100]

numbers.sort(function (a, b) {
  return b - a
})
console.log(numbers) //[100, 37, 9.81, 3.14]


