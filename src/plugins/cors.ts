import fastifyCors, { FastifyCorsOptions } from "@fastify/cors";
import fp from "fastify-plugin";
export default fp<FastifyCorsOptions>(
  (fastify, _, done) => {
    const corsOptions: FastifyCorsOptions = {
      // TODO: change this to be Client URL
      origin: "https://cesarjcarrillo.com",
      methods: ["GET", "POST", "PUT", "DELETE"],
      allowedHeaders: ["Origin", "Content-Type", "Authorization"],
    };

    return fastifyCors(fastify, corsOptions, done);
  },
  { name: "cors-plugin" },
);
