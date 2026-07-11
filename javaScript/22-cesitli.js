// ? preventDefault | HTML'de bazı elemanların varsayılan davranışları vardır, örneğin a etiketinin href değerine bakarak kullanıcıyı o linke yönlendirmesi gibi.
// * Bu metod, o elementin davranışını deaktive etmemizi sağlar.

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

// ? stopPropagation | Yayılmayı engellemek için kullanılır, iç içe geçmiş elementlerde en alttaki elementi çalıştırdığımızda üstteki diğer elementler de etkilenir, bunun olmasını istemiyorsak kullanılabilir.


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

// * Ek not | stopImmediatePropagation methodu ise sadece bir eventin çalışmasını sağlar.
// * Ek not 2 | eventListener'ı yazarken en sağa virgül ile true değeri bırakarak yayılma yönünü değiştirebiliriz. 

// ? CSSStyleDeclaration | JS'te CSS tanımlamaları için .style kullanmayı öğrenmiştik, bu methodlar ise daha kapsamlı. (Örnekler en azından şu an gerçek değil.)
// ? setProperty() | CSS özelliğini ekler.
console.log(document.styleSheets)
document.styleSheets[0].cssRules[0].style.setProperty('color', 'blue')

// ? removeProperty() | CSS özelliğini silmek için kullanılır.)
document.styleSheets[0].cssRules[0].style.removeProperty('color')

// ? getPropertyValue() | CSS özelliğinin değerini döndürür.
console.log(
      document.styleSheets[0].cssRules[0].style.getPropertyValue('color')
    )
// ? getPropertyPriority() | CSS özelliğinin important olup olmadığını belirler.
console.log(
      document.styleSheets[0].cssRules[0].style.getPropertyPriority('color') === 'important' ? 'important kullanilmis' : 'cokta onemli degil!'
    )

// ? MediaQueryList | CSS tarafında responsive tasarım yaptığımız sorguları JS'te de kullanabiliriz.
const mediaQuery = window.matchMedia("(max-width: 480px)")
function mobileDetectHandy() {
  if (mediaQuery.matches)
    document.body.classList.add("mobil")
  else {
    document.body.classList.remove("mobil")
  }
}
mobileDetectHandy()
console.log(mediaQuery.matches)
console.log(mediaQuery.media)
mediaQuery.addEventListener("change", mobileDetectHandy)

// designMode | Belgenin dizayn modunda olup olmadığını kontrol eder. 
document.designMode = 'off' // on

// ? SelectionStart ve SelectionEnd | Bir inputtaki kullanıcının o an seçtiği değerleri döndürmemizi sağlar.

const textarea = document.querySelector(".textarea")

textarea.addEventListener("select", e => {
  console.log(
    e.target.value.substring(
      e.target.selectionStart,
      e.target.selectionEnd
    ) 
  )
  console.log(e.target.selectionStart, e.target.selectionEnd)
})

// ?  setRangeText | Başlangıç ve bitiş indislerine göre seçilen değeri verilen değer ile değiştirir. Yukarıdaki örneğimizi biraz daha genişletelim.
const preview = document.querySelector('.preview')
const button = document.querySelector('.action-btn')

let start = 0
let end = 0

textarea.addEventListener('mouseup', () => {
  start = textarea.selectionStart
  end = textarea.selectionEnd
})

button.addEventListener('mousedown', e => {
  e.preventDefault()

  const selected = textarea.value.substring(start, end)
  const replaced = `<i>${selected}</i>`

  textarea.setRangeText(replaced, start, end, 'end')
  preview.innerHTML = textarea.value
})

// ? stepUp ve stepDown | Input etiketlerinde arttırıp azaltılabilen date veya number gibi tiplerin değerini azaltıp arttırmamızı sağlar.

const inputs = document.querySelectorAll('input')
	const incrementButton = document.getElementById('increment-button')
	const decrementButton = document.getElementById('decrement-button')

	incrementButton.addEventListener('click', () => {
		inputs.forEach(input => {
			input.stepUp()
		})
	})

	decrementButton.addEventListener('click', () => {
		inputs.forEach(input => {
			input.stepDown()
		})
	})

// ? showPicker | Dosya seç inputu gibi inputlarda seçicinin gösterilmesini sağlar.

const file = document.querySelector(".file")
const filebtn = document.querySelector(".filebtn")

filebtn.addEventListener("click", () => {
  file.showPicker()
})

