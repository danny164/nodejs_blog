const newsRouter = require('./news');
const siteRouter = require('./site');
const coursesRouter = require('./courses');
const meRouter = require('./me');

// app.get('/news', (req, res) => {
//     res.render('news');
// });

function route(app) {
    app.use('/news', newsRouter);
    app.use('/courses', coursesRouter);
    app.use('/me', meRouter);
    app.use('/', siteRouter);
}

module.exports = route;
