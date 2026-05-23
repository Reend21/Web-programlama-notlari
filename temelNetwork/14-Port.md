# Port (Liman) Nedir?
Portlar veri iletiminin gerçekleştiği her bir limanı temsil eder. Almanya'dan Amerikaya gidecek bir gemi amerikaya gideceğini bilir ancak hangi limana yükünü bırakacağını bilmez. İşte web uygulamaları ve protokolleride gideceği bilgisayarı biliyor ama bilgisayarda nereye gideceğini bilmiyor. Port tam da bu sorunu çözüyor.

Fiziksel portlar Usb, HDMI vb. giriş çıkışları iken sanal portlar sadece sayıdır.

# Ağ Protokolleri & Port Referansı

| Port | Protokol | Uygulama / Servis | Açıklama | Kategori |
|------|----------|-------------------|----------|----------|
| 20 | TCP | FTP (Data) | FTP veri aktarım kanalı | Dosya Transfer |
| 21 | TCP | FTP (Control) | FTP kontrol / komut kanalı | Dosya Transfer |
| 22 | TCP | SSH / SFTP / SCP | Güvenli kabuk; SFTP ve SCP de bu porttan çalışır | Uzak Erişim |
| 23 | TCP | Telnet | Şifresiz uzak terminal — kullanmayın | Uzak Erişim |
| 25 | TCP | SMTP | Sunucular arası mail iletimi | Mail |
| 53 | TCP+UDP | DNS | Alan adı çözümleme; sorgular UDP, zone transfer TCP | DNS & Ağ |
| 67 | UDP | DHCP (Server) | IP adresi dağıtımı — sunucu tarafı | DNS & Ağ |
| 68 | UDP | DHCP (Client) | IP adresi dağıtımı — istemci tarafı | DNS & Ağ |
| 69 | UDP | TFTP | Basit dosya transferi; boot image dağıtımında kullanılır | Dosya Transfer |
| 80 | TCP | HTTP | Şifresiz web trafiği | Web |
| 110 | TCP | POP3 | Mail alma protokolü (eski, IMAP tercih edilir) | Mail |
| 123 | UDP | NTP | Ağ zaman senkronizasyonu | DNS & Ağ |
| 143 | TCP | IMAP | Mail alma; sunucuda posta yönetimi | Mail |
| 161 | UDP | SNMP | Ağ cihazı izleme ve yönetimi | İzleme |
| 162 | UDP | SNMP Trap | Cihazdan yönetim sistemine uyarı | İzleme |
| 179 | TCP | BGP | İnternet yönlendirme protokolü | DNS & Ağ |
| 389 | TCP | LDAP | Dizin servisleri; kullanıcı kimlik doğrulama | Güvenlik |
| 443 | TCP | HTTPS | TLS ile şifreli web trafiği | Web |
| 445 | TCP | SMB / CIFS | Windows dosya paylaşımı, Active Directory | Dosya Transfer |
| 465 | TCP | SMTPS | TLS ile şifreli SMTP (implicit TLS) | Mail |
| 500 | UDP | IKE / IPsec | VPN tünel kurulumu | Güvenlik |
| 514 | UDP | Syslog | Sistem log mesajları iletimi | İzleme |
| 587 | TCP | SMTP Submission | Mail istemci gönderimi; STARTTLS ile şifrelenir | Mail |
| 636 | TCP | LDAPS | TLS üzerinden LDAP | Güvenlik |
| 993 | TCP | IMAPS | TLS ile şifreli IMAP | Mail |
| 995 | TCP | POP3S | TLS ile şifreli POP3 | Mail |
| 1194 | TCP+UDP | OpenVPN | Açık kaynak VPN | Güvenlik |
| 1433 | TCP | MSSQL | Microsoft SQL Server | Veritabanı |
| 1521 | TCP | Oracle DB | Oracle veritabanı listener | Veritabanı |
| 1883 | TCP | MQTT | IoT mesajlaşma protokolü (şifresiz) | Mesajlaşma |
| 2049 | TCP+UDP | NFS | Ağ dosya sistemi | Dosya Transfer |
| 2376 | TCP | Docker (HTTPS) | Docker daemon uzak API — TLS ile | Web |
| 3306 | TCP | MySQL / MariaDB | MySQL ve MariaDB veritabanı bağlantısı | Veritabanı |
| 3389 | TCP | RDP | Windows Uzak Masaüstü | Uzak Erişim |
| 5432 | TCP | PostgreSQL | PostgreSQL veritabanı bağlantısı | Veritabanı |
| 5672 | TCP | AMQP (RabbitMQ) | Mesaj kuyruğu (şifresiz) | Mesajlaşma |
| 5671 | TCP | AMQPS (RabbitMQ) | Mesaj kuyruğu (TLS) | Mesajlaşma |
| 5900 | TCP | VNC | Uzak masaüstü görüntüleme | Uzak Erişim |
| 6379 | TCP | Redis | Redis anahtar-değer deposu | Veritabanı |
| 6443 | TCP | Kubernetes API | Kubernetes API sunucusu | Web |
| 8080 | TCP | HTTP (alternatif) | Geliştirme ortamı, proxy | Web |
| 8443 | TCP | HTTPS (alternatif) | Alternatif HTTPS portu | Web |
| 8883 | TCP | MQTT (TLS) | Şifreli MQTT | Mesajlaşma |
| 9090 | TCP | Prometheus | Metrics toplama ve sorgulama | İzleme |
| 9092 | TCP | Apache Kafka | Yüksek hacimli mesaj akışı | Mesajlaşma |
| 9200 | TCP | Elasticsearch | Elasticsearch REST API | Veritabanı |
| 27017 | TCP | MongoDB | MongoDB veritabanı bağlantısı | Veritabanı |
| 51820 | UDP | WireGuard | Modern VPN protokolü | Güvenlik |