// var | Genelde eski projelerde kullanılan değişken atayıcısı. Kodda beklenmedik hatalara yol açtığı için artık tercih edilmez.
// var, function scope'a sahiptir. Yani her yerden erişilebilir kısaca.

// let | var'ın yerine geçen daha güvenilir bir değişken atayıcısı. Yeniden atanabilir. ama aynı scope'ta yeniden tanımlanamaz..
// let, blok scope'a sahiptir. Yani kendi içindeki bloktan erişilebilir ama dışarıdan erişilemez.

// const | Sonradan değiştirilmesi istenmeyen değerler atamak için kullanılır. Yeniden atanılamaz veya tanımlanamaz.
// const, let gibi blok scope'a sahiptir.

let ad = "Mehmet"
let soyAd = "Kılıç"
let yas = 3 // Sayı tanımlarken tırnaklara ihtiyaç yoktur.
let evlilik = true // veya false

let anneDurumu = undefined
let babaDurumu = null

// Undefined | Değer boş, ama bu bilinçli bir şekilde yapılmamış, Javascript tarafından otomatik olarak boş değerlere atanır.
// Null | Değer boş, ve bu bilinçli bir tercih. Yani kodu yazan kişi bu değeri "bilerek" boş bırakmış

const yerCekimi = 9.81 // Değiştirilemez.
console.log(yerCekimi)
// hata | yerCekimi = 11.2

let test = 1
console.log(test)
test = 2
console.log(test) // başarılı

// Yeniden atama ile yeniden tanımlama arasındaki fark:
// Yeniden tanımlama:
// let x = 2 ||| let x = 3

// Yeniden atama
// let x = 2 ||| x = 3  
