# MAC (Media Acces Control) Adresi
Aynı ağ içerisindeki cihazların birbiriyle iletişim kurması için geliştirilen ve NIT'in üzerinde eşsiz olarak kodlanmış 48 bitlik bir adrestir. 6 oktetten oluşur, ilk üç oktet üretici tarafından belirlenirken son üç oktet donanımın kimliğidir. Fiziksel katmanda görev alır ve sadece aynı ağdaki cihazlar için çalışır.

MAC adresleri, aralarına ":" işareti konarak 16'lı tabanda yazılır: 01:23:45:67:89:AB. Bazı MAC adresleri özel adreslerdir:

   # FF:FF:FF:FF:FF:FF adresi tüm cihazlara yayın yapmak (broadcast) için kullanılır.
   # İlk bitleri 01-00-5E olan adresler "multicast" adresleri için kullanılır.
   # Yerel olarak atanmış MAC adresleri 02 ile başlarlar.