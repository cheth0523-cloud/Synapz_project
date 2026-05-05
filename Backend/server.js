import express from "express";
import cors from "cors";
import authRoutes from "./routes/auth.js";

const app = express();
const PORT = 8080;

app.use(express.json());
app.use(cors());

app.use("/api/auth", authRoutes);

const server = app.listen(PORT, () => {
    console.log(`server running on ${PORT}`);
});

// Handle server errors
server.on('error', (err) => {
    console.error('Server error:', err);
});

// Handle unhandled rejections
process.on('unhandledRejection', (err) => {
    console.error('Unhandled rejection:', err);
});

// Handle uncaught exceptions
process.on('uncaughtException', (err) => {
    console.error('Uncaught exception:', err);
});