import fp from "fastify-plugin";
import fastifyJwt, { FastifyJWTOptions } from "@fastify/jwt";
import { FastifyReply, FastifyRequest } from "fastify";

declare module "fastify" {
  export interface FastifyInstance {
    authenticate: (
      request: FastifyRequest,
      reply: FastifyReply,
    ) => Promise<void>;
  }
}

export default fp<FastifyJWTOptions>(
  (fastify, _, done) => {
    const fastifyJWTOptions: FastifyJWTOptions = {
      secret: fastify.config.JWT_SECRET,
    };

    fastify.decorate(
      "authenticate",
      async function (request: FastifyRequest, reply: FastifyReply) {
        try {
          await request.jwtVerify();
        } catch (error) {
          reply.send(error);
        }
      },
    );
    return fastifyJwt(fastify, fastifyJWTOptions, done);
  },
  { name: "jwt-plugin" },
);
