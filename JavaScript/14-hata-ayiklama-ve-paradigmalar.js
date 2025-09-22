// Javascript Loosly-Typed (veya dynamicly-typed) bir dildir. Yani değişkenlerin tipini önceden belirtmek zorunda değiliz ve daha sonradan değişkenleri farklı veri türleriyle değiştirebiliriz.
// Strongly-Typed dillerde ise tam aksine böyle bir şansımız yok.

// (JavaScript - Loosly-Typed)
let a = 0 // Number
a = "Merhaba!" // Yeniden atadık, artık a number yerine string verisini tutuyor. Ek işleme gerek yok.

// (C - Strongly-Typed)

// int x = 5; Number
// x = "Merhaba!" Derleme sırasında hata: String değeri x'e atanamaz.

// Loosly-Typed dillerin (Python, JavaScript, PHP) avantajları: Daha esnek, kullanıcı dostu, hızlı ve okunabilir bir kod sağlar.
// Loosly-Typed dillerin dezavantajları: Hataları izlemek zorlaşabilir, Derleyici veri tiplerini önceden bilmediği için optimizasyon yapamaz ve hatalar runtime'da farkedildiği için yazılımcıyı uğraştırır.

// Strongly-Typed dillerin (C, Rust, Java) avantajları: Hata derleme zamanında göründüğü için yazılımcının işi kolaylaşır, Optimize edilebilir ve büyük projelerde daha iyidir.
// Strongly-Typed dillerin dezavantajları: Daha fazla kod yazılır, esneklik azalır ve pratik değildir.

// Hazır loosly-strongly typed farkına değindik gelin JavaScript'in paradigmalarını da açıklayalım.
// Paradigmalar, programlama dillerini özelliklerine göre sınıflar. Diller birden fazla sınıfa girebilir.

// JavaScriptin 4 paradigması şunlardır:

// Event-Driven (Olay tabanlı) programlama: Program, kullanıcı veya sistemin tetiklediği olaylara (eventlere) göre çalışır.
// Örneğin JavaScript'te bir butona tıkladığımızda aydınlık temadan karanlık temaya geçmemiz Event-Driven bir programlamadır.
// Not: C gibi Event-Driven olmayan dillerde ya polling (sürekli kontrol) ile kodu belirli bir işlem gerçekleştiğinde çalıştırırz yada GTK veya QT gibi GUI kütüphaneleri kullanarak olay tabanlı programlama yapabiliriz.
// Veya İşletim sistemler ve Gömülü sistemlerde Interrupt özelliği ile olay tabanlı programlama işlemciye gönderilen sinyaller ile halledilir.

// Fonksiyonel (Functional) programlama: Fonksiyonlar değişkenlere atanabilir, parametre olarak geçebilir veya başka fonksiyonları döndürebilir. Saf fonksiyonlar ve Higher-order fonksiyonlar gibi kavramları vardır.
// Örneğin JavaScript'te map, filter ve reduce gibi fonksiyonlar fonksiyonel programlamaya girer.

// Zorunlu (Imperative) programlama: JavaScriptin en temel paradigmasıdır. Yazılımcı kodun ne yapacağını değil, nasıl yapacağını programlama diline mala anlatır gibi anlatır.
// Örneğin döngüler, if else ve yeniden atamalar zorunlu programlamaya girer.
// Programlama dili Imperative değil ise ya mantıksal dillerde mantıksal kurallar yazılır. (örn: prolog) eğer dil mantıksal değilse pattern matching yapılır. Bunlar If else gibi akışı kontrol etmez, doğruluğu kontrol eder.

// Nesne yönelimli (Object-Oriented, OOP) programlama: Kod, objeler etrafında şekillenir. Objeler verileri ve metodları içerir.
// Örneğin JavaScript'teki class OOP yapmamıza olanak sağlar.

// Diğer paradigmalar: Logic programming (Mantıksal), Concurren / Parallel programming (aynı anda birden fazla iş), Reactive programming (React, vue gibi diller.) ve Declarative Programming (Bildirimsel, Nasıl değil ne yapılacağını söylersin. Imperative ile karıştırma,)

// Neyse çok uzattık, hata ayıklamaya geçelim.
// JS try-catch-finally metoduyla hataları ayıklar.

try {
    console.warn("deneme 1, düt, düt.")
} catch (err){
    console.log(err)
} finally {
    console.log("İhtiyaç halinde.")
}

// İlk try kısmı çalışarak kodu dener, hata bulursa catchi sonra finallyi, bulmazsa finallyyi çalıştırır.

// ayrıca try catch finally üçlüsüne throw'u da ekleyebilirz.

function bolme(a, b) {
    try {
        if (b === 0) {
            // 
            throw new Error("Sıfıra bölme hatası!");
        }
        let sonuc = a / b;
        console.log("Sonuç:", sonuc);
    } catch (hata) {
        console.log("Hata yakalandı:", hata.message);
    } finally {
        console.log("İşlem tamamlandı.");
    }
}

bolme(10, 2)
bolme(10, 0)

// Hata türleri
// ReferenceError | Kullanılmaya çalışılan bir değer tanımlanmamışsa.
// SyntaxError | Yalnış sözdizimi kullanılmışsa.
// TypeError | Genel hata kodu.


