// Tarayıcı konsolunda console metodu ile neler yapabileceğimize bir bakalım:

// Console metodunda css yazabiliriz.

console.log('%c30 Days Of JavaScript', 'color:green')

// Warning | Uyarı

console.warn("Pştt, yalnış kod. Yine yaz.")

// Error | Hata

console.error("Haydaa, oldu mu şimdi?")

// Table | Tablo

const arr33 = {
    n: 2,
    a: 3
}
console.table(arr33)

// Time | İşlemin ne kadar sürdüğünü hesaplar.

console.time("başlangıç of loop")
for (let a = 89; a < 90; a++)
console.timeEnd("başlangıç of loop")

// Info | Bilgi

console.info("Haberin olsun!")

// Assert | Bilgi doğruysa bir şey yapmaz, yalnışsa verdiğimiz değeri döndürür.
console.assert("a" === String, "Bu bir string.")
console.assert(2 === String, "Bu sayı la.") 

// Group

const names = ['Asabeneh', 'Brook', 'David', 'John']
const countries11 = [
  ['Finland', 'Helsinki'],
  ['Sweden', 'Stockholm'],
  ['Norway', 'Oslo']
]
const user = {
  name: 'Asabeneh',
  title: 'Programmer',
  country: 'Finland',
  city: 'Helsinki',
  age: 250
}
const users = [
  {
    name: 'Asabeneh',
    title: 'Programmer',
    country: 'Finland',
    city: 'Helsinki',
    age: 250
  },
  {
    name: 'Eyob',
    title: 'Teacher',
    country: 'Sweden',
    city: 'London',
    age: 25
  },
  {
    name: 'Asab',
    title: 'Instructor',
    country: 'Norway',
    city: 'Oslo',
    age: 22
  },
  {
    name: 'Matias',
    title: 'Developer',
    country: 'Denmark',
    city: 'Copenhagen',
    age: 28
  }
]

console.group('Names')
console.log(names)
console.groupEnd()

console.group('Countries11')
console.log(countries)
console.groupEnd()

console.group('Users')
console.log(user)
console.log(users)
console.groupEnd()

// Count | Sayma

const func = () => {
  console.count('Fonksyion, gel oğlum buraya!')
}
func()
func()
func()

// Clear | Konsolu temizler.

console.clear()