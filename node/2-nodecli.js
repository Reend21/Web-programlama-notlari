// ! Node.js'İ terminal üzerinden (CLI) ile kullanma.

// ? Projeyi başlatma

// node app.js | Dosyayı terminalden başlatır.
// node --watch | Dosyayı başlattıktan sonra gelen değişiklikleri de hesaba katar, sayfaya f5 atıldığında değişiklikler gelir.
// node | terminalde node.js'in REPL'ini çalıştırır, terminalde javascript kodları çalıştırılabilir.
// .help yardım .exit çıkma

// ! Proccess argv
// Javascript dosyasında bir değişkene process.argv[0 ve 1'den büyük bir sayı] değeri atanırsa terminalde o sayıdaki argümanı alır.
// Array'in ilk argümanını node kendisine, ikinci argüman ise dosyanın kendisindedir.

const islem = process.argv[2]
// node app.js (islem değişkenine verilmek istenen değer)

// ! Enviroment Variables
// Node sunucusunu kendi işletim sistemimizde istediğimiz porttan açarız, e peki sunucuya gönderince? Production ve Testing'de ikidebir port mu değiştireceğiz? Hayır.
// Javascript dosyamızı başlatmadan önce envismi=envdegeri node app.js ile bu env'leri değiştirebilir, veya büyük ölçekli projelerde proje dizinine .env koyarak bunu halledebilriiz.
// (Kendi .env'inizi repoya yollamayın bi zahmet, example.env oluşturun bunun yerine.)

let sunucum = require("http")
const port = process.env.PORT || 8394 //

sunucum.createServer(function (req, res) {
    res.end("yo!")
}).listen(PORT)

// ! Debugging ve İnceleme argümanları

// ? Projeyi inceleme modunda başlatır, tarayıcdaki inspector gibi backend'i incelemene olanak sağlar. chrome://inspect ile erişilir. Firefox'ta ise about:debugging ile erişilir ve toolbox'tan remote ve browser toolbox debuggin'in etkinleştirilmesi gerekir.
// node --inspect app.js

// ? Inspect'in akisne kodu direkt çalıştırmaz, debuggin veya inspect sayfasında geliştiricinin kodu satır satır çalıştırmasına izin veriri.
//  node --inspect-brk app.js

// ? Inspect sunucusunu başka bir porttan açar.
// node --inspect=9222 app.js

// ? Ağ veya internetteen debugging sunucusuna erişmeni sağlar. (bir zahmet productionda kullanma)
// node --inspect=0.0.0.0:9229 app.js 

// ? Node Version Manager | Node versiyonlarını kontrol eder.
// nvm install versiyon | spesifik node versiyonunu indir.
// nvm use versiyon | spesifik versiyonu kullan.
// nvm ls | indirilen versiyonları listele.

// ? Node Package Manager | Node paketlerini-kütüphanelerini indirmeye ve yönetmeyi sağlar.
// npm init | yeni bir proje oluşturur.
// npm install | projedeki bağımlılıkları yükler.
// npm update | paketleri günceller.
// npm audit | paket sıkıntılarını kontrol eder.

// ? Bazı node flagleri
// --version veya -v node sürümünü gösterir, --v8-options v8 sürümünü gösterir, --help ise node manual'ini açar.

// ! Çalışma davranışını ayarlama

// ? Başlatmadan syntax'ı kontrol et.
// node --check app.js

// ? Node.js projeyi çalıştırdığında sana bazen bazı uyarılar gösterir ama hangi satırda-dosyada kaynaklandığını söylemez, bu argüman onu söyletir.
// node --trace-warnings app.js

// ? Projenin kullanabileceği maksimum ram değerini ayarlar.
// node --max-old-space-size=4096 app.js

// ? Projeyi çalıştırmadan önce bir modülü önyükler.
// node --require dotenv/config app.js