import { FastifyPluginAsync } from "fastify";

const usersRoutes: FastifyPluginAsync = async (
  fastify,
  opts,
): Promise<void> => {
  fastify.get("/users", async function (request, reply) {
    // make db call to get all users
    return "grab all users";
  });

  fastify.post("/users", async function (request, reply) {
    return "Created User";
  });
};

export default usersRoutes;
