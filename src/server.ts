import "reflect-metadata";
import dotenv from "dotenv";
import app from "./app";
import { AppDataSource } from "./config/database";

dotenv.config();

const PORT = process.env.PORT || 3000;
const DB_NAME = process.env.DB_NAME;

AppDataSource.initialize()
  .then(() => {
    console.log(`Database connected to ${DB_NAME}`);

    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}. Listening to requests on http://localhost:${PORT}/health`);
    });
  })
  .catch((error) => {
    console.error("Database connection failed:", error);
    process.exit(1);
  });