// Map, JavaScript'te objelerde olduğu gibi bir anahtar ve bir değer çiftlerini tutmak için kullanılır. Fakat özellikle büyük veri setlerinde objelerden daha optimize ve pratiktir.

const map = new Map()
console.log(map)

// Array'den map oluşturma:

const ornArr = [
    "Oslo",
    "Helsinki",
    "Kopenhagen",
    "Berlin",
    "Ankara",
    "Lizbon"
]

const arrMap = new Map(ornArr)
console.log(arrMap)

// .set: Map'e veri ekler.

arrMap.set("Madrid", "Atina")
console.log(arrMap)

// .size: Map'in uzunluğunu döndürür.

console.log(arrMap.size)

// .get: Map'ten veri döndürür.

console.log(arrMap.get("Oslo"))

// .has: Map'teki belirli bir değerin olup olmadığını kontrol eder.

console.log(arrMap.has("Madrid"))

// Map'teki tüm verileri alma:

for (const tumVeri of arrMap) {
    console.log(tumVeri)
}






