import { FastifyPluginAsync } from "fastify";

const root: FastifyPluginAsync = async (fastify, opts): Promise<void> => {
  fastify.get("/", async function (request, reply) {
    const token = await fastify.jwt.sign({ test: "test" });
    reply.send({ token });
  });
};

export default root;
