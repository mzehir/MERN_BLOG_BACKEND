import express from "express";
import { getPosts, createPost } from "../controllers/posts.js";

const router = express.Router();
router.get("/", getPosts);
router.post("/", createPost); // Post isimli bir req geldiği zaman işlemi createPost'a devret. Yapılması gereken işlemi o yapsın.
// Yeni Post İşlem Akışı:
//  4- Bu adımda bu post buraya düşüyor ve createPost router'ıda bunu createPost controller'ına gönderiyor.

export default router;
