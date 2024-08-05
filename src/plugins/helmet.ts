import fp from "fastify-plugin";
import helmet, { FastifyHelmetOptions } from "@fastify/helmet";

export default fp<FastifyHelmetOptions>(
  (fastify, _, done) => {
    const helmetOpts: FastifyHelmetOptions = {
      global: true,
      hidePoweredBy: true,
      dnsPrefetchControl: { allow: false },
      frameguard: { action: "deny" },
      referrerPolicy: { policy: "no-referrer" },
      hsts: {
        maxAge: 31536000,
        includeSubDomains: true,
        preload: true,
      },
      noSniff: true,
      ieNoOpen: true,
      xssFilter: true,
    };

    helmet(fastify, helmetOpts);
    done();
  },
  { name: "helmet-plugin" },
);
