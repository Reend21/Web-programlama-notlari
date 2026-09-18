# Python'da diğer programlama dillerinin aksine değişken atamak için illa tip belirtmemize gerek yoktur.

x=5
z="Selam!"

print(x)
print(z)

# Değişkenlerin tipi veyahut değeri sonradan değiştirilebilir, ama kodda en son yazılan değer hakiki kalır.

c=5
c=6

print(c) # 6 döndürecek

# İlla bir değişkenin özel bir tip ile tanımlamak istiyorsak "Casting" yapabiliriz.

y=str("selam") # string
ya=int(3) # tam sayı (integrer)
yaa=float(4) # ondalık sayı (float)

# Bir değişkenin tipini öğrenmek için type() kullanabiliriz.

print(type(y))
print(type(ya))

# Değişkenlere tek satırda değer atayabiliriz.
pa,da,ka="Selam", "Merhaba", "Esenlikler"
la=sa=ba="Hola"
name="Akın"
lastName=name

print(pa)
print(da)
print(ka)
print(la)
print(sa)
print(ba)
print(name)
print(lastName)

# Array'lerin içinden veri çekip (unpacking) bu değerleri yine değişkenlere atayabiliriz

sayilar=[1,2,3,4,5]
aaa,bbb,ccc,ddd,eee=sayilar
print(aaa)
print(bbb)
print(ccc)
print(ddd)
print(eee)

# ! Değişken tanımlanırken uyulması gereken kurallar:
# Değişkenler sadece _ veya harf ile başlayabilir
# Değişkenlerde sadece alfanumerik (Az 0-9) karakterler kullanılabilir
# Değişkenler küçük büyük harfe duyarlıdır (age ile AGE aynı şey değil)
# Değişken ismi Python'un kullandığı anahtar isimlerden biri olamaz (whie, else gibi)