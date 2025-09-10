// Set, sadece eşsiz değerleri saklayabilen bir değer koleksiyonudur

const setOrn = new Set()
console.log(setOrn)

const futbolTakimlari = [
    "Barcelona",
    "Real Madrid",
    "Villareal",
    "Rayo Vallecano",
    "Atletico Madrid",
    "Leventa",
    "Levanta",
    "Villareal",
    "Barcelona"
]

const essizFutbolTakimlari = new Set(futbolTakimlari)
console.log(essizFutbolTakimlari)

// .add: Set'e eleman ekler.

setOrn.add("ornek!")
setOrn.add(1)
console.log(setOrn)

// .delete: Set'teki elemanı siler.

setOrn.delete(1)
console.log(setOrn)

// .has: Elemanın Set'te olup olmadığını kontrol eder.

console.log(setOrn.has("ornek!"))

// .clear: Set'teki tüm elemanları siler.

const ornSet = [
    1,
    2,
    3,
    4,
    5
]

ornSet.clear()
console.log(ornSet)

// .size: Set'in uzunluğunu kontrol eder.

console.log(essizFutbolTakimlari.size)

// Birden fazla Seti birleştirmek için:

let a = [1, 2, 3, 4, 5]
let b = [3, 4, 5, 6]
let c = [...a, ...b]

let A = new Set(a)
let B = new Set(b)
let C = new Set(c)

console.log(C)

// Set'leri kesiştirmek için:

let a1 = [1, 2, 3, 4, 5]
let b1 = [3, 4, 5, 6]

let A1 = new Set(a1)
let B1 = new Set(b1)

let c1 = a1.filter((num) => B1.has(num))
let C1 = new Set(c1)

console.log(C1)

// İki set arasındaki farklılıkları bulmak için:

let o = [1, 2, 3, 4]
let j = [3, 4, 5, 6, 7]

let O = new Set(o)
let J = new Set(j)

let k = o.filter((num) => !J.has(num))
let K = new Set(k)

console.log(K)