// JSON, yani JavaScriptObjectNotation, JavaScript'teki objelerden türetilmiş bir syntaxa sahiptir ama sadece string veya number verilerini tutar.
// JSON'un ana amacı hafif ve JavaScript ile entegre olan, taşıma ve depolama için bir veri formatı oluşturmaktır. XML'den daha kolay bir alternatiftir.
// 16-json.json dosyasına bakın.

// JSON dosyasını dosyada senin veya yazılımın işlem yapmasını sağlamak için .parse() kullanarak JavaScript objesine dönüşütrebiliriz.

const usersText = `{
"users":[
  {
    "firstName":"Asabeneh",
    "lastName":"Yetayeh",
    "age":250,
    "email":"asab@asb.com"
  },
  {
    "firstName":"Alex",
    "lastName":"James",
    "age":25,
    "email":"alex@alex.com"
  },
  {
  "firstName":"Lidiya",
  "lastName":"Tekle",
  "age":28,
  "email":"lidiya@lidiya.com"
  }
]
}`

const usersObj = JSON.parse(usersText, (key, value) => {
  let newValue =
    typeof value == 'string' && key != 'email' ? value.toUpperCase() : value
  return newValue
})
console.log(usersObj)

// Ve evet json yazmaya üşendiğim için örneği Asabenehten aldım...

// Objeyi JSON dosyasına dönüştürmek için ise .stringify() kullanabiliriz.

JSON.stringify(obj, replacer, space)

// Obj, objemizi, replacer, filtrelemeyi space ise boşlukları sağlıyor. Filtreleme yapmak istemiyorsak undefined değeri girebiliriz.
// Replacerı kullanmak için bir array açıp döndürülmesini istediğimiz key değerlerini giriyoruz daha sonra sadece o key value değerleri dönüyor.