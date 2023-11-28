const routes = [
    {
        method: 'GET',
        path: '/',
        handler: (request, h) => {
            return `Homepage`;
        },
    },
    {
        method: 'POST',
        path: '/user',
        handler: (request, h) => {
            return h.response('created').code(201);
        },
    }
];

module.exports = routes;