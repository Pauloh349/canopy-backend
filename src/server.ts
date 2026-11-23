import "dotenv/config";
import { buildApp } from "./app.js";

const app = buildApp();

const port = Number(process.env.port) || 3000;
const host = "0.0.0.0";

const start = async () => {
  try {
    await app.listen({ port, host });

    console.log(`CANOPY API is running on port ${port}`);
  } catch (error) {
    app.log.error(error);
    process.exit(1);
  }
};

start();
