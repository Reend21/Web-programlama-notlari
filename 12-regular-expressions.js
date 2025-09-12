// Regular Expression, herhangi bir verideki belirli paternleri bulmamızı kolaylaştıran ufak bir programlama dilidir.
// RegExp pattern ve flag değeri alır.

let string = "Bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla Bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla Bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla Bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla Bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla API_KEY = 111111111 Bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla Bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla Bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla Bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla Bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla Bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla"
let pattern = "API_KEY"
let flag = "gim"
let regEx1 = new RegExp(pattern, flag)

// veya:

let regEx2= /API_KEY/gim

// test() RegExp methodu patternin eşleşip eşlemediğini kontrol eder, boolean döndürür.

const result1 = pattern.test(string)
console.log(result1)

// match() Paternin eşleşip eşleşmediğini kontrol eden ve tüm eşleşen kısımları array olarak döndürür. "g" flagını kullanmazsak index, input ve group bilgilerini de döndürür.

const result2 = pattern.match(string)
console.log(result2)

// search() Paterni arar, bulursa indexini bulamazsa -1 döndürür.

const result3 = pattern.search(string)
console.log(result3)

// replace() Paterni arar, daha sonra paterni verilen değerle değiştirir.

const string2 = "Python is the most beautiful language that a human begin has ever created.\
 I recommend python for a first programming language"

const replacedStr = string2.replace(/Python/python/g, "JavaScript")
console.log(replacedStr)

// "regex.png" Dosyasını inceleyin. Flag olarak kullanılabilecek tüm değerler bir tabloda gösterilmiş.

// Square bracket ile paterni oluştururken lower-upper case ayrımı yapmamasını sağlayabiliriz.

const ornPattern = "[Mm]eyve"