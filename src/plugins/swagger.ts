import Swagger, { SwaggerOptions } from "@fastify/swagger";
import fp from "fastify-plugin";

export default fp<SwaggerOptions>(
  (fastify, _, done) => {
    const swaggerOpts: SwaggerOptions = {};
    return Swagger(fastify, swaggerOpts, done);
  },
  { name: "swagger-plugin" },
);
