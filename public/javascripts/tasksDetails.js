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
                $("#tasks").append("<a href='../../tasks/getTask/"+ key + "'>" + key + "</a><br>")
            })
        });

});

}
