const newsRouter = require('./news');
const siteRouter = require('./site');

// app.get('/news', (req, res) => {
//     res.render('news');
// });

function route(app) {
    app.use('/news', newsRouter);
    app.use('/', siteRouter);
}

module.exports = route;
