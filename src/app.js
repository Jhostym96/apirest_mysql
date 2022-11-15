import express from "express";
import morgan from "morgan";

// Routes
import languagesRoutes from "./routes/language.routes";

const app = express();

// Settings
app.set("port", 4000)

// Middlewares
app.use(morgan("dev"));

// formato JSON
app.use(express.json());

// Routes
app.use("/api/language",languagesRoutes);


export default app