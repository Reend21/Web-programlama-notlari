// If Else operatörleri programlama dillerinin belkemiğidir. "Bir koşul gerçekleşirse şunu yap, gerçekleşmesse şunu yap." mantığındadır. Bir kaç If Else operatörü var bunlar:

/*
If else
If else If else
Switch
Ternary operatör
*/

// If else operatörü: Klasik operatör. Koşullara bağlı olarak işlem yapmamızı sağlar.

let string = "JavaScript"
if (typeof string === string) {
    console.log("Bu bir string!")
}   else {
    console.log("Bu bir string değil!")
}

// If else If else operatörü: If else ile benzer ancak birden fazla koşul eklememizi sağlıyor.

let a = 0
if (a > 0) {
  console.log(`${a} is a positive number`)
} else if (a < 0) {
  console.log(`${a} is a negative number`)
} else if (a == 0) {
  console.log(`${a} is zero`)
} else {
  console.log(`${a} is not a number`)
}

// Switch Operatörü: If else If else operatörüne benzer ancak. Daha farklı bir yaklaşıma sahip.

let number = 9
switch(number){
    case number > 0:
        console.log("Bu bir pozitif sayı!")
        break
    case number < 0:
        console.log("Bu bir negatif sayı!")
        break
    case number === 0:
        console.log("Bu sayı 0")
        break
    default:
        console.log("Bunun bir sayı olduğundan şüpheliyim.")
}

// Ternary operatörlerini daha önce anlatmıştık. Diğer if else operatörlerine göre daha minimal bir syntaxa sahip.

let isRaining = true
isRaining
  ? console.log('You need a rain coat.')
  : console.log('No need for a rain coat.')