import express from "express";
import morgan from "morgan";

// Routes
import ctRoutes from "./routes/ct.routes"
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
app.use("/api/ct",ctRoutes);



export default app