import fastifyEnv, { FastifyEnvOptions } from "@fastify/env";
import { Type } from "@sinclair/typebox";
import fp from "fastify-plugin";

declare module "fastify" {
  export interface FastifyInstance {
    config: {
      PORT: number;
      HTTP_HOST: string;
      API_KEY: string;
      USE_PROD_DB: boolean;
    };
  }
}

export const schema = Type.Object({
  PORT: Type.Number({ default: 3000 }),
  HTTP_HOST: Type.String({ default: "0.0.0.0" }),
  API_KEY: Type.String(),
  USE_PROD_DB: Type.Boolean({ default: false }),
});

export default fp<FastifyEnvOptions>(
  (fastify, _, done) => {
    const configOptions: FastifyEnvOptions = {
      schema: schema,
      dotenv: true,
    };
    return fastifyEnv(fastify, configOptions, done);
  },
  { name: "env-plugin" },
);
