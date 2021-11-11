//! A- Tüm blogların front-end'de ekrana basılması
// Frontend Akışı
//? 1- Tüm istekleri getirmek için ilk adımda App.js dosyasında dispatch değişimini izleyen useEffect çalışır.

//? 2- İkinci adımda redux'a ait actions klasöründeki Post.js dosyasında fetchPosts fonksiyonu çalışır. Ve
//? api klasöründeki index.js dosyasındaki fetchPosts vasıtasıyla backend'e istekte bulunur.

//? 3- Üçüncü adımda backend'e bulunduğu bu isteği data adında bir const'ında eşitleyerek bir veri, cevap beklemeye başlar
//Backend Akışı
//? 4- Dördüncü adımda backend gelen isteği index.js'de tanımlanan apiendpoint ile karşılaştırır. Apiendpoint'de
//? "/posts" parametresini gördükten sonra bu istek  routes dosyasına düşer.

//? 5- Beşinci adımda routes klasöründeki post.js dosyası frontend'den yaptığımız isteğin
//? get mi yada post mu olduğuna bakar ve isteğimiz get olduğu için bu isteği controllers klasörünün posts.js
//? dosyasının getPosts fonksiyonuna gönderir.

//? 6- Altıncı adımda getPosts fonksiyonu öncelikle models klasörünün posts.js dosyasındaki mongo shema tip
//? ayarlarımızın eşitlendiği Post const'ını alır ve devamında mongosenin find methodunu kullanarak
//? mongoAtlas'tan tüm verileri çeker ve bu verileri posts const'ına eşitler ve bu const'ı json formatında
//? res tipi ile frontend'e gönderir.
// Frontend Akışı
//? 7- Yedinci adımda ise üçüncü adımda anlatılan bekleme olayı sonuçlanır ve oluşturulan data const'ının içi veri ile dolar.
//? Ve bu veri yine aynı fonksiyon(actions/Post.js/fetchPosts) ile redux klasörüde reducers klasöründe postReducer
//? fonksiyonuna düşer.

//? 8- Sekizinci adımda redux klasörüde reducers klasöründe postReducer fonksiyonu types bilgisine bakarak bu veriyi posts
//? değişkenine yazar.

//? 9- Dokuzuncu adımda proje initialState içerisinde yer alan posts değişkinindeki tüm verileri map ile ekrana yazar.

//! B- Veri tabanına yeni veri eklenmesi ve verinin ekrana basılması
// Frontend Akışı
//? 1- Birinci adımda components klasöründeki addPostForm dosyasında submit fonksiyonu tetiklendikten sonra fonksiyona düşen data
//? redux'un dispatch methoduyla redux'a ait actions klasöründeki Post.js dosyasında createPost fonksiyonuna düşer.

//? 2- İkinci adımda createPost fonksiyonu api klasöründeki index.js dosyasındaki createPost vasıtasıyla backend'e istekte bulunur.

//? 3- Üçüncü adımda backend'e bulunduğu bu isteği data adında bir const'ında eşitleyerek bir veri, cevap beklemeye başlar.
//Backend Akışı
//? 4- Dördüncü adımda backend gelen isteği index.js'de tanımlanan apiendpoint ile karşılaştırır. Apiendpoint'de
//? "/posts" parametresini gördükten sonra bu istek routes dosyasına düşer.

//? 5- Beşinci adımda routes klasöründeki post.js dosyası frontent'den yaptığımız isteğin get mi yada post mu olduğuna bakar ve
//? isteğimiz post olduğu için bu isteği conrtollers klasörünün posts.js dosyasının createPost fonksiyonuna gönderir.

//? 6- Altıncı adımda createPost fonksiyonu öncelikle models klasörünün posts.js dosyasındaki mongo shema tip
//? ayarlarımızın eşitlendiği Post Const'ını alır ve devamında bu const'ıntın içerisine frontend'de oluşturulan datayıda koyarak bu yeni tipimizi
//? newPost const'ına eşitler. Devamında newPost cont'ını mongose'nin methodu olan save() ile veritabanına kaydeder. Ve devamında newPost datamızı
//? res tipi ile frontend'e döner. (Bu istekten dönen data değildir.)
// Frontend Akışı
//? 7- Yedinci adımda ise üçüncü adımda anlatılan bekleme olayı sonuçlanır ve oluşturulan data const'ının içi veri ile dolar.
//? Ve bu veri yine aynı fonksiyon(actions/Post.js/createPost) ile redux klasörüde reducers klasöründe postReducer
//? fonksiyonuna düşer.

//? 8- Sekizinci adımda redux klasörüde reducers klasöründe postReducer fonksiyonu types bilgisine bakarak bu veriyi posts
//? değişkenine yazar.

//? 9- Dokuzuncu adımda proje initialState içerisinde yer alan posts değişkinindeki tüm verileri map ile ekrana yazar.
