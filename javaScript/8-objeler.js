// Scope yani Kapsam alanı, oluşturduğumuz değişkenlerin hangi alanlarda kullanılabilir olduğunu gösterir. Scope türlerini inceleyelim.

// Window Global Object: let veya const olmadan tanımlanan değişkenler bu kapsama girer. Fonksiyon içinde yazılmışsa erişilemez.

a = 'JavaScript' 
b = 10 
function letsLearnScope() {
  console.log(a, b)
  if (true) {
    console.log(a, b)
  }
}
console.log(a, b) // Erişilebilir.

// Global Scope: Değişkenin, dosyanın her yerinden erişilebileceğini ifade eder.

//scope.js
let a = 'JavaScript' 
let b = 10 
function letsLearnScope() {
  console.log(a, b) // Erişilebilir
  if (true) {
    let a = 'Python'
    let b = 100
    console.log(a, b) // Erişilebilir
  }
  console.log(a, b) 
}
letsLearnScope()
console.log(a, b)  // Erişilebilir

// Local Scope: Sadece belirli bir kod bloğunun veya fonksiyon bloğunun içinde erişilebilen değişkenleri ifade eder.

let a1 = 'JavaScript' 
let b2 = 10 

function letsLearnScope() {
  console.log(a, b) // Erişilebilir
  let value = false
  if (true) {
    let a = 'Python'
    let b = 20
    let c = 30
    let d = 40
    value = !value
    console.log(a, b, c, value) 
  }
  console.log(a, b, value) // C'ye function bloğunun içinde olduğu için erişemiyoruz.
}
letsLearnScope()
console.log(a, b) 

// Objeler: Syntax olarak .json dosyalarına benzeyen ve bir anahtar bir de değer alan veri türüdür.

const obj = {}
// Object Constructor ile:
const obj3 = new Object()

const obj2 = {
   // key: value
   isim: "Akın Birdal",
   soyİsim: null,
   yas: 66,
   country: "Diyarbakır",
   skills: [
    "HTML",
    "CSS",
    "JAVASCRIPT"
   ]
}

console.log(obj2)

// Objedeki değerlere erişmek için:

console.log(obj2.isim)
// veya
console.log(obj2["isim"])

// Objeye yeni değerler eklemek için:

obj2.ornKey = "1"
obj2.ornKey2.push = "3"

// Object.assign Orjinal objeyi modife etmeden kopyalamayı sağlar.

const copyObj = Object.assign({}, obj2)
console.log(copyObj)

// Object.keys Objenin key'lerini döndürür.

console.log(Object.keys(obj2))

// Object.values Objenin değerlerini döndürür.

console.log(Object.values(obj2))

// Object.entries Objenin hem değerlerini hem keylerini döndürür.

console.log(Object.entries(obj2))

// Object.hasOwnProperty Spesifik bir anahtarın objede olup olmadığını kontrol eder.

console.log(Object.hasOwnProperty("name"))