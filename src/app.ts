import Fastify from "fastify";
import helmet from "@fastify/helmet";
import cors from "@fastify/cors";
import swagger from "@fastify/swagger";
import swaggerUI from "@fastify/swagger-ui";

export async function buildApp() {
  const app = Fastify({
    logger: true,
  });

  await app.register(helmet);

  await app.register(cors, {
    origin: "*",
  });

  // Register Swagger BEFORE defining routes.
  await app.register(swagger, {
    openapi: {
      openapi: "3.0.3",
      info: {
        title: "CANOPY API",
        description:
          "API for the CANOPY student learning and resource platform.",
        version: "1.0.0",
      },
      servers: [
        {
          url: "http://localhost:3000",
          description: "Local development server",
        },
      ],
      tags: [
        {
          name: "System",
          description: "System and health endpoints",
        },
        {
          name: "Resources",
          description: "Academic learning resources",
        },
        {
          name: "Users",
          description: "User account operations",
        },
      ],
    },
  });

  // Register the health endpoint.
  app.get(
    "/api/v1/health",
    {
      schema: {
        tags: ["System"],
        summary: "Check API health",
        description: "Returns the current health status of CANOPY API.",
        response: {
          200: {
            type: "object",
            properties: {
              status: { type: "string" },
              name: { type: "string" },
            },
          },
        },
      },
    },
    async () => {
      return {
        status: "ok",
        name: "CANOPY API",
      };
    },
  );

  // Register Swagger UI AFTER the API routes.
  await app.register(swaggerUI, {
    routePrefix: "/documentation",
    uiConfig: {
      docExpansion: "list",
      deepLinking: true,
    },
  });

  await app.ready();


  return app;
}
