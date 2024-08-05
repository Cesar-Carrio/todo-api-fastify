import { FastifyPluginAsync } from "fastify";

const usersRoutes: FastifyPluginAsync = async (
  fastify,
  opts,
): Promise<void> => {
  fastify.get(
    "/",
    { onRequest: [fastify.authenticate] },
    async function (request, reply) {
      // make db call to get all users
      return "grab all users";
    },
  );
};

export default usersRoutes;
