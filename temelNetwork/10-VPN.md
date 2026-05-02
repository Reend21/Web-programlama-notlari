# VPN (Virtual Private Network) Nedir? 
VPN, internet trafiğini şifreleyerek ve farklı bir sunucu üzerinden yönlendirerek çalışan bir teknolojidir.

VPN kullanmadan internette alıp verdiğin her veri ISS'in tarafından görünebilir.

VPN kullanımında ise şifreli bir tünelleme protokolüyle (OpenVPN, Wireguard vs.) önce VPN sunucusuna bağlanır, daha sonra bu sunucu üzerinden veri akışını sağlar. ISS sadece VPN bağlantısını görür.

VPN:
   -IP adresini gizler.
   -Trafiği Şifreler
   -Mahremiyetv ve gizliliği arttırır.
   -Coğrafi ve ISS kısıtlamalarını bloke eder. 

# VPN'in çalışma aşamaları:

**Handshake (El Sıkışma)**: İstemci ve sunucu birbirini doğrular, şifreleme anahtarları paylaşılır.

**Tünel Oluşturma**: OpenVPN, WireGuard gibi protokollerle güvenli bir tünel kurulur.

**Veri Şifreleme**: Trafik AES-256 gibi çok güçlü şifreleme prokolleriyle şifrelenir.

**Yönlendirme**: Şifreli paket VPN sunucusuna gider, orada "açılır" ve hedef siteye iletilir.

**Cevap**: Hedef sitenin cevabı aynı yoldan geri gelir.

# VPN Protokolleri

| Protokol    | Hız       | Güvenlik | Durum                  
|-------------|-----------|----------|------------------------|
| WireGuard   | Çok hızlı | Çok iyi  | Modern, tavsiye edilen |
| OpenVPN     | Orta      | İyi      | Eski ama güvenilir     |
| IKEv2/IPSec | Hızlı     | İyi      | Mobilde stabil         |


**(Uzaktan Erişim VPN)**: Uzaktan erişim VPN bağlantıları, evinde çalışan ya da seyahat esnasında ofisinde olamayan kullanıcıların internet üzerinden özel ağ üzerindeki sunucuya erişme imkânı sağlar. VPN, istemcisiyle uzaktan erişim sunucusu arasında noktadan noktaya bir bağlantıdır. Ayrıca veriler özel bir ağ üzerinden gönderiliyormuş gibi görünmektedir. Bu yüzden ortak ağın gerçek alt yapısı önemli değildir.

**(Siteden siteye VPN)**: Siteden siteye VPN bağlantıları farklı ofisler arasında veya farklı kuruluşlar arasında ortak bir ağ üzerinden güvenli bir şekilde iletişimi sağlamaz. VPN bağlantısı WAN (Wide Area Network) bağlantısı gibi çalışır. WAN bağlantısı şehirler, ülkeler gibi uzun mesafeler arasında iletişimi sağlayan ağ çeşididir. Ağlar, internet üzerinden verileri bir yönlendirici ile başka bir yönlendiriciye iletir. Yönlendiricilere göre VPN bağlantısı, veri bağlantısı olarak işlev görmektedir.