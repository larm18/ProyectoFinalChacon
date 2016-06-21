/**
 * Created by lupita on 2/06/16.
 */


var database = require('../lib/tasks')
var data = new database.Tasks()

var key = "L0001"
var values = {'name':'Go to the gym', 'author':'Lupita Chacon', 'description':'work out', 'date':'6/2/2016', 'priority':'Medium'}
var put = "Active"
var put1 = "Pending"
var put2 = "Done"

data.createTask(key,values)
data.getTask( key ,function(err, result)
{
    console.log(result)
});

data.showTasks( put ,function(err, result)
{
    console.log(result)
});

data.changeTaskStatus(put,put1,"lupita")
