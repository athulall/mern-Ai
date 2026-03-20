import express from "express";
import cors from "cors";
import chatRoutes from "./routes/chatRoutes.js";
import { PORT } from "./Config/env.js";

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/chat", chatRoutes);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});