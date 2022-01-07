const router = require('./beer');

const setupRoutes = (app) => {
    app.use('/api/beer', router);
}

module.exports= setupRoutes;