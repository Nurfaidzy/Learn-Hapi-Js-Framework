const service = require("./service")


exports.register = async function (server) {
  await server.register(require('@hapi/basic'));
  server.auth.strategy('simple', 'basic', { validate: service });
  server.auth.default('simple');
}

exports.pkg = {
  name: 'auth'
}