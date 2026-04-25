# IP yani Internet Protocol Adress, internet üzerinde cihazların birbiriyle iletişim kurması için oluşturulan bir ağ kimliğidir.

# Ev, Ofis gibi alanlarda aldığım IP adresi modem tarafından verilir ve bu adres ile dışarıya yani internete açılamaz. Bu adrese Private (Local) IP adresi denir.
# İnternete açılırken ise aldığımız IP adresi NAT ile ISS'imiz tarafından Public (External) IP'e dönüştürülür ve bu sayede dışarıya açılabiliriz. 

# Private IP, modemin aynı ağdaki cihazları birbirinden ayırmak için kullanır. Şu şekilde olabilir:

    10.0.0.0 -> 10.255.255.255
    172.16.0.0 -> 172.31.255.255
    192.168.0.0 -> 192.168.255.255 

# NAT, Private Adresleri Public'e dönüştürür. Bu sistem IPv4'ün adres kıtlığından dolayı geliştirildi.
https://tr.wikipedia.org/wiki/NAT

# IP adresiyle paket gönderip alırken paketin hedefe ulaşmasını garanti etmez, dümdüz paketi gönderir ve gerisine bakmaz. Buna Connectionles bağlantı denir.

# Ip adresi 4 oktetten oluşur, ilk üç oktet netowkrü, son oktet hostu ifade eder.
# örn: 192.168.1.1 -> 192.168.1 Network .1 ->Host
# Networkü doğru bulan router son oktet yanı host değerine bakarak networkte doğru cihaza ulaştırır veriyi.

# IP adresleri kullanım alanına göre 5'e sınıflandırılır.

A 0.0.0.0 - 127.255.255.255 Devasa şirketler, devletler, büyük ağlar
B 128.0.0.0 - 191.255.255.255 Üniversiteler, büyük kurumlar, orta büyüklük
C 192.0.0.0 - 223.255.255.255 Ev, ofif, yaygın
D 224.0.0.0 - 239.255.255.255 Multicast
E 240.0.0.0 - 255.255.255.255 Deneysel

# Bu sınıflandırma pratik olarak öldü, yerine CIDR yani Classless Inter-Domain Routing sistemi geldi.
# Bu sistem yine NAT gibi IPv4'ün adres kıtlığından dolayı icat edildi, özellikle A veya B sınıfının sınırındaki kuruluşlarda israfı önlemek için oluşturuldu ve ihtiyaç duyulan IP adresinin tam veya tama yakın değeri verildi.

# Bir CIDR IP adresi şuna benzer: 128.253.255.255/23 
# /X değeri ilk x bit network, geri kalan host anlamına gelir. Kaç cihaz edildiği 2^x ile bulunur. Broadcast ve Network Adresi dahil.

/24 → 255.255.255.0
/16 → 255.255.0.0
/8 → 255.0.0.0

/x kaç bit network
32 - x = host bit
2^(host bit) = Toplam IP

# Subnet Mask, Bir IP adresinin hangi bölümünün network, hangi bölümünün host olduğunu belirler.

# Cihazlar kendi aralarında yani LAN ağında dilediklerince haberleşebilir. Ancak nerede olduklarını bilmedikleri bir IP adresine erişmeye çalıştıklarında bunu Default Gateaway'e sorar. Gateaway ise onları internete yönlendirerek doğru adresi bulmalarına yardımcı olur.

# Statik IP adresleri adrese özel olarak atanmış adresler iken Değişken yani Dinamik IP adresleri her internete bağlandığında değişen ve otomatik atanan IP adresleridir.