// ? elements | HTML'deki form elemanlarının tamamını almamızı sağlar.

const form1 = document.getElementById("form1")

console.log(form1.elements)

// ? forms | Tüm form elemanlarını görür, istenilen veya tüm formları döndürür.

console.log(document.forms)
console.log(document.forms.form1)

// ? submit | Form elemanı gönderilirken özelleştirmeyi sağlar.

const submitBut = document.getElementById("submit-btn")
submitBut.addEventListener("click", () => {
  setTimeout(() =>
      document.forms.form1.submit()
   , 1000)

})

// ? reset | Form elemanlarının içeriğini temizler.

const resetBut = document.getElementById("reset-btn")
resetBut.addEventListener("click", () => {
  document.forms.form1.reset()
})

// ? validity | Form elemanının geçerli olup olmadığını kontrol eder.
// ? setCustomValidity ve reportValidity | Validasyon için özel mesaj tanımlamamızı sağlar. 
// ? checkValidity | Form öğresinin geçerli olup olmadığını döndürür.

function checkValidity(element) {
		if (element.validity.badInput) {
			element.setCustomValidity('Geçersiz değer adamım!')
		} else if (element.validity.patternMismatch) {
			element.setCustomValidity('Geçersiz Format')
		} else if (element.validity.rangeUnderflow) {
			element.setCustomValidity('Minimum değerden daha az')
		} else if (element.validity.rangeOverflow) {
			element.setCustomValidity('Minimum değerden daha fazla')
		} else if (element.validity.stepMismatch) {
			element.setCustomValidity('Adımda bir sıkıntı var')
		} else if (element.validity.tooLong) {
			element.setCustomValidity('Çok uzun be gardaş')
		} else if (element.validity.tooShort) {
			element.setCustomValidity('Bu da çok kısa kaldı')
		} else if (element.validity.typeMismatch) {
			element.setCustomValidity('Tipsiz misin biraz?')
		} else if (element.validity.valueMissing) {
			element.setCustomValidity('Buralar hep dutluk!')
		} else {
			element.setCustomValidity('')
		}
		element.reportValidity()
  }

	form1.addEventListener('submit', e => {
		e.preventDefault();
		[...e.target.elements].forEach(element => {
			console.log(element.validity)
		})
	})

document.forms.form1.addEventListener('submit', e => {
		[...document.forms.form1.elements].reverse().forEach(element => {
      e.preventDefault();
			checkValidity(element)
      // elemanın kontrolünü anlık olarak yapmaya devam et
      element.addEventListener('input', function(e) {
				checkValidity(e.target)
      })

    })
    if (e.target.checkValidity()) {
      e.target.submit
    }
})

// ? Event ve eventDispatch | Bir olayı simüle etmek için bu fonksiyon kullanılır.
// ? isTrusted | Bir olayın kullanıcı tarafından mı yoksa otomatik yani programatik olarak mı gerçekleştiğini döndürür.

const eventBtn = document.getElementById("event")

eventBtn.addEventListener("click", e => {
  if (e.isTrusted) {
    console.log("Kullanıcı etkinliği")
  } else {
    console.log("bot etkinliğ")
  }
  console.log("butona tıklandı beybi")
})

eventBtn.dispatchEvent(new Event("click"))

// ? customEvent() | Önceden tanımlı olaylar yerine özel olayları tetikleyebiliriz.
const tab = document.getElementById('tab')
  const items = tab.querySelectorAll('nav button')
  const contents = tab.querySelectorAll('section')

  // ilk elemana active classi ekleyelim
  items[0].classList.add('active');

  // ilk eleman haric digerlerini gizleyelim
  [...contents].filter((item, key) => key !== 0).forEach(content => content.style.display = 'none')

  // tab degistirme
  items.forEach((item, index) => item.addEventListener('click', e => {
		items.forEach((item, i) => {
			if (i === index) {
				item.classList.add('active')
      } else {
				item.classList.remove('active')
      }
    })
    contents.forEach(content => content.style.display = 'none')
    contents[index].style.display = 'block'

    // tabChanged adinda ozel bir olay tetikleyelim
    tab.dispatchEvent(
			new CustomEvent('tabChanged', {
				detail: {
					tab: index
				}
			})
    )
  }))

  // ozel olayi dinleyelim
  tab.addEventListener('tabChanged', e => {
		console.log('tab degisti', e.detail)
  })