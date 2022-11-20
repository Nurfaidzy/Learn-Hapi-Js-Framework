const Joi = require('joi');

module.exports = [
    {
        method: 'GET',
        path: '/',
        handler: (request, h) => {
            return "<h1>Hi this work!</h1>"
        }
    }
    ,
    {
        method: 'POST',
        path: '/require',
        options: {
            validate: {
                payload: Joi.object({
                    start: Joi.number(),
                    end: Joi.number(),
                })
            }
        },
        handler: (request, h) => {
            return request.payload;
        }
    },
    {
        method: 'GET',
        path: '/{param*}',
        handler: {
            directory: {
                path: '.',
                redirectToSlash: true,
                index: true,
            }
        }
    },
    {
        method: 'GET',
        path: '/html',
        handler: {
            file: "index.html"
        }
    },
    {
        method: 'GET',
        path: '/gethanlers',
        handler: (request, h) => {
            return h.view("./mostfile/list.html"), {
                test: "ini test"
            }
        }
    },
]