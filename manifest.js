const Path = require('path')
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
                plugin: require('inert')
            },
            {
                plugin: require('./employee'),
            }
        ]
    }
};