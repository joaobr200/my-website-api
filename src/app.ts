import express from "express";
import cors from "cors";
import morgan from "morgan";
import bodyParser from "body-parser";

import routes from "./Routes";
import userRoutes from "./Routes/users";

const app = express();
app.use(cors());
app.use(morgan("dev"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use("/", routes);
app.use("/users", userRoutes);

export { app };
