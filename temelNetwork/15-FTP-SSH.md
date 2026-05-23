# FTP (File Transfer Protocol)
FTP, iki bilgisayar arasında dosya paylaşımı yapmak için gerekli olan protokoldür.

1971'de icat edilen bir dinazor olduğu için artık günümüzde legacy sistemler harici kullanılmaz. Daha iyi alternatifleri şunlar:
**SFTP - FTP'nin daha akıllı ve şifreli versiyonu**

**HTTPS + WebDAV - Web tabanlı Dosya paylaşımı**
WebDAV HTTPS'in üzerine inşaa edilmiş bir uzantıdır, dosya oluşturma taşıma kilitleme ve silme methodları ekliyor normal HTTPS'ye.
**PROPFIND**  → klasör/dosya listele
**MKCOL**     → klasör oluştur
**COPY**     → dosya kopyala
**MOVE**      → dosya taşı
**LOCK**      → dosyayı kilitle (eş zamanlı düzenleme için)


**S3/Object Storage - Büyük ölçekli cloudlar için, endüstri standardı.**
Klasik Dosya sistemi yerine hiyerarşisiz bir havuz sistemidir. Her obje **Data**, **Metadata** ve **Unique ID**'den oluşur. **HTTP API** üzerinden erişilir.

WebDAV ---> Daha küçük ölçekli ve/veya backend projelerinde kullanmak için tasarlandı.

S3 ---> Devasa ölçekli dosya saklama işlemleri ve cdn ile serve edinilmek isteniyorsa gerekli.


# SSH (Secure Shell)
Uzak sunucuda komut çalıştırmak için veriyi gönderirken şifreleyen kabuk iletişim protokolü.