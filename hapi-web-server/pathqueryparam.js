const routes = [
    {
        method: 'GET',
        path: '/hello/{name?}',
        handler: (request, h) => {
            const { name = 'stranger' } = request.params;
            const { lang } = request.query;
 
            if(lang === 'id') {
                return `Hai, ${name}!`;
            }

            return `Hello, ${name}!`;
        },
    },
];

module.exports = routes;