import express from "express";
import cors from "cors";
import helmet from "helmet";
import compression from "compression";
import morgan from "morgan";
import cookieParser from "cookie-parser";

import errorHandler from "./middleware/errorHandler.js";

const app = express();

app.use(cors());

app.use(helmet());

app.use(compression());

app.use(morgan("dev"));

app.use(express.json());

app.use(cookieParser());

app.use(express.urlencoded({ extended: true }));

app.get("/health", (req, res) => {

   res.json({

      status: "OK"

   });

});

app.use(errorHandler);

export default app;