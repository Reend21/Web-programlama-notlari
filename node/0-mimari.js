// Node.js; açık kaynaklı, platformlar arası bir JavaScript çalışma ortamıdır (runtime).
// Özellikle yazılımcıların yüksek performanslı HTTP sunucuları, web uygulamaları ve scriptler yazmasına olanak tanır.
// Node.js, olay güdümlü (event-driven) ve asenkron bir mimariye sahiptir. 
// Tek bir ana thread (iş parçacığı) üzerinde çalışmasına rağmen, arka plandaki Libuv kütüphanesi sayesinde çoklu işlemleri birbirini engellemeden (non-blocking) yapabilir.

// Node.js istekleri basitçe şu adımlarla işler:

// ! 1 - Client Request
// İstemciden gelen tüm istekler doğrudan Event Loop'un önüne düşer.

// ! 2 - Event Loop
// Event Loop gelen isteği analiz eder. 
// Eğer işlem basit ve non-blocking, yani kendi halinde çalışan gariban bir iş ise, Event Loop bunu kendi üzerinde anında çalıştırır.
// Eğer işlem karmaşık, ağır veya işletim sistemi kaynaklarına bağlıysa (dosya okuma, şifreleme vb.), bu işi Thread Pool'a (İşçi havuzuna) devreder.
// Event loop sayesinde Node.js görevleri sisteme verip daha sonra bunları çağırarak (callback) tek çekirdek ile asenkron işlem yapabilir.
// Event Loop sıralaması şu şekildedir (kod bu sıralamaya göre çalışır):
/*
1 - Ana kodu önce bir aradan çıakrt (senkron kod)
2 - Mikroişleri hallet (Promises, process.nextTick)
3 - Zamanlayıcıları çalıştır (setTimeout, setInterval)
4 - I/O Çağrılarını işle (file system, network operations)
5 - setImmediate çağrılarını işle
6 - Son olarak "close" eventleri hallet (socket.on('close'))
*/

// ! 3 - Thread Pool
// Arka plandaki işçiler kendilerine verilen ağır işi tamamlar. İş bittiğinde, bu işe bağlı olan callback, "Callback Queue" içine atarlar.

// ! 4 - Event Loop ve Response
// Event Loop sürekli kendisini kontrol eder. Ana çalışma yığını (Call Stack) boşaldığı anda, Callback Queue'daki tamamlanmış işleri sırayla alır ve çalıştırarak sonucu istemciye geri gönderir.

const fs = require("fs")

fs.readFile("file.txt", "utf8", (err, data) => {
    if (err) throw err
    console.log("kimseyi engellemiyorum!")
})
console.log("Bu dosya sistemindeki file.txt okunmadan önce çalışır! Çünkü bu daha basit bir koddur ve Event Loop'un kendisi halleder.")

const data = fs.readFileSync('myfile.txt', 'utf8')
console.log("Bu işlem data'dan sonra çalışır, çünkü data verisindeki Sync, o satırdaki işlem bitene kadar tüm node.js'i durdurur.")

// Senkron kod başa çıkması daha kolay olsada gecikmelere sebep olabilir, asenkron kod ise başa çıkması nispeten daha zordur ancak daha iyi performansa sahiptir.

// Node.js özellikle şu alanlarda kullanılır:
// ! Dosya işlemleri (I/O), Veritabanı sorguları ve Network işlemlerinin aynı anda gerçekleşmesi gereken uygulamalar.
// ! Mesajlaşma uygulamaları gibi gerçek zamanlı gerçekleşmesi gereken işlemler.
// ! API ile çalışan uygulamalar
// ! Mikroservisler

// ? CPU Odaklı uygulamalar, event loop'u zora sokabileceği için node.js CPU odaklı yazılımlar için pek iyi bir dil değildir.

// Yine de sonuç olarak büyük ekosistem (npm), geniş destek, sağlam asenkron I/O ve bağlantı yönetimi ve javascriptin üzerine yazılmış olması Node.js'i popüler bir tercih kılar.