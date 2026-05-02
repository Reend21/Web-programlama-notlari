# HTTP (Hyper Text Transfer Protocol) Nedir?

1990'lı yıllardan beri kullanılan Hiper metin gönderim protokolüdür. Uygulama katmanında çalışır. bir kaynaktan dağıtılan ve ortak kullanıma açık olan hiperortam bilgi sistemleri için uygulama seviyesinde bir iletişim protokolüdür. World Wide Web'in temelidir.

**Hiperortam ya da hipermedya (İngilizce hypermedia), grafik, ses, video, salt metin ve hiper-bağlantıları içeren bilgiler topluluğu olup hipermetin (hypertext) teriminin daha geniş kapsamlısıdır. Hipermedyanın multimedyadan farkı interaktif olması, yani kullanıcı girdilerine (input) cevap verebilmesidir. Hypermedia terimi ilk olarak 1965 yılında Ted Nelson tarafından bir makalesinde kullanılmıştır.**

**Web hipermedyanın tipik bir örneğidir. Bağlantılarla kullanıcı etkileşiminin sağlandığı bir Youtube videosu hipermedya iken kullanıcı etkileşimine sahip olmayan bir video gösterimi (VCD ya da televizyondaki bir gösterim olabilir) multimedya sınıfına girer.**

# HTTPS (Hyper Text Transfer Protocol Secure) Nedir?

HTTPS, Güvenli hiper metin gönderim prokolüdür.

Bu modern prokolde iletişim TLS veya SSL ile şifreleniyor.

TLS (Transport Layer Security) Taşıma Katmanı Güvenliği
SSL (Secure Sockets Layer) Güvenli Soket Katmanı

HTTP'in asıl amacı güvenli olmayan bir iletişim ağı üzerinden güvenli bir kanal oluşturmaktadır.

# HTTP&S Durum kodları

Bu kodlar, bağlantının hangi aşamada olduğunu gösterir.

# HTTP Status Kodları

## 1xx — Bilgilendirme

| Kod | İsim | Açıklama |
|-----|------|----------|
| 100 | Continue | İsteğin başını aldık, devam et |
| 101 | Switching Protocols | Protokol değiştiriyoruz (WebSocket gibi) |
| 102 | Processing | İşliyoruz, bekle (WebDAV) |
| 103 | Early Hints | Cevap gelmeden önce bazı header'ları ön yükle |

---

## 2xx — Başarı

| Kod | İsim | Açıklama |
|-----|------|----------|
| 200 | OK | Her şey yolunda, işte cevabın |
| 201 | Created | Kaynak oluşturuldu |
| 202 | Accepted | Alındı ama henüz işlenmedi |
| 203 | Non-Authoritative Information | Başka kaynaktan değiştirilmiş bilgi |
| 204 | No Content | Başarılı ama döndürülecek bir şey yok |
| 205 | Reset Content | Sayfayı/formu sıfırla |
| 206 | Partial Content | Büyük dosyanın bir parçası (range request) |
| 207 | Multi-Status | Birden fazla işlemin sonuçları (WebDAV) |
| 208 | Already Reported | Zaten raporlandı (WebDAV) |
| 226 | IM Used | Delta encoding uygulandı |

---

## 3xx — Yönlendirme

| Kod | İsim | Açıklama |
|-----|------|----------|
| 300 | Multiple Choices | Birden fazla seçenek var, sen seç |
| 301 | Moved Permanently | Adres kalıcı olarak değişti |
| 302 | Found | Geçici olarak başka yerde |
| 303 | See Other | Sonuç için başka URL'e GET at |
| 304 | Not Modified | Cache'indeki hâlâ güncel, tekrar indirme |
| 307 | Temporary Redirect | Geçici yönlendirme, method değişmez |
| 308 | Permanent Redirect | Kalıcı yönlendirme, method değişmez |

---

## 4xx — İstemci Hatası

