const router = require("./../route/route")

exports.register = (server, options) => {
    server.route(router);
};

exports.pkg = {
    name: "employee"
};