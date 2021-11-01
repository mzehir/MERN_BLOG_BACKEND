import Post from "../models/posts.js";

// Burada db'ye çağrı isteklerinde bulunacağız.
export const getPosts = async (req, res) => {
  try {
    //Db'den dönen postlar
    const posts = await Post.find(); // Db'de ne kadar post varsa onları bul getir.
    //Geriye dönen cevap
    res.status(200).json(posts); // Geriye json formatın res döndürüyoruz.
  } catch (error) {
    res.status(404).json({
      message: error.message,
    });
  }
};

export const createPost = async (req, res) => {
  const newPost = new Post(req.body);
  // Yeni Post İşlem Akışı:
  //  5- Bu adımda newPost ismiyle yeni bir post modeli oluşturuluyor.
  try {
    await newPost.save(); // Ve bu satır ile veritabanına kaydediliyor.
    res.status(201).json(newPost); // Ve bu kayıt başarılı olursa bunu res ile fronta geri döndürüyoruz.
  } catch (error) {
    res.status(409).json({
      message: error.message,
    });
  }
};
