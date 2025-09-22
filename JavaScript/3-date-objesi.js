// Date objesi JavaScript'te zamanı öğrenmemizi sağlar.

// Öncelikle bir zaman objesi oluşturalım.

const zaman = new Date()
console.log(zaman)

// Sırasıyla; Yıl, ay, ayın günü, gün, saat, dakika, saniye ve Unix zamanını alalım.

const now1 = new Date()
console.log(now1.getFullYear()) // 2025

const now2 = new Date()
console.log(now2.getMonth()) // 

const now3 = new Date()
console.log(now3.getDate()) // 

const now4 = new Date()
console.log(now4.getDay()) // 

const now5 = new Date()
console.log(now5.getHours()) // 0

const now6 = new Date()
console.log(now6.getMinutes()) // 

const now7= new Date()
console.log(now7.getSeconds()) // 

const now8 = new Date() //
console.log(now8.getTime()) // 

// Şimdi ise okunabilir bir saat yapalım.

const gercekZaman = new Date()
const yilimiz = gercekZaman.getFullYear()
const ay = gercekZaman.getMonth() + 1
const date = gercekZaman.getDate()
const saat = gercekZaman.getHours()
const dakika = gercekZaman.getMinutes()

console.log(`${date}/${ay}/${yilimiz} ${saat}:${dakika}`)