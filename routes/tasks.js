var database = require('../lib/tasks');
var data = new database.Tasks();
var express = require('express');
var router = express.Router();


/* GET home page. */
router.get('/home', function(req, res, next) {
    res.render('home', { title: 'Tasks' });
});

/* GET create page. */
router.get('/create', function(req, res, next) {
    res.render('create', { title: 'Create' });
});

/*GET show page. */
router.get('/show', function(req, res, next) {
    res.render('show', { title: 'Show' });
});

router.get('display/:opcion', function(req, res, next) {
    var op = req.params.opcion;

    res.send(op);
});


router.post('/create', function(req, res, next) {
    var name = req.body.name;
    var author = req.body.author;
    var description = req.body.description;
    var date = req.body.date;
    var priority = req.body.priority;
    var key = req.body.key;

    var task_values = {'name':name, 'author': author,'description': description, 'date':date, 'priority':priority};

    data.createTask(key,task_values)
    res.render('create', { title: 'Create' });
});

module.exports = router;
