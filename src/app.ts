import express from "express";
import cors from "cors";
import morgan from "morgan";

import routes from "./Routes";
import userRoutes from "./Routes/users";

const app = express();
app.use(express.json());
app.use(cors());
app.use(morgan("dev"));

app.use("/", routes);
app.use("/users", userRoutes);

export { app };
