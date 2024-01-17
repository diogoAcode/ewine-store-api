import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import wineRoutes from "../src/routes/wine.routes";

const app = express();
const PORT = 3001;

// const corsOptions = {
//   origin: "*",
//   methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
//   credentials: true,
//   optionsSuccessStatus: 204,
//   allowedHeaders: ["Content-Type", "Authorization"],
//   exposedHeaders: ["Content-Disposition"],
// };

app.use(bodyParser.json());

mongoose.connect("mongodb://localhost:27017/mongostore", {
  family: 4,
});
mongoose.connection.on("connected", () => {
  console.log("Conexão com o MongoDB estabelecida com sucesso!");
});
mongoose.connection.on("error", (err) => {
  console.error("Erro na conexão com o MongoDB:", err);
});
app.use(express.static("uploads"));

app.use("/wines", wineRoutes);
// app.use("/users", userRoutes);
// app.use("/auth", authRoutes);

app.listen(PORT, () => {
  console.log("Servidor rodando em http://localhost:" + PORT);
});
