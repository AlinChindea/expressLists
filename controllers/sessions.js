const User = require('../models/user');

function newSession(req, res) {
  res.render('sessions/new');
}

function createSession(req, res) {
  User
    .findOne({ email: req.body.email })
    .exec()
    .then((user) => {
      if(!user || !user.validatePassword(req.body.password)) {
        return res.status(401).render('sessions/new', { message: 'Unrecognized credentials 🙅🏻‍♀️🙅🏾‍♂️'});
      }

      req.session.userId = user.id;
      req.flash('info', `Welcome, ${user.username}! 🍸`);
      res.redirect('/');
    })
    .catch(() => {
      res.status(500).end();
    });
}

function deleteSession(req, res) {
  return req.session.regenerate(() => {
    res.redirect('/');
  });
}

module.exports = {
  new: newSession,
  create: createSession,
  delete: deleteSession
};
