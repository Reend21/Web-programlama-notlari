# Network'te iletişim çeşitleri

**Unicast** - Bilgisayarın elindeki paketi sadece belirlediği tek bir hedefe göndermesi.
Youtube, Netflix gibi siteler hala Unicast kullanıyor, sebep? Çünkü nternet altyapısının büyük çoğunluğu multicast'i desteklemiyor, ISP'ler arası multicast routing (PIM protokolü) hem karmaşık hem de pahalı. CDN'ler (Cloudflare, Akamai) bu sorunu farklı bir açıdan çözüyor, sunucuyu kullanıcıya yaklaştırarak.

**Multicast** - Bilgisayarın elindeki paketi sadece belirlediği birden fazla hedefe göndermesi.

**224.0.0.0** – **239.255.255.255** arası tamamen multicast'e ayrılmış. İçinde bazı ilginç adresler var:

**224.0.0.1** → ağdaki tüm multicast destekleyen cihazlar
**224.0.0.251** → mDNS (Bonjour/Avahi) — Apple cihazlarının birbirini "sihirli gibi" bulması bu sayede
**239.255.255.250** → SSDP/UPnP — smart TV'nin Chromecast'i otomatik bulması bu adres üzerinden

Yani evinde bir şeyi "otomatik keşfeden" cihaz varsa, büyük ihtimalle multicast kullanıyordur.

**Broadcast** - Bilgisayarın elinde paketi ağdaki herkese göndermesi. Efektif bir network için tercih edilmez çünkü paket trafiğini arttırır. Ayrıca switch'ten geçemez yani sadece LAN'da kalır. Modern sistemlerde artık pek fazla kullanılmıyor. IPv6'da Broadcast tamamen kaldırıldı.

**Anycast** - Anycast'te aynı IP adresi dünyanın farklı yerlerindeki onlarca sunucuya atanmış. Sen paketi gönderirsin, ağ otomatik olarak en yakın sunucuya yönlendirir.
Cloudflare'in 1.1.1.1 DNS'i, Google'ın 8.8.8.8'i anycast. Türkiye'den sorgu attığında Frankfurt'taki sunucuya değil, İstanbul'daki ya da en yakın node'a gidiyor. Bu yüzden bu DNS'ler bu kadar hızlı.