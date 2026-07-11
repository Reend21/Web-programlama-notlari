// Element.attributes özelliği elemana ait tüm nitelikleri döndürür, NamedNodeMap objesi döndürdüğü için array methodları çalışmaz, sonuçlar tarayıcıdan tarayıcıya farklılık gösterebilir.

const attributeTest = document.getElementById("rA")
const attrbiutesOfDiv = attributeTest.attributes
console.log(attrbiutesOfDiv)

for (const attr of attrbiutesOfDiv) {
  console.log(attr.name, attr.value)
}

// childElementCount özelliği kaç çocuk eleman olduğunu döndürür.

const ulSelect = document.getElementsByClassName("element")
const deleteBTN = document.querySelectorAll(".delete-btn")

deleteBTN.forEach(BTN => { 
    BTN.addEventListener("click", e => {
        e.target.remove()
        if (ulSelect.childElementCount === 0) {
            console.warn("Ul nerde amk")
            ulSelect.innerHTML = "Gösterilecek veri kalmadı valla."
        }
    })
})

console.log(ulSelect.childElementCount)

// children özelliği elemanın çocuklarını HTML Collection olarak döndürür.

console.log(ulSelect.children)

// clientHeight ve clientWidth özellikleri herhangi elemanın iç yükseklik veya genişliğini dönüdürür. padding ve varsa scrollbarı da dahil eder ama margin ve borderları etmez.

console.log(document.getElementsByClassName("widthHeightTest").clientHeight)
console.log(document.getElementsByClassName("widthHeightTest").clientWidth)

// firstElementChild ve lastElementChild özellikleri elemanların ilk ve son çocuklarını döndürür.

console.log(ulSelect.firstElementChild)
console.log(ulSelect.lastElementChild)

// nextElementSibling ve previousElementSibling özellikleri seçilen elemanın hemen sonrasındaki ve öncesindeki değerleri döndürür.
// Not: Ard arda eklenebilir.

console.log(ulSelect.nextElementSibling)
console.log(ulSelect.previousElementSibling)

// scrollHeight ve scrollWidth özellikleri seçilen elemanın taşan alanları dahil gerçek yüksekliği ve genişliğini döndürür.

const scrollContent = document.querySelector(".scroll-content1")
const scrollContent2 = document.querySelector(".scroll-content2")

console.log(scrollContent.scrollHeight)
console.log(scrollContent2.scrollWidth)

// scrollLeft ve scrollTop özellikleri soldan ve yukarıdan hem mesafesini döndürüp hem mesafeyi ayarlar.

const scrollRight = document.getElementById("scroll-right")
const scrollUp = document.getElementById("scroll-up")
const scrollDown = document.getElementById("scroll-down")
const scrollLeft = document.getElementById("scroll-left")

scrollContent.addEventListener("scroll", e => {
    if (scrollContent.scrollHeight - scrollContent.clientHeight == e.target.scrollTop) {
        scrollDown.setAttribute("disabled", "disabled")
    } else {
        scrollDown.removeAttribute("disabled")
    }
    console.log("Kaydırıldı!", e.target.scrollTop)
})

scrollDown.addEventListener("click", () => {
    scrollContent.scrollTop += 25
})

scrollUp.addEventListener("click", () => {
    scrollContent.scrollTop -= 25
})

scrollRight.addEventListener("click", () => {
    scrollContent2.scrollLeft += 25
})

scrollLeft.addEventListener("click", () => {
    scrollContent2.scrollLeft -= 25
})

// tagName özelliği istenilen itemin etiket ismini döndürür.

console.log(scrollUp)

// after ve before methodları elemanın öncesine ve sonrasına öğe eklemek için kullanılır.

let afterBefore = document.querySelector(".after-before")

let h1 = document.createElement("h1")
h1.textContent = "tunderbürd"

let h2 = document.createElement("h2")
h2.textContent = "tündürübürdü"

afterBefore.before(h1)
afterBefore.after(h2)

// append ve prepend methodları elemanın "içinde" öncesine ve sonrasına öğe eklemek için kullanılır.

let testdiv = document.createElement("div")
testdiv.textContent = "Abisi bak hele buraya!"

let testdiv2 = document.createElement("div")
testdiv2.textContent = "Abisi bakma hele buraya!"

afterBefore.append(testdiv2)
afterBefore.prepend(testdiv)

// closest methodu seçilen elemana en en yakın öğeyi döndürür.

const h1close = document.querySelector(".h1close")

console.log(h1close.closest("div"))

// getBoundingClientRect methodu seçilen öğenin boyut eve pozisyonunu DOMReact objesi olarak döndürür.

console.log(scrollRight.getBoundingClientRect())

// hasAttribute methodu seçilen elemanın belirtilen niteliğe sahip olup olmadığını kontrol eder.

console.log(scrollRight.hasAttribute("disabled"))

// hasAttributes methodu seçilen elemanın herhangibir niteliğe sahip olup olmadığını kontrol eder.

console.log(scrollRight.hasAttributes("disabled"))

// matches methodu seçilen elemanın belirtilen css seçicisiyle eşleşip eşleşmediğini kontrol eder.

console.log(scrollRight.matches("button"))

// toggleAttribute methodu elemana belirtilen nitelik varsa kaldırılmasını yoksa eklenmesini sağlar.

console.log(scrollRight.toggleAttribute("draggable"))