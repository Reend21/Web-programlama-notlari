// Aritmetik operatörler matematik için kullanılan operatörlerdir.

/*
Ekleme a + b
Çıkarma a - b
Çarpma a * b
Bölme a / b
Yüzdesini alma a % b
Üssünü alma a ** b
*/

// Karşılaştırma operatörler iki değeri karşılaştırmak için kullanılır.

/* 
== | Sadece değerleri karşılaştırır
=== | Değerleri ve veri tipini karşılaştırır
!= | Eşitlik olmadığını karşılaştırır. (?)
> | 'dan büyük
< | 'dan küçük
>= | Büyük veya eşit
<= | Küçük veya eşit
*/

// Mantıksal operatörler... eee analatamam ama aşşağıdaki örneklere bir bak!

// && ve operatörü

const check1 = 4 > 3 && 10 > 5         // true && true -> true
const check2 = 4 > 3 && 10 < 5         // true && false -> false
const check3 = 4 < 3 && 10 < 5         // false && false -> false

// || boru operatörü

const check4 = 4 > 3 || 10 > 5         // true  || true -> true
const check5 = 4 > 3 || 10 < 5         // true  || false -> true
const check6 = 4 < 3 || 10 < 5         // false || false -> false

//! olumsuzluk operatörü

let check7 = 4 > 3                     // true
let check8 = !(4 > 3)                  //  false
let isLightOn = true
let isLightOff = !isLightOn           // false
let isMarried2 = !false                // true

// Increment (arttırma) ve Decrement (azaltma) operatörleri tahmin edebileceğiniz üzere değeri azaltır veya arttırır.

// Pre increment ve Decrement

let say = 0
console.log(++say) // 1
console.log(say) // 1

console.log(--say) // -1
console.log(say) // -1

// Post increment ve decrement

console.log(say++) // 1
console.log(say) // 2

console.log(say--) // 0
console.log(say) // -1

// Ternary operatörleri bir koşul yazmanıza olanak sağlar daha sonra işleyeceğimiz if else konusuna benzer.
// ? | Koşul olumluysa : | Koşul olumsuzsa
let yagmurYagiyormu = true
yagmurYagiyormu
    ? console.log("Bir şemsiye al adamım!")
    : console.log("Şemsiyeye gerek yok!")