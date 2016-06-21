/**
 * Created by lupita on 2/06/16.
 */

var Redis = require('ioredis')
var redis = new Redis(6379,'localhost')

exports.Tasks = function(args){



    this.createTask = function (key,values, set) {

        console.log("[DEBUG][createTask values ] %s", JSON.stringify(values))

        redis.set(key, JSON.stringify(values))
        redis.sadd(set,key)

    }



    this.getTask = function (key, callback) {

        redis.get(key,function (err, result) {
            return callback(err, result)
        })
    }

    this.showTasks = function (set, callback){

        redis.smembers(set, function(err, result){

            return callback(err,result)
        })

    }

    this.changeTaskStatus = function(s1, s2, key){
        redis.smove(s1,s2,key)

    }
}