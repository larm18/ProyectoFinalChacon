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
/*
router.get('/show', function(req, res, next) {
    res.render('show', { title: 'Show' });
});
*/

router.get('/show/:task', function(req, res, next) {
    /*
    res.send(req.params.task );
    data.showTasks( status ,function(err, result)
    {
       res.send({result:result});
    });
    */
    var status = req.params.task;
    res.render('show', { title: 'Show' , status: status});
});

router.get('/display/:op', function(req, res, next) {
    var op = req.params.op;

    res.send(op);
});

router.get('/getTask/:op', function(req, res, next) {
    var task = req.params.op;
    data.getTask( task ,function(err, result)
    {
        console.log(result)
        //res.send(result);
        res.render('getTask', { title: 'Task Details', info:result});
    });

});

router.post('/create', function(req, res, next) {
    var name = req.body.name;
    var author = req.body.author;
    var description = req.body.description;
    var date = req.body.date;
    var priority = req.body.priority;
    var key = req.body.key;

    var task_values = {'name':name, 'author': author,'description': description, 'date':date, 'priority':priority};

    data.createTask(key,task_values,'active')
    res.render('create', { title: 'Create' });
});

router.get('/showtask/:task', function(req, res, next) {
    //res.send(req.params.task );
    var status = req.params.task;
    data.showTasks( status ,function(err, result)
    {
        res.send(result);
    });
});

module.exports = router;
