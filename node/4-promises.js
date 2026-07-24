// ! Promise'leri hatırladınız mı? Pek hatırlamak isteyeceğiniz şeyler değiller ama maalesef size yine hatırlatmak zorundayım.
// Promise'lere bir çok yeni kullanabileceğiniz method ekleniyor. Hepsine ufak bi göz atalım isterseniz.

// ? .then() | Promise'in başarılı olup olmadığına göre (method argümanı) değer döndürür.
const myPromise = new Promise()

myPromise
  .then(
    result => console.log(result),
    error => console.error(error)
  );

// ? .catch() | Aslında .then'de rejected promiseleri halletmek ile aynı şey.
//   .catch(error => console.error(error));

// ? .finally() | İstenilen kodu promise'ın başarılı olup olmamasına bakmaksızın çalıştırır.
// .finally(() => console.log('Operation completed'));

// ? .all() | Birden fazla promise'i paralel olarak işler ve hepsinin bitmesini bekler. Herhangi bir promise ret yerse hemen başarısız olur.
const fs = require('fs').promises;
const promise1 = Promise.resolve('İlk Sonuç');
const promise2 = new Promise((resolve) => setTimeout(() => resolve('İkinci sonuç'), 1000));
const promise3 = fs.readFile('data.txt', 'utf8'); // Read local file instead of fetch

Promise.all([promise1, promise2, promise3])
  .then(results => {
    console.log('Results:', results);
  })
  .catch(error => {
    console.error('toplu promisede birşeyler yalnış gitti:', error);
  });

// ? .race() | Eğlenceli bir method, birden fazla promise'ten başarılı veya başarısız olması farketmeksizin ilk sonuç döndüreni işler.

Promise.race([promise1, promise2])
.then(result => {
    console.log("vee yarışı kazanannn:", result)
})

// ? Dip not: Error handling için native olarak .catch kullanabilir, veya promise'de new Error oluşturarak .then'de kendi error handlerınızı yapabilirsiniz.
// ! Dip not 2: async await için w3schools'taki şu sayfayı inceleyein, bunun için ayrı bir sayfa oluşturmadım çünkü promise'lerin aksine yeni bir şey yok: https://www.w3schools.com/nodejs/nodejs_async_await.asp