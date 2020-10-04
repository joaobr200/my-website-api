import express from "express";
import cors from "cors";
import morgan from "morgan";

const app = express();
app.use(express.json());
app.use(cors());
app.use(morgan("dev"));

app.get("/", (req, res) => {
  res.json({ message: "Hello João Vitor" });
});

app.get("/hello", (req, res) => {
  res.json({ message: "Hi, How are you ??" });
});

export { app };
