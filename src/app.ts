import Fastify from "fastify";
import helmet from "@fastify/helmet";
import cors from "@fastify/cors";

export function buildApp() {
  const app = Fastify({
    logger: true,
  });

  app.register(helmet);
  app.register(cors, {
    origin: "*",
  });

  app.get("/api/v1/health", async () => {
    return {
      status: "Ok",
      name: "canopy API",
    };
  });

  return app;
}
