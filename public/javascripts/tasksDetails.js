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
            $("#tasks").html(data.join(", "));
        });

}

var interval = 2000;
setInterval(refresh_state, interval);