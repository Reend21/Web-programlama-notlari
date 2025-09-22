// Destructing JavaScript'te Array ve Objeleri unpack etmek için bir yöntemdir.

let numbers = [1, 2, 3, 4, 5]
let [num1, num2, num3, num4, num5] = numbers
console.log(num1, num2, num3, num4, num5)

// Değişkende bir değeri geçmek istersek boşluk kullanarak bir virgül kullanmamız yeterlidir.

// Eğer Array'de undefined değerler varsa destruc ederken onlara değer atayabiliriz.

// Destructin during iteration.

const countryCity = [
    ["Germany", "Berlin"]
    ["Spain", "Madrid"]
    ["Portugal", "Lizbon"]
]

for (const [ulke, sehir] of countryCity)
console.log(ulke, sehir)

// Objeleri destruct ederken key değeri birebir aynı olmalı.

const obj = {
    "Elma": "Yeşil",
    "Portakal": "Turuncu",
    "Nar": "Kırmızı"
}

let {Elma, Portakal, Nar} = sadeceRenkler // veya console.log ile daha hızlı erişmek için onları yeniden adlandırabiliriz: let {Elma: E, Portakal: T, Nar: N} = sadeceRenkler
console.log(Elma, Portakal, Nar) 

// Destruct ile Fonksiyon

const ucgen = {
    genislik: 10,
    yukseklik : 15
}
const alanHesabi = ucgen => {
    return 2 * (genislik + yukseklik)
}
console.log(alanHesabi)

// Array veyahut Objeleri destruct ederken Array'de değerleri ayırmak veya yaymak için spread (...) operatörünü kullanılırız.

const countries = [
  'Germany',
  'France',
  'Belgium',
  'Finland',
  'Sweden',
  'Norway',
  'Denmark',
  'Iceland'
]

let [gem, fra, , ...nordicCountries] = countries

console.log(gem)
console.log(fra)
console.log(nordicCountries)

const user = {
  name:'Akın',
  title:'Programlama',
  country:'Türkiye',
  city:'Diyarbakır'
}

const copiedUser = {...user} // {...user, title: "Yazılım"} // Kopyalarken modifiye eder.
console.log(copiedUser)

// Ayrıca değerleri bir araya getirmek için rest (...) operatörünü kullanırız. 



