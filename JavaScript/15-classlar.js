// JavaScript, önceki notta da bahsettiğimiz gibi OOP bir dildir. Yani JavaScript'teki her şey bir objedir. Obje oluşturmak için classları kullanabiliriz. Class bir obje oluşturucu veya objeler için bir şablon gibi iş görür.
// Bir class oluşturduğumuzda ondan istediğimiz zaman obje oluşturabiliriz, buna "Class Instantiation" denir.
// Classların ana amacı daha az kod yazmaktır.

class orn {

}

// Class Instantiation

class kisi {

}

const Kisi = new kisi()
console.log(Kisi) // Boş obje

// Class Constructor ile obje şablonu yapma

class sablon {
    constructor(isim, soyİsim) {
    console.log(this) // Class'ın kendisi
    this.isim = isim
    this.soyİsim = soyİsim
    }

}
const Sablon = new sablon()
console.log(Sablon)

// Not: "this" classın kendisini ifade eder. Bir classtan tek bir obje oluşturduğumuzda sıkıntı yok. Ama tek bir class ile birden fazla obje oluşturduğumuzda işler karışır.
// this kodun tekrar kullanılabilirliğini arttırırken sadece ait olduğu objenin verileriyle çalışıyor. Ayrıca işleri pratikleştiriyor.
// Artık value değeri undefined olan isim ve soyİsim değerleri oluşturduk bunları doldurmak için:

const Sablon2 = new sablon("Akın", "Birdal") // Artık isim ve soyİsim değerleri Akın ve Birdal.
console.log(Sablon2)

// Eğer daha ekleyeceğimiz bir sürü kişi var ise Sablon3 adında bir değişken oluşturup değerleri değiştirerek ayrı ayrı kişiler oluşturabiliriz. Teker teker obje oluşturmaktan çok daha pratik.
// Classımıza varsayılan değerler de ekleyebiliriz.
// İçerisinde fonksiyon çalıştırabiliriz.
// get methodu ile içerisinden value döndürebiliriz.
// set methodu ile value değerini modifiye edebiliriz.

class sablon2 {
    constructor(
        isim = null,
        soyİsim = null,
        yas = 14,
        sinif = 9
    ) tumIsim() {
        const tumIsim = isim + " " + soyİsim
        return tumIsim  
    }
    get yasDeger() {
        return yas
    }
    set sinifDeger() {
        sinif += sinif
    }
}

const Sablon3 = new sablon2("Akın", "Birdal")
console.log(Sablon3)
console.log(Sablon3.tumIsim)
console.log(Sablon3.yas)
Sablon3.sinifDeger = 13 
console.log(Sablon3)

// Static methoduyla class'ın kendisiyle çağrılan varsayılan değerler ekleyebiliriz.

class sablon3 {
    constructor(temel)
    temel = temel 
    }
    static Zaman() {
       let now = new Date()
        let year = now.getFullYear()
         let month = now.getMonth() + 1
          let date = now.getDate()
           let hours = now.getHours()
            let minutes = now.getMinutes()
    if (hours < 10) {
      hours = '0' + hours
    }
    if (minutes < 10) {
      minutes = '0' + minutes
    }

        let dateMonthYear = date + '.' + month + '.' + year
        let time = hours + ':' + minutes
        let fullTime = dateMonthYear + ' ' + time
    return fullTime
}

console.log(sablon3.Zaman())

// Inheritance ile child class oluşturuyoruz ve ardından ebevbeyn classı çağırarak bir Class'taki tüm method ve değerlere erişebiliriz.

class Inheritance extends /*Çağrılacak class*/ {
    //
}

// Ayrıca super() methodu ile de ebevbeyn classta bulunmayan veya bulunan yeni değerler ekleyebiliriz veya bunları üstüne yazabiliriz.
// Ama örnek yazmaya çok üşendim...