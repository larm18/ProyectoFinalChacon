/**
 * Created by lupita on 27/06/16.
 */
$(document).ready(function(){
    refresh_state();
});

var refresh_state = function () {
    $.get('task/show' + status)
        .done(function (data) {
            console.log(data);
            $("#task").html(data.join(", "))

        });
}
var interval = 2000;
setInterval(refresh_state,interval)