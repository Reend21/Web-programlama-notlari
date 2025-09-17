// Web Storage, veri depolamak için yeni bir HTML5 API'ıdır. Cookilerin aksine daha güvenli ve daha yüksek boyutlar saklayabilir. (5mb'ye kadar.)
// Web Storage sessionStorage ve localStorage olmak üzere ikiye ayrılır.

// localStorage, son kullanım tarihi bulunmayan verileri saklar. Keyler ve valuelar her zaman string olur.
// sessionStorage ise sadece web sitesi açıkken depolanır, yani websitesi kapatıldığında veriler silinir.

// Web Storage'in kullanım alanları arasında:
/*
Geçici veri depolama,
Kullanıcıların market sepetlerindeki ürünleri hatırlama,
Offline olarak erişilebilir,
User Authentication olarak kullanılabilir.
*/

// localStorage'e veri eklemek için:

localStorage.setItem("Ad", "Akın Birdal")
console.log(localStorage)

// Array veya obje eklemek istiyorsak önce onu stringify etmeliyiz. Önceki dersten hani? Çaktın mı?

const skiller = ["HTML", "CSS", "JAVASCRIPT", "NODEJS", "PHP"]

const skillerLocal = JSON.stringify(skiller, undefined, 4)
localStorage.setItem("skiller", skillerLocal)
console.log(localStorage)

// localStorage'den veri almak için:

localStorage.getItem("Ad")

// localStorage.removeItem(key) localStorage'den veri siler
// localStorage.key(index) localStorage'den veri alır.
// localStorage.clear()  Local Storage'i temizler.