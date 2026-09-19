# ! Her programlama dilinde olduğu gibi python'da da birden fazla veri türü vardır.

# metin tipleri - string - str

stringVar = "benbirstringim"

# sayısal tipler - numeric types - int & float & complex

intVar = 5 # tam sayı
tupleVar = 5.5 # ondalıklı sayı
complexVar = 2j # complex sayı

#  sekans tipleri - sequence types - list & tuple & range

arrayAkaListVar= ["Bu bir array yani", "listeyim pythondaki ismiyle"]
tupleVar = ("bu bir tuple'dır", "arraylere benzer ancak içindeki", "değerleri değiştirmek için", "liste dönüştürmeniz gerekir")
rangeVar = range(7) # çalıştırıldığında 0,7 döndürür, harbiden 0 ile 7 arasındaki tüm sayıları ekrana bastırmak için * operatörü ile printleyin.

print(rangeVar)
print(*rangeVar)
rangeToList = list(rangeVar)
print(type(rangeVar))
print(type(rangeToList))

# sözlük (obje) tipi - dict types - dict

dictVar = {"isim": "mehmet", "yaş": "yetmiş"}
#dictler aslında dümdüz objedir ama python geliştiricileri mal olduğu için obje yerine dict demeyi uygun görmüşler, veya belkide o zamanlar daha obje diye bişey yoktur veya cahil cahil konuşuyorumdur.

# set tipleri - set types - set & frozenset

setVar = {"Bir", "iki"} # kısacası obje ama key value ikili değeri yerine sadece tek değer var.
frozenSetVar = frozenset({"merhaba", "selam"}) # bu setle aynı ama kodda sonradan değiştirmek için ekstra işlem gerektirir.

# boolean tipler - boolean types - true & false (bool)

boolVar=True # veya false, boolean işte. olumlu (true) ve olumsuz (false) değerlerini işlemek için kullanılır.

# none tipi - none types - none

noneVar =None # yani null değeriyle aynı.

# ikili tipler - binary types - bytes & bytearray & memoryview

bytesVar = b"bytesDegeri" # değişkeni doğrudan rame bytes olarak işle, non-ascii karakterler işlenemez
bytesVar2 = bytes("çöş", "utf-8") # non ascii karakterler böyle işlenebilir
bytesArrVar = bytearray([21]) # ascii karakter diziliminde 21 sayısına denk gelen karakteri bastır, bu durumda NAK tuşu karakteri.
memViewVar = memoryview(bytes(44)) # 44 değeri memoryde hangi adreste tutuluyor

print(memViewVar)

# ayrıca set() veya veri tipinin ismi ile fonksiyonun içine yazacağımız veri tipini kendi veri tipine benzer veri tiplerine dönüştürebiliriz. Üstte örneğini verdik ve tüm veri tipi gruplarında iş görüyor.