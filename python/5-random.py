# random sayılar üretmek istiyorsak random modülünü tanımlamamız gerekir.
from random import getstate
import random 

print(random.random()) # sistem saati ve belirli formüle göre uzun ve rastgele bir ondalık sayı

# seed() methodu rastgele sayı üretilirken oluşuturulacak formülde başlangıç sayısını tanımlar.

random.seed(21)

print(random.random()) # 21'e göre rastgele sayı

# getstate() o anki oluşturulan random sayıyı kaydeder, daha sonra bu sayıya setstate() ile ulaşabiliriz

print(random.random())

state=random.getstate()

print(random.random())

random.setstate(state)

print(random.random())

# getrandbits() içine yazdığımız sayı kadar bit ile random sayı üretir

print(random.getrandbits(2))

# randrange() belirtilen sayılar arasında rastgele sayı oluşturur 

print(random.randrange(1,21)) # 1 ila 20 arası sayı oluştur rastgele
print(random.randrange(1,21,2)) # aynısı ama 2şer 2şer arttırarak bunu yap

# randint() belirtilen sayılar arasında rastgele sayı oluşturur, ama ikinci sayının kendisini de dahil eder. niye böyle bir şey var bende anlamadım

print(random.randint(1,11))

# choice() belirtilen listeden -array- rastgele bir indexi döndürür, bak bu iyiymiş

array = ["merhaba", "selam", "esenlikler", "hay hay", "hello"]
print(random.choice(array))
# fun fact: bir kelime değişkenine bunu atarsanız kelimedeki rastgele bir harfi döndürür

# choices() choice ile benzerdir ama daha fazla özelleştirme imkanı sunar 

print(random.choices(array,weights=[10,5,5,1,2],k=10)) # k=10 adet rastgele kelime döndür, bunların oranlını da weight ile ayarladık

# shuffle() listenin sırasını karıştırır

print(random.shuffle(array))

# sample() shuffle ile aynı şeyi yapar ancak orjinal sırayı değiştirmez, sadece çağrıldığında değiştirip gönderir

print(random.sample(array,k=4)) # içinden 4 adet elementi alıp rastgele diz

# uniform() belirtilen iki sayı arası rastgele sayı döndürür, ondalık olarak

print(random.uniform(22,93))

# triangular() unfirom ile aynı ama üçüncü değer üretilen sayının ona yakınlığını belirtir

print(random.triangular(22,39,25))