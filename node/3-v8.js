// Node.js'in'de üzerine kurulu olduğu V8, oldukça güçlü ve chromium tabanlı tarayıcılarda kullanılan bir javascript motorudur.
// Node.js'te aktif olarak v8'in durumu hakkında bilgi almak için bu komutları kullanabiliriz

// ? Javascript çöp toplayıcı bir dildir, yani yazılan kod otomatik olarak bellek yönetimi yapılarak çalışır.
// Bilgisayar biliminde bellek bölümleri "Stack" ve "Heap" olmak üzere ikiye ayrılır, Stack ilkel ve basit veri tüleri içinken Heap daha büyük, fonksiyon, obje vs. verileri içindir.
// ?Örn: Stack'te bir objeye işaret eden değişkenin değeri Heap'te saklanır.
// İşte bu komutlarla şu anda V8 yani Node.js'in yönettiği belleğin durumunu inceliyoruz.

const v8 = require("v8")
const heap = v8.getHeapStatistics()

console.log("Heap boyut limiti:", (heap.heap_size_limit / 1024 / 1024).toFixed(2), 'Mega Bayt') // Kodun bilgisayar belleğinden koparabileceği maksimum bellek.
console.log("Toplam heap miktarı:", (heap.total_heap_size / 1024 / 1024).toFixed(2), 'Mega Bayt') // Kodun bilgisayar belleğinden rezerve ettiği alan.
console.log("Kullanılan heap miktarı:", (heap.used_heap_size / 1024 / 1024).toFixed(2), 'Mega Bayt') // Kodun bilgisayar belleğinden o anda kullandığı toplam miktar.

// ? Peki neden sadece Heap'i kontrol ediyoruz da Stack'i etmiyoruz?
// Çünkü Stack'te kontrol edilecek bir şey yok, giren çıkan veriler hızlıca temizleniyor ve anlık işlemler tutuluyor sadece stack bellekte.
// ? Örneğin bir fonksiyon çağrıldığında fonksiyon Stack'te çağrılır ama fonksiyonun kendisi ve verdiği değer heap'tedir. 
// Bu sebeple stack'i incelemek programlamacıya kodun bellek yönetimiyle ilgili herhangi bir ipucu vermez programın çalışma mantığıyla ilgili.

// ! Yani kritik not:
// ! Stack: Uygulamanın işlemci performansı
// ! Heap: Uygulamanın Bellek performansı