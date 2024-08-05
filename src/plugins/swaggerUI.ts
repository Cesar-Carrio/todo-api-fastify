import SwaggerUI, { FastifySwaggerUiOptions } from "@fastify/swagger-ui";
import fp from "fastify-plugin";

export default fp<FastifySwaggerUiOptions>(
  (fastify, _, done) => {
    const swaggerUIOpts: FastifySwaggerUiOptions = {};
    return SwaggerUI(fastify, swaggerUIOpts, done);
  },
  { name: "swaggerUI-plug" },
);
