// Bazen bir işi yapmak için birisi bizden söz ister ve bizde veriririz o sözü. Sözü tutarsak insanların bize olan güveni artarken sözümüzü tutmamak güvenleri kırabilir.
// JavaScript'teki Promiseslar benzer mantıkta çalışır.
// Promiseler JavaScript'te asenkron işlemleri* daha kolay yönetmemizi sağlar. Değeri hemen döndürmek yerine değeri ileride döndüreceğine söz verir.
// Promiseler şu üç aşamanın birinde olabilir.

// Pending | Daha işlem yerine getirilmedi ama red de edilmedi. Beklemede.
// Fullified | İşlem başarıyla yerine getirildi.
// Rejected | İşlem başarısız.

// DipNot: *Asenkron işlemler, bir yazılımın aynı anda birden fazla işi yapmasına denir. Donup kasmayan daha akıcı yazılımlar oluşturulmasına olanak sağlar.
// JavaScript'te eskiden callback hell ile asenkron işlemler yazılmaya çalışılıyordu. "doThis(() => { doThat(() => { doOther(() => {...}) }) })" 
// Dosya okuma, ağ isteği gibi işlemler kısmen uzun sürdüğü için bu işlemleri yaparken CPU bu işlemleri kenara atıyor ve bitince haber et diyor.
// Asenkron işlemler olmasaydı örneğin tarayıcılarda bir websitesine girmeden önce UI kilitlenirdi.
// JavaScript tek thread ile çalıştığı için aslında asenkron işlem de yapamaz. Asenkron işlemleri Node.js veya tarayıcının WA gibi yardımcı teknolojilerine verir ve işlemler bitince onları toplayıp kullanıcıya gösterir.

// Neyse, yine çok uzattık. Promiselerden önce Callbacki anlatalım. err ve result parametrelini alıyor. hata alınırsa err'i alınmassa result çalışır.

const biseyYap = callback => {
  setTimeout(() => {
    const skills = ['HTML', 'CSS', 'JS']
    callback(false, skills)
  }, 2000)
}

biseyYap((err, result) => {
  if (err) {
    return console.log(err)
  }
  return console.log(result)
})

// Promise constructer ile de oluşturabiliriz pektabii.

const skillInfo = new Promise((resolve, reject) => {
    setTimeout(() => {
        const skill = ["C++", "GTK+", "RUST"]
        if (skill.length > 0) {
         resolve(skills)
        }
        else {
         reject("Gösterecek bir şey yok.")
        } 
    }, 2000)
})

skillInfo
    .then(result => {
        console.log(result)
    }) 
    .catch(error => console.log(error))

// Fetch API sitelerden veri çekmenin modern bir halidir. Eskiden kullanılam XMLHTTPREQUEST'in aksine daha güçlü ve esnektir.

const url = "htttp://www.youtube.com"
fetch(url)
    .then(response => response.json())
    .then(data => {
        console.log(data)
})
.catch(error => console.error(error))

// Async ve Await promiseleri güzel bir şekilde haleltmenin bir yoludur.

const toplama = async function(a) {
    return a + a
}
toplama(3)

// Bu kodda sadece promise verisi döner, gerçek veri değil. Gerçek veriyi almak için awaiti kullanırız.

const gercekDeger = await toplama(4)
console.log(gercekDeger)

// Promise ile fetch API
const url2 = 'https://restcountries.com/v2/all'
fetch(url2)
  .then(response => response.json())
  .then(data => {
    console.log(data)
  })
  .catch(error => console.error(error))

// Async await ile fetch API
const fetchData = async () => {
  try {
    const response = await fetch(url)
    const countries = await response.json()
    console.log(countries)
  } catch (err) {
    console.error(err)
  }
}
console.log('===== async and await')
fetchData()