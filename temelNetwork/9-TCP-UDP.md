# TCP (Transmission Control Protocol) Nedir?

TCP, bir gönderim protokolüdür. Bağlantı temellidir ve kullanıcı verisi taşınmadan önce bağlantı kurulmasına ihtiyaç duyar. IP üzerinden iletişim kuran uygulamalar arasındak verilerin sıralı ve hata kontrolü yapılarak iletilmesini amaçlar.

TCP bağlantıyı kurmak için iki taraf birbiriyle anlaşır ve buna 3-way-handshake denir.

Client ---> **SYN** > Server (**Bağlantı kuralım mı?*)
Client < **SYN-ACK** <--- Server (**Olur!*)
Client ---> **ACK** > Server (**Tamamdır!*)

Ulaşım & Taşıma katmanında çalışır ve uçtan uca güvenilir bir ortam yaratır. Ortam güvenlidir çünkü kaybolan paketler (jitter) tekrar gönderilir.

**LISTEN** Sunucu, herhangi bir uzak TCP uç noktasından bağlantı isteği bekliyor.

**SYN-SENT** İstemci, bağlantı isteği gönderdikten sonra eşleşen bir bağlantı isteği bekliyor.

**SYN-RECEIVED** Sunucu, hem bağlantı isteği aldıktan hem de gönderdikten sonra onaylayıcı bir bağlantı isteği onayı bekliyor.

**ESTABLISHED** Sunucu ve istemci Açık bir bağlantı, alınan veriler kullanıcıya iletilebilir. Bağlantının veri aktarım aşamasının normal durumu.

**FIN-WAIT-1** Sunucu ve istemci, uzak TCP'den bağlantı sonlandırma isteği veya daha önce gönderilen bağlantı sonlandırma isteğinin onayını bekliyor.

**FIN-WAIT-2** Sunucu ve istemci, uzak TCP'den bağlantı sonlandırma isteği bekliyor.

**CLOSE-WAIT** Sunucu ve istemci, yerel kullanıcıdan bağlantı sonlandırma isteği bekliyor.

**CLOSING** Sunucu ve istemci, uzak TCP'den bağlantı sonlandırma isteği onayı bekliyor.

**LAST-ACK** Sunucu ve istemci, uzak TCP sunucusuna daha önce gönderilen bağlantı sonlandırma isteğinin (bağlantı sonlandırma isteğinin onayını da içeren) onayını bekliyor.

**TIME-WAIT** Sunucu veya istemci, bağlantıdaki tüm kalan paketlerin süresinin dolduğundan emin olmak için yeterli zaman geçmesini bekliyor.

**CLOSED** Sunucu ve istemci, hiçbir bağlantı durumu yok.


**SYN** - Senkronizasyon - Bağlantı başlatmak istenildiğinde gönderilen bayrak.

**ACK** - Acknowledgement - Bağlantıyı aldım haberin olsun bayrağı.

**FIN** - Finish - Bağlantıyı karşılıklı olarak sonlandırma bayrağı.

**RST** - Reset - Bağlantı tek taraflı şekilde sonlandırılmak, iptal edilmek istenirse veya bağlantı koparsa gönderilen bayrak.

**URG** - Urgent - Önem sırası yüksek pakete bu bayrak iletilir ve daha önce iletilir.

**PSH** - Push - Veri doğrudan gönderilebilirse bu bayrak iletilir.

# UDP (User Datagram Protocol) Nedir?

UDP'nin ana amacı, veri gönderirken bağlantı kurulmasını beklemeden veri iletimi yapması.

TCP'ye göre daha hızlı ama güvenilir değildir. Veriyi gönderdikten sonra iletip iletilmediğiyle ilgilenmez ve bu konuda kullanıcıya bilgi vermez.

 - Geniş alan ağlarında (WAN) ses ve görüntü aktarımı gibi gerçek zamanlı veri aktarımlarında UDP kullanılır.

   - UDP bağlantı kurulum işlemlerini, akış kontrolü ve tekrar iletim işlemlerini yapmayarak veri iletim süresini en aza indirir.

  - UDP ve TCP aynı iletişim yolunu kullandıklarında UDP ile yapılan gerçek zamanlı veri transferinin servis kalitesi TCP'nin oluşturduğu yüksek veri trafiği nedeniyle azalır.

UDP'yi kullanan protokollerden bazıları DNS, TFTP ve SNMP protokolleridir. Uygulama programcıları birçok zaman UDP'yi TCP'ye tercih eder, zira UDP ağ üzerinde fazla bant genişliği kaplamaz. 

# TCP ve UDP arasındaki farklar

TCP, bağlantı tabanlı (connection oriented) bir protokoldür, UDP bağlantı tabanlı değildir (connectionless).

TCP'de akış kontrolü vardır, UDP'de akış kontrolü yoktur.

TCP başlığı (header) 20 bayttır, UDP başlığı 8 bayttır.

TCP, UDP'den daha yavaştır, çünkü verinin karşı tarafa ulaşıp ulaşmadığını kontrol eder.

UDP, ses ve video gönderiminde kullanılır. TCP'ye göre daha hızlıdır fakat güvenilir (reliable) değildir. Veri ismine datagram denilir.

Datagramın segmentten farkı ise içerisinde sıra numarasının bulunmamasıdır.