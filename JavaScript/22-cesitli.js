// preventDefault | HTML'de bazı elemanların varsayılan davranışları vardır, örneğin a etiketinin href değerine bakarak kullanıcıyı o linke yönlendirmesi gibi.
// Bu metod, o elementin davranışını deaktive etmemizi sağlar.

const aHrefTags = document.querySelectorAll("a")

aHrefTags.forEach(a => {
  a.addEventListener("click", b => {
    if (b.currentTarget.getAttribute("href").includes("http")) {
        if (!confirm("Harici bir siteye yönlendiriliceksin.")) {
            b.preventDefault()
        }
    }
  })  
})

// stopPropagation | Yayılmayı engellemek için kullanılır, iç içe geçmiş elementlerde en alttaki elementi çalıştırdığımızda üstteki diğer elementler de etkilenir, bunun olmasını istemiyorsak kullanılabilir.


const pd1 = document.querySelector(".propagation-div-1")
const pd2 = document.querySelector(".propagation-div-2")
const pd3 = document.querySelector(".propagation-div-3")

pd1.addEventListener("click", () => console.log("pd1 aktif"))
pd2.addEventListener("click", () => console.log("pd2 aktif"))
pd3.addEventListener("click", () => console.log("pd3 aktif")) // tıklandığında sadece kendisi değil, pd2 ve pd1 de dönecek.
/* pd3.addEventListener('click', a => {
    a.stopPropagation()
    console.log("SADECE pd3 aktif.")
}) */ // Yayılma artık engellenecek!

// Ek not | stopImmediatePropagation methodu ise sadece bir eventin çalışmasını sağlar.
// Ek not 2 | eventListener'ı yazarken en sağa virgül ile true değeri bırakarak yayılma yönünü değiştirebiliriz. 

// CSSStyleDeclaration | JS'te CSS tanımlamaları için .style kullanmayı öğrenmiştik, bu methodlar ise daha kapsamlı. (Örnekler en azından şu an gerçek değil.)
// setProperty() | CSS özelliğini ekler.
console.log(document.styleSheets)
document.styleSheets[0].cssRules[0].style.setProperty('color', 'blue')

// removeProperty() | CSS özelliğini silmek için kullanılır.)
document.styleSheets[0].cssRules[0].style.removeProperty('color')

// getPropertyValue() | CSS özelliğinin değerini döndürür.
console.log(
      document.styleSheets[0].cssRules[0].style.getPropertyValue('color')
    )
// getPropertyPriority() | CSS özelliğinin important olup olmadığını belirler.