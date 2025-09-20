// JavaScript, dış fonksiyonun içine fonksiyon yazmaya izin verir. İstediğimiz kadar iç fonksiyon yazabiliriz. İç fonksiyon dış fonksiyonun değişkenlerine erişirse, buna closure denir.
// Hacı biz niye fonksiyon içine fonksiyon yazalım? Yazsak ne şeyime yarayacak? Derseniz anlatayım:
// Clousre'lar Fonksiyon içinde değer gizlemene olanak sağlar, Hafızalı fonksiyon gibi davranır ve dinamiktir.
// Örneğin API KEY'imizi sakladığımızı düşünelim.

const API_KEY_ORN = "blablablabubirAPIKEYblablablabubirAPIKEY"
console.log(client.API_KEY_ORN) // Erişildi.

function apiClient() {
  const API_KEY = "GizliAnahtar123";
  
  function getUrl(endpoint) {
    return `https://api.ornek.com/${endpoint}?key=${API_KEY}`
  }

  return {
    fetchData: async function(endpoint) {
      const url = getUrl(endpoint)
      const response = await fetch(url)
      return response.json()
    }
  }
}

const client = apiClient()


console.log(client.API_KEY) // Erişilemedi!

client.fetchData("havaDurumu").then(data => console.log(data))

// Başta mantıksız görünen ama güzel bir konsept.
