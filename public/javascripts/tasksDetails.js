/**
 * Created by luis on 30/06/16.
 */
$(document).ready(function () {

    refresh_state();

});

var refresh_state = function(){

    $.get('/tasks/showtask/' + status)
        .done(function (data) {
            console.log(data);
            //$("#tasks").html(data.join(", "));
            $("#tasks").html(function(){
                $("#task").empty();
            data.forEach(function (key) {
                $("#tasks").append("<a href='../../tasks/getTask/"+ key + "'>" + key + "</a>")
                if (status == 'active') {



                    $("#tasks").append("<a href='../../tasks/change/" + status + "/done/"+key+"'> Done</a>")
                    $("#tasks").append("<a href='../../tasks/change/" + status + "/pending/"+key+"'> Pending</a></br>")
                }

                if (status == 'pending') {



                    $("#tasks").append("<a href='../../tasks/change/" + status + "/done/"+key+"'> Done</a>")
                    $("#tasks").append("<a href='../../tasks/change/" + status + "/active/"+key+"'> Active</a></br>")
                }

                if (status == 'done') {



                    $("#tasks").append("<a href='../../tasks/change/" + status + "/active/"+key+"'> Active</a>")
                    $("#tasks").append("<a href='../../tasks/change/" + status + "/pending/"+key+"'> Pending</a></br>")
                }
            })
        });

});

}
