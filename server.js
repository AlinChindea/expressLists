const express        = require('express');
const expressLayouts = require('express-ejs-layouts');
const bodyParser     = require('body-parser');
const methodOverride = require('method-override');
const mongoose       = require('mongoose');
mongoose.Promise     = require('bluebird');
const session        = require('express-session');
const User           = require('./models/user');
const flash = require('express-flash');

const app            = express();
const router         = require('./config/routes');

const { port, dbURI } = require('./config/environment');
mongoose.connect(dbURI);

app.set('view engine', 'ejs');
app.set('views', `${__dirname}/views`);

app.use(expressLayouts);
app.use(express.static(`${__dirname}/public`));
app.use(bodyParser.urlencoded({ extended: true }));

app.use(session({
  secret: process.env.SESSION_SECRET || 'shh it is a secret',
  resave: false,
  saveUninitialized: false
}));

app.use(flash());

app.use(methodOverride((req) => {
  if (req.body && typeof req.body === 'object' && '_method' in req.body) {
    const method = req.body._method;
    delete req.body._method;
    return method;
  }
}));

app.use((req, res, next) => {
  if (!req.session.userId) return next();

  User
    .findById(req.session.userId)
    .exec()
    .then((user) => {
      if(!user) {
        return req.session.regenerate(() => {
          res.redirect('/');
        });
      }

      res.locals.user = user;
      res.locals.isLoggedIn = true;

      next();
    });
});
app.use(router);

app.listen(port, () => console.log(`Express is listening to port ${port}`));