| Kod | İsim | Açıklama |
|-----|------|----------|
| 400 | Bad Request | İstek bozuk/anlaşılmaz |
| 401 | Unauthorized | Kim olduğunu bilmiyoruz, giriş yap |
| 402 | Payment Required | Para ver (nadiren kullanılır) |
| 403 | Forbidden | Kim olduğunu biliyoruz, yine de giremezsin |
| 404 | Not Found | Böyle bir şey yok |
| 405 | Method Not Allowed | Bu endpoint bu HTTP methodunu kabul etmiyor |
| 406 | Not Acceptable | İstediğin formatta veremeyiz |
| 407 | Proxy Authentication Required | Proxy'ye giriş yap |
| 408 | Request Timeout | Çok yavaş kaldın, bağlantıyı kestik |
| 409 | Conflict | Mevcut durumla çelişiyor (duplicate vs.) |
| 410 | Gone | Buradaydı ama kalıcı olarak silindi |
| 411 | Length Required | Content-Length header'ı eksik |
| 412 | Precondition Failed | Ön koşullar sağlanamadı |
| 413 | Content Too Large | Gönderdiğin şey çok büyük |
| 414 | URI Too Long | URL bu kadar uzun olmamalı |
| 415 | Unsupported Media Type | Bu dosya/içerik tipini desteklemiyoruz |
| 416 | Range Not Satisfiable | İstediğin aralık mevcut değil |
| 417 | Expectation Failed | Expect header karşılanamadı |
| 418 | I'm a Teapot | Çaydanlığım, kahve yapamam (gerçek bir RFC) |
| 421 | Misdirected Request | İstek yanlış sunucuya geldi |
| 422 | Unprocessable Content | Sözdizimi doğru ama anlam olarak hatalı |
| 423 | Locked | Kaynak kilitli (WebDAV) |
| 424 | Failed Dependency | Bağımlı olduğu işlem başarısız oldu |
| 425 | Too Early | Replay saldırısına karşı, henüz çok erken |
| 426 | Upgrade Required | Protokolü yükselt |
| 428 | Precondition Required | If-Match gibi koşul header'ı gönder |
| 429 | Too Many Requests | Çok fazla istek attın, yavaşla |
| 431 | Request Header Fields Too Large | Header'lar fazla büyük |
| 451 | Unavailable For Legal Reasons | Yasal sebeple erişim kapalı (Fahrenheit 451'e atıf) |

---

## 5xx — Sunucu Hatası

| Kod | İsim | Açıklama |
|-----|------|----------|
| 500 | Internal Server Error | Sunucu patladı, ne olduğunu bilmiyoruz |
| 501 | Not Implemented | Bu özellik henüz yok |
| 502 | Bad Gateway | Upstream sunucudan saçma cevap geldi |
| 503 | Service Unavailable | Sunucu şu an çalışmıyor (bakım/yük) |
| 504 | Gateway Timeout | Upstream sunucu cevap vermedi |
| 505 | HTTP Version Not Supported | Bu HTTP versiyonunu desteklemiyoruz |
| 506 | Variant Also Negotiates | Content negotiation döngüsü oluştu |
| 507 | Insufficient Storage | Depolama alanı doldu (WebDAV) |
| 508 | Loop Detected | Sonsuz döngü tespit edildi (WebDAV) |
| 510 | Not Extended | İstek için ek uzantılar gerekiyor |
| 511 | Network Authentication Required | Ağa giriş yapman lazım (captive portal) |

# HTTP Metodları

## Temel Metodlar

| Metod | Açıklama |
|-------|----------|
| GET | Sunucudan veri oku. Body gönderilmez, sadece alınır. |
| POST | Sunucuya yeni veri gönder/oluştur. |
| PUT | Kaynağı tamamen güncelle veya yoksa oluştur. |
| PATCH | Kaynağın sadece bir kısmını güncelle. |
| DELETE | Kaynağı sil. |
| HEAD | GET gibi ama sadece header'ları döner, body yok. |
| OPTIONS | Sunucunun hangi metodları desteklediğini öğren. |
| CONNECT | Proxy üzerinden tünel (tunnel) bağlantısı kur. |
| TRACE | İsteğin sunucuya ulaşana kadar geçtiği yolu göster (debug). |

---

## Özellikler

| Metod | Güvenli (Safe) | Idempotent | Body Gönderir | Body Döner |
|-------|:--------------:|:----------:|:-------------:|:----------:|
| GET | ✓ | ✓ | ✗ | ✓ |
| POST | ✗ | ✗ | ✓ | ✓ |
| PUT | ✗ | ✓ | ✓ | ✓ |
| PATCH | ✗ | ✗ | ✓ | ✓ |
| DELETE | ✗ | ✓ | Opsiyonel | Opsiyonel |
| HEAD | ✓ | ✓ | ✗ | ✗ |
| OPTIONS | ✓ | ✓ | Opsiyonel | ✓ |
| CONNECT | ✗ | ✗ | ✗ | ✓ |
| TRACE | ✓ | ✓ | ✗ | ✓ |

> **Güvenli (Safe):** Sunucu tarafında hiçbir değişiklik yapmaz.
> 
> **Idempotent:** Aynı isteği kaç kez atarsan at, sonuç aynı olur.

---

## WebDAV Metodları

| Metod | Açıklama |
|-------|----------|
| PROPFIND | Kaynak veya koleksiyonun özelliklerini getir. |
| PROPPATCH | Kaynak özelliklerini güncelle veya sil. |
| MKCOL | Yeni bir koleksiyon (klasör) oluştur. |
| COPY | Kaynağı başka bir URL'e kopyala. |
| MOVE | Kaynağı başka bir URL'e taşı. |
| LOCK | Kaynağı kilitle (eş zamanlı düzenlemeyi engelle). |
| UNLOCK | Kilitli kaynağın kilidini aç. |
| SEARCH | Koleksiyon içinde arama yap. |

---

## Notlar

- **PUT vs PATCH:** PUT tüm kaynağı değiştirir, PATCH sadece belirtilen alanları. Kullanıcının sadece e-postasını güncellemek istiyorsan PATCH kullan, PUT ile geri kalan alanları silmiş olursun.
- **POST vs PUT:** POST her çağrıda yeni kaynak oluşturur. PUT ise aynı isteği tekrarlarsan aynı kaynağı günceller (idempotent).
- **HEAD kullanımı:** Büyük bir dosyayı indirmeden önce boyutunu veya varlığını kontrol etmek için kullanılır.
- **TRACE güvenlik riski:** XST (Cross-Site Tracing) saldırılarına açık olduğu için üretim ortamlarında genellikle kapatılır.
