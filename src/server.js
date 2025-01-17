const fastify = require("fastify")({ logger: true });

fastify.get("/", async (request, reply) => {
  return { hello: "world" };
});

try {
  fastify.listen({ port: 3000 });
} catch (err) {
  fastify.log.error(err);
  process.exit(1);
}
