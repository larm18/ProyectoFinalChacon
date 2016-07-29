var TaskList = function () {

    return {

        initTaskWidget: function () {
            $('input.list-child').change(function() {
                if ($(this).is(':checked')) {
                    $(this).parents('li').addClass("task-done");
                } else {
                    $(this).parents('li').removeClass("task-done");
                }
            });
        }

    };

}();/**
 * Created by lupita on 28/07/16.
 */
