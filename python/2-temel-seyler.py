# ! Python'da dilediğimiz şeyi ekrana basmak için print() kullanılabilir. 

print("Selam Dünya!")

# ! Eğer string'e çift tırnakla başladıysanız stringin içinde çift tırnak kullanmanız metnin orada bitmesine sebep olur. Bunun yerine escape char veya tek tırnak kullanın (tek tırnakla başladıysanız çift tırnak)

print("Şimdi Şöyle oldu:\"")
# veya
print("Şimdi Şöyle oldu:'")

# ! Python'da diğer dillerin aksine  girinti çıkıntılar kodun çalışmasına etki eder. Örneğin if else'in altına yazacağımız koşullu komutlardan önce boşluk veya tab bırakmassak kod çalışmaz.

# Doğru
if 3>2:
    print("selam")

# Yalnış (test için kareleri yani commentlar için kullandığımız bu tontişleri kaldırın.)

#if 2>2:
#print("merhabalar")