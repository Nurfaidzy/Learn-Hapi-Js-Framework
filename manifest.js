const Path = require('path')
const Inert = require('inert')
const Employee = require("./employee")
const auth = require('./auth');
module.exports = {
  server: {
    port: 8000,
    routes: {
      files: {
        relativeTo: Path.join(__dirname, 'public')
      }
    }
  },
  register: {
    plugins: [
      {
        plugin: Inert
      },
      {
        plugin: auth
      },
      {
        plugin: 'vision',
        options: {
          engines: {
            html: require("handlebars")
          },
          path: __dirname,
        }
      },
      {
        plugin: Employee,
      },
    ]
  }
};