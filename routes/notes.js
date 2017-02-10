var express = require('express');
var router = express.Router();
var Note = require('../models/note');

/*GET animals page */
router.get('/', function(req, res) {
  Note.find( function(err, notes) {
    res.render('notes', {notes: notes })
  })

})

router.post('/', function(req, res) {
  new Note({
    name: req.body.name,
    description: req.body.description,
    updatedAt: Date.now()
  }).save( function(err, note) {
    res.redirect('/notes');
  });
});

router.get('/:id', function(req, res) {
  Note.findById(req.params.id, function(err, note) {
    res.render('note', {note: note});
  })
})

module.exports = router;
