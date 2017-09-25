$(function($){
    $('[data-show=raw-notam]').on('click', function(){
        var $view = $(this).parents('.notamheader').find(".rawnotam");
        var $overlay = $('<div>').attr('id', 'overlay');
        var h = $view.height();
        $("body").append($overlay);
        $view.css('margin-top', -(h/2));
        $view.show();
    });

    $('[data-hide=raw-notam]').on('click', function(){
        $(this).closest(".rawnotam").hide();
        $("#overlay").remove();
    });
});