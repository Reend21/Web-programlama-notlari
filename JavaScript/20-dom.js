// JavaScript'te HTML'de bulunan tüm elementlerimize erişebiliriz ve bunlara istediğimiz her türlü şekilde işleyebiliriz veya kullanabiliriz. Bunu yapmak için DOM (DOCUMENT OBJECT MODEL) kullanırız.
// Aslında şu anda JavaScript'in konusuna geldik bile diyebilirim. Şu ana kadar öğrendiğimiz her şey öyle ya da böyle diğer programlama dillerinde de yapılabilir fakat DOM HTML'e bağlı olduğu ve zaten JavaScript'in ana amacı olan siteye dinamiklik katma amacını uygulayan yegane konu. O yüzden hazır ol, uçucaz çünkü!

// Tag ismi ile HTML objelerine erişmek için document.getElementsByTagName() kullanabiliriz. Tek yapmamız gereken istediğimiz tagı yazmak ve bize sonra o tagdaki tüm elementleri döndürecek.
// Döndürürken bize bir HTMLcollection objesi döndürecek. Arraylere oldukça benzer. Ama tüm array methodlarını desteklemez ve ve sadece forLooplarını destekler.

const divElements = document.getElementsByTagName("div")
console.log(divElements)
console.log(divElements.length)

for (let a = 0; a <= divElements.length; a++) {
    console.log(divElements[a])
}
// Bunların hepsini aşağıdaki diğer document zamazingoları ile de kullanabilirsiniz.

// Class ismi ile HTML Objelerine erişmek için: 

const extraDivs = document.getElementsByClassName("extradiv")

// ID ismi ile HTML Objelerine erişmek için: (Tahmin edebileceğiniz üzere bu HTML Collection yerine tekil string döndürecek.)

const essizID = document.getElementById("essiz")

console.log(essizID)

// .querySelector | HTML Objelerine Tag, ID veya Class ile erişim sağlayabilir ama tag veya class seçilmeye çalışılırsa sadece ilk element döner.

console.log(document.querySelector("ekstradiv"))

// .querySelectorAll | HTML Objelerine Class veya Tag ile erişim sağlayabilir. Array methodlarını ve forEach'i destekleyen objeye benzer NodeList isimli değişik bi array döndürür.

console.log(document.querySelectorAll("ekstradiv"))

// .setAttribute | HTML elementine özellik ekler.

extraDivs[1].setAttribute("id", "ozelDiv")

// veya extraDivs[1].id = "ozelDiv" Aynı işlevi görür.

// .classList.add | HTML elemetine class verir. Class'ın üstüne yazmaz.

essizID[1].classList.add("bilmem")

// .classList.remove | HTML elementinden class kaldırır.

essizID[1].classList.add("bilmem")

// .textContent | HTML elementine yazı ekler.

extraDivs[2].textContent = "Test!"

// innerHTML | .textContent'in aksine sadece yazı değil, element ekleme veya çocuk elementleri kaldırmaya da olanak sağlar.

const listeLi = "<li>30DaysOfPython Challenge Done</li> <li>30DaysOfJavaScript Challenge Ongoing</li> <li>30DaysOfPython Challenge Done</li>"

const ul = document.getElementsByTagName("ul")
ul.innerHTML = listeLi // Ekleme

ul.innerHTML = "" // Kaldırma

// Background color, color, fontSize değiştirme:

extraDivs.forEach((div, i) => {
  div.style.fontSize = '32px'
  if (i % 2 === 0) {
    div.style.color = '#ffd700'
  } else {
    div.style.color = '#9b111e'
  }
})

extraDivs.forEach((div, i) => {
  div.style.fontSize = '32px'
  if (i % 2 === 0) {
    div.style.color = '#171717ff'
  } else {
    div.style.color = '#141414ff'
  }
})

// .createElement | HTML Elementi oluşturmamızı sağlar.x

let headText = document.createElement("h1")
headText.className("classified")
headText.fontSize("32px")
headText.textContent("Bunu dom ile oluşturdum ha!")

// Çoklu element oluşturmak için tahmin edin ne kullanıyoruz?

let title2
for (let o = 0; o < 3; o++) {
  title = document.createElement('h1')
  title.className = 'title'
  title.style.fontSize = '24px'
  title.textContent = o
console.log(title2)
}

// appendChild | Elementi başka bi elementin çocuğu yapar.

document.body.appendChild(title2)

// removeChild | Çocuk elementi siler.

document.removeChild(titles2)