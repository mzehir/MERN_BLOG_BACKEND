import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
// const express = require("express"); // Bu yazımı import formatında yazmak için package.json dosyasına type:"module", eklemesi yapılmalıdır.
import postsRoutes from "./routes/posts.js";

const app = express(); // Böylelikle express server'ımızı oluşturmuş olduk.
dotenv.config(); // .env dosyasının içeriklerini process.env objesinin içerisine yükler.

app.use(bodyParser.json({ limit: "30mb", extended: true })); // Böylelikle json formatında gelen veriyi kabul et demiş oluyoruz. Ve çok büyük dosyalarda gelebileceği için bir limit belirliyoruz. Ve Extended değeri ile bazı console hatalarını kapatmış oluyoruz. Console'de görünmesin diye
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use(cors()); // Böylelikle uzak sunucuya isteklerimizi yönlendirirken cors hatalarını engellemiş oluyoruz.

app.get("/", (req, res) => {
  // res.send("Coding with ZEHİR");
  res.json({
    author: "Coding with ZEHİR",
    message: "Mutlu yıllar! :)",
  });
});

app.use("/posts", postsRoutes);

const PORT = process.env.PORT || 5000;
mongoose
  .connect(process.env.CONNTECTION_URL, {
    useNewUrlParser: true, // Ekrandaki warning mesajlarını engellemek için eklendi.
    useUnifiedTopology: true, // Yukarıdaki metin.
  })
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Server is running on port: ${PORT} `);
    });
  })
  .catch((error) => {
    console.error(error.message);
  });
