const express = require('express');
const router  = express.Router();
const cocktails = require('../controllers/cocktails');

const registrations = require('../controllers/registrations');
const sessions = require('../controllers/sessions');

function secureRoute(req, res, next) {
  if (!req.session.userId) {
    return req.session.regenerate(() => {
      req.flash('danger', 'You must be logged in.');
      res.redirect('/login');
    });
  }

  return next();
}

// A landing page route
router.route('/')
  .get(cocktails.home);

//search route
router.route('/search')
  .get(cocktails.search);

router.route('/register')
  .get(registrations.new)
  .post(registrations.create);

router.route('/login')
  .get(sessions.new)
  .post(sessions.create);

router.route('/logout')
  .get(sessions.delete);

router.route('/cocktails')
  .get(cocktails.index)
  .post(secureRoute, cocktails.create);

router.route('/cocktails/new')
  .get(secureRoute, cocktails.new);

router.route('/cocktails/:id')
  .get(cocktails.show)
  .put(secureRoute, cocktails.update)
  .delete(secureRoute, cocktails.delete);

router.route('/cocktails/:id/edit')
  .get(secureRoute, cocktails.edit);


module.exports = router;
