// Array'ler (Diziler) normal değişkenlerin aksine birden fazla veri tutabilir. Array oluşturmak için iki yol var.

// Array constructer ile:
let arr = Array()

// Array oluşturarak: (önerilen)
let arr1 = []

// Array kare parentezlerin içine yazılır ve değeler virgül ile ayrılır. Indexler harf harf değil kelime kelime olur.
// Array'de birden fazla veri türü olabilir.
// Array'ler normal değişkenlerde olduğu gibi sonradan değiştirilebilir.

// Array'leri split() operatörünü kullanarakta oluşturabiliriz.

let companiesString = 'Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon'
const companies = companiesString.split(',')

// Array manipüle etmek için bir sürü operatörümüz var, hepsine sırayla değinelim.

// Array oluşturucu: Array oluşturmak haricinde birden fazla boş değer oluşturmamızı sağlar.

let arr2 = Array(8) // 8 boş değerli array

// Fill: Array'in içine statik bir değer koyun.

let arr3 = Array(9).fill(5) // 9 boş değer, sonrasında hepsi 5 ile değiştirildi.
console.log(arr3)

// Concat: İki arrayı birleştirir.

let arr4 = [1, 2, 3]
let arr5 = [4, 5 ,6]
console.log(arr4.concat(arr5))

// Length: Arrayin uzunluğunu döndürür.

console.log(arr4.length)

// indexOf: Eğer belirtilen değer Array'de bulunuyorsa değerin bulunduğu indexi, bulunmuyorsa -1 döndürür.

console.log(arr4.indexOf(3))

// lastIndexOf: indexOf'tan farklı olarak değer birden fazla bulunuyorsa son bulunduğu kısmın indexini verir.

let arr6 = [1, 2, 3, 4, 5, 6, 2]
console.log(arr6.lastIndexOf(2))

// Includes: Eğer belirtilen değer Array'de var ise true yok ise false döndürür.

console.log(arr6.includes(9))

// Array.isArray: Belirtilen değişkenin array olup olmadığını kontrol eder.

console.log(Array.isArray(arr6))

// toString: Array'i string'e dönüştürür.

console.log(arr6.toString())

// Join: Array'de her iki dize arasına değer eklememizi sağlar.

const webTechs = [
  'HTML',
  'CSS',
  'JavaScript',
  'React',
  'Redux',
  'Node',
  'MongoDB'
] // List of web technologies

console.log(webTechs.join()) // Aralardaki boşlukları kaldırır.     
console.log(webTechs.join(' # ')) // Aralara bir boşlukla # ekler.

// slice: Array'de belirtilen değerlerdeki değerleri ayırır. Son değeri içermez.

console.log(arr6.slice(1,3))

// Splice: Array'de yer belirtilir, ondan sonra kesilecek kısım ve yerine eklenecek kısım eklenir.

const numbers = [1, 2, 3, 4, 5, 6]
numbers.splice(3, 3, 7, 8, 9)
console.log(numbers.splice(3, 3, 7, 8, 9))  // -> [1, 2, 3, 7, 8, 9] 

// Push: Array'in sonuna değer eklememizi sağlar.

const arr7  = ['item1', 'item2','item3']
arr.push('new item')
console.log(arr)

// pop: Array'deki son değeri siler. Örn: arrBilmemKac.pop()
// unshift: Array'e baştan bir değer ekler.

const nums = [1, 2, 3, 4, 5]
numbers.unshift(0) 
console.log(numbers) // -> [0,1,2,3,4,5]

// reverse: Array'i ters çevirir.
// sort: Array'i artan şekilde sıralar.

webTechs.sort()
console.log(webTechs)

