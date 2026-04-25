# OSI (Open Systems Interconnection) referans modeli, bilgisayar ağlarındaki iletişim protokollerini 7 soyut katmana ayıran uluslararası bir standarttır. ISO tarafından geliştirilen bu model, verinin bir cihazdan diğerine fiziksel kablolardan kullanıcı uygulamalarına kadar nasıl iletildiğini tanımlar. Matruşkaya benzetilebilir. 
# OSI'nin 7 Katmanı

  # Uygulama (Application) Katmanı (7): Kullanıcı ve ağ uygulamalarıyla doğrudan etkileşim (HTTP, FTP, SMTP).
  # Sunum (Presentation) Katmanı (6): Veri şifreleme, sıkıştırma ve format dönüştürme.
  #  Oturum (Session) Katmanı (5): İletişim kurma, yönetme ve sonlandırma.
  #  Taşıma (Transport) Katmanı (4): Veri iletiminin güvenilirliği, hata kontrolü ve akış kontrolü (TCP/UDP).
  #  Ağ (Network) Katmanı (3): Mantıksal adresleme (IP) ve yönlendirme (Routing).
  #  Veri Bağlantı (Data Link) Katmanı (2): Fiziksel adresleme (MAC), hata algılama ve çerçeveleme.
  #  Fiziksel (Physical) Katman (1): Verilerin bitler halinde fiziksel kablolar veya sinyaller üzerinden iletilmesi.

  # Protocol Data Unit yani (PDU) ise veri bu katmanlar arasında taşınırken aldığı isimlerdir.
  # Uygulama, Sunum ve Oturum kısmında veri hala ham haldedir ve ismi değişmez.
  # Transport katmanında TCP'de Segment, UDP'de Datagram ismini alır. Port numarası eklenir, parçalama yapılır, verinin nereye gidileceği kesinleşir.
  # Network katmanında ismi Paket olur. IP Adresi ve Routerlar eklenir.
  # Data Link katmanında ismi Frame olur. MAC adresi eklenir, Switchler çalışır.
  # Fİziksel katmanında ismi Bits olur, yani veri artık sadece 0 ve 1.

  # Uygulamadan Fiziksel katman geçişe Encapsulation, Fizikselden Uygulama katmanına geçişe De-Encapsulation denir.

  # Herhangi iki cihaz arasındaki veri iletiminde her zaman OSI modeli uygulanmaz ancak modern ağ büyük ölçüde TCP/IP protokolünü kullandığı için OSI modeline oldukça benzer şekilde çalışır.