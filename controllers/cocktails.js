const Cocktail = require('../models/cocktail');

function cocktailsHome(req, res) {
  res.render('homepage');
}

function cocktailsIndex(req, res) {
  Cocktail
    .find()
    .exec()
    .then((cocktails) => {
      res.render('cocktails/index', { cocktails });
    })
    .catch((err) => {
      res.status(500).render('error', { err });
    });
}

function cocktailsSearch(req, res) {
  Cocktail
    .findOne({ name: req.query.search})
    .exec()
    .then((cocktail) => {
      if(!cocktail) return res.status(404).end();

      res.render('cocktails/show', { cocktail });
    })
    .catch(() => {
      res.status(500).end();
    });
}

function cocktailsNew(req, res) {
  res.render('cocktails/new');
}

function cocktailsShow(req, res) {
  Cocktail
    .findById(req.params.id)
    .exec()
    .then((cocktail) => {
      if(!cocktail) return res.status(404).send('Not found');
      res.render('cocktails/show', { cocktail });
    })
    .catch((err) => {
      res.status(500).render('error', { err });
    });
}

function cocktailsCreate(req, res) {
  Cocktail
    .create(req.body)
    .then(()  => {
      res.redirect('/cocktails');
    })
    .catch((err) => {
      res.status(500).render('error', { err });
    });
}

function cocktailsEdit(req, res) {
  Cocktail
    .findById(req.params.id)
    .exec()
    .then((cocktail) => {
      if(!cocktail) return res.status(404).send('Not found');
      res.render('cocktails/edit', { cocktail });
    })
    .catch((err) => {
      res.status(500).render('error', { err }); //error file in the views folder
    });
}

function cocktailsUpdate(req, res) {
  Cocktail
    .findById(req.params.id)
    .exec()
    .then((cocktail) => {
      if(!cocktail) return res.status(404).send('Not found');

      cocktail = Object.assign(cocktail, req.body);

      return cocktail.save();
    })
    .then((cocktail) => {
      res.redirect(`/cocktails/${cocktail.id}`);
    })
    .catch((err) => {
      res.status(500).render('error', { err });
    });
}

function cocktailsDelete(req, res) {
  Cocktail
    .findById(req.params.id) //id come
    .exec()
    .then((cocktail) => {
      if(!cocktail) return res.status(404).send('Not found');

      return cocktail.remove();
    })
    .then(() => {
      res.redirect('/cocktails');
    })
    .catch((err) => {
      res.status(500).render('error', { err });
    });
}


module.exports = {
  index: cocktailsIndex,
  home: cocktailsHome,
  search: cocktailsSearch,
  new: cocktailsNew,
  show: cocktailsShow,
  create: cocktailsCreate,
  edit: cocktailsEdit,
  update: cocktailsUpdate,
  delete: cocktailsDelete
};
