
;(function() {

    $(document).on('click', '.paging', function (e) {
        $('.content').hide();
        $('.content[data-id='+$(this).data('content')+']').show();
    });
})();